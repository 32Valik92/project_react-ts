import {createAsyncThunk, createSlice, isFulfilled, isPending} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IGenre, IMovie, IPagination, IResGenre} from "../../interfaces";
import {genreService} from "../../services";

interface IState {
    genresList: IGenre[]; // List of all genres
    moviesChoseGenre: IMovie[]; // Array movies of chosen genre
    page: number;
    isLoading: boolean;
}

const initialState: IState = {
    genresList: [],
    moviesChoseGenre: [],
    page: 1,
    isLoading: true
};

// AsyncThunk for getting all genres from API
const getAllGenres = createAsyncThunk<IResGenre<IGenre[]>, void>(
    'genresSlice/getAllGenres',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await genreService.getGenres();
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
);

// AsyncThunk for getting movies by chosen genre
const getAllMoviesByGenre = createAsyncThunk<IPagination<IMovie[]>, { id: number, page: number }>(
    'genresSlice/getAllMoviesByGenre',
    async ({id, page}, {rejectWithValue}) => {
        try {
            const {data} = await genreService.getMoviesByGenre(id, page);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
);

const slice = createSlice({
    name: 'genresSlice',
    initialState,
    reducers: {},
    extraReducers: (builder => {
        builder
            // For getting all genres
            .addCase(getAllGenres.fulfilled, (state, action) => {
                state.genresList = action.payload.genres;
            })

            // For getting main movies list by chosen genre
            .addCase(getAllMoviesByGenre.fulfilled, (state, action) => {
                const {page, results} = action.payload;
                state.moviesChoseGenre = results;
                state.page = page;
            })

            // For don't see the previous list for a split second
            .addMatcher(isPending(getAllMoviesByGenre), state => {
                state.isLoading = true;
                state.moviesChoseGenre = [];
            })

            // Finish loading animation
            .addMatcher(isFulfilled(), state => {
                state.isLoading = false;
            })
    })

});

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