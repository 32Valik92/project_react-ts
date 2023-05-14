import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IGenre, IMovie, IPagination, IResGenre} from "../../interfaces";
import {genreService} from "../../services";

interface IState {
    genresList: IGenre[];
    moviesChoseGenre: IMovie[];

}

const initialState: IState = {
    genresList: [],
    moviesChoseGenre: []
};

const getAllGenres = createAsyncThunk<IResGenre<IGenre[]>, void>(
    'genresSlice/getAllGenres',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await genreService.getAll();
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
);

const getAllMoviesByGenre = createAsyncThunk<IPagination<IMovie[]>, { id: number }>(
    'genresSlice/getAllMoviesByGenre',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await genreService.getMoviesByGenre(id);
            return data;

        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
)

const slice = createSlice({
    name: 'genresSlice',
    initialState,
    reducers: {},
    extraReducers: (builder => {
        builder
            .addCase(getAllGenres.fulfilled, (state, action) => {
                state.genresList = action.payload.genres;
            })
            .addCase(getAllMoviesByGenre.fulfilled, (state, action) => {
                state.moviesChoseGenre = action.payload.results;
            })
    })

})

const {reducer: genreReducer, actions} = slice;

const genreActions = {
    ...actions,
    getAllGenres,
    getAllMoviesByGenre
}

export {
    genreReducer,
    genreActions
}