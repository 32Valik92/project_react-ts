import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IChosenMovie, IMovie, IPagination} from "../../interfaces";
import {movieService} from "../../services";

interface IState {
    page: number | null; // Page with our movies
    moviesList: IMovie[]; // List of all movies
    chosenMovie: IChosenMovie; // The movie which we chose

}

const initialState: IState = {
    page: 1,
    moviesList: [],
    chosenMovie: null
};

// AsyncThunk for getting all info about pagination page
const getAllMovies = createAsyncThunk<IPagination<IMovie[]>, { page: number }>(
    'movieSlice/getAllMovies',
    async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getMovies(page);
            // console.log(data);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
);

// AsyncThunk for getting all information about chosen movie
const getChoseMovieId = createAsyncThunk<IChosenMovie, { id: number }>(
    'movieSlice/getChoseMovieId',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getByChoseMovieId(id);
            // console.log(data)
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
);

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
            .addCase(getChoseMovieId.fulfilled, (state, action) => {
                state.chosenMovie = action.payload;
            })
    })
});

const {reducer: movieReducer, actions} = slice;

const movieActions = {
    ...actions,
    getAllMovies,
    getChoseMovieId
}

export {
    movieReducer,
    movieActions
}