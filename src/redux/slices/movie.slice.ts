import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IChosenMovie, IMovie, IPagination, ISearch} from "../../interfaces";
import {movieService} from "../../services";

interface IState {
    page: number | null; // Page with our movies
    moviesList: IMovie[]; // List of all movies
    chosenMovie: IChosenMovie; // The movie which we chose
    searchMovies: IMovie[];
    searchTrigger: boolean;
    searchWords: ISearch; // A words which we will use for get movies by this words

}

const initialState: IState = {
    page: 1,
    moviesList: [],
    chosenMovie: null,
    searchMovies: [],
    searchTrigger: false,
    searchWords: {searchWords: ''}
};

// AsyncThunk for getting all info about pagination page
const getAllMovies = createAsyncThunk<IPagination<IMovie[]>, { page: number }>(
    'movieSlice/getAllMovies',
    async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getMovies(page);
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
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
);

// AsyncThunk for getting movies by search words
const searchMoviesByWords = createAsyncThunk<IPagination<IMovie[]>, { words: ISearch, page: number }>(
    'movieSlice/searchMoviesByWords',
    async ({words, page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.searchMovies(words, page);
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
    reducers: {
        // Reset the movies we have selected
        resetSearchMovie: state => {
            state.searchMovies = [];
        },

        // Change trigger for showing searched movies
        changeSearchTrigger: state => {
            state.searchTrigger = !state.searchTrigger;
        },

        // Set words for search from our input
        setSearchWords: (state, action) => {
            state.searchWords = action.payload
        },

        // Reset searchWords for get main movies list
        resetSearchWords: state => {
            state.searchWords = {searchWords: ''}
        }
    },
    extraReducers: (builder => {
        builder
            // After getting main movies list
            .addCase(getAllMovies.fulfilled, (state, action) => {
                const {page, results} = action.payload;
                state.page = page;
                state.moviesList = results;
            })

            // For getting info about movie which we selected
            .addCase(getChoseMovieId.fulfilled, (state, action) => {
                state.chosenMovie = action.payload;
            })

            // For getting movies list by inputted words
            .addCase(searchMoviesByWords.fulfilled, (state, action) => {
                const {results, page} = action.payload;
                state.searchMovies = results;
                state.page = page;
            })
    })
});

const {reducer: movieReducer, actions} = slice;

const movieActions = {
    ...actions,
    getAllMovies,
    getChoseMovieId,
    searchMoviesByWords
}

export {
    movieReducer,
    movieActions
}
