import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IMovie, IPagination} from "../../interfaces";
import {movieService} from "../../services";

interface IState {
    page: number | null;
    moviesList: IMovie[];

}

const initialState: IState = {
    page: 1,
    moviesList: [],
};

// AsyncThunk for getting all info about pagination page
const getAllMovies = createAsyncThunk<IPagination<IMovie[]>, { page: number }>(
    'movieSlice/getAllMovies',
    async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll(page);
            // console.log(data);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
)

const slice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: (builder => {
        builder
            .addCase(getAllMovies.fulfilled, (state, action) => {
                const {page, results} = action.payload;
                state.page = page;
                state.moviesList = results;
            })
    })
});

const {reducer: movieReducer, actions} = slice;

const movieActions = {
    ...actions,
    getAllMovies
}

export {
    movieReducer,
    movieActions
}