import React from 'react';

import {GenresList, MoviesList, SearchMovie} from "../components";
import {useAppSelector} from "../hooks";

const MoviePage = () => {
    const {searchMovies} = useAppSelector(state => state.movieReducer);

    return (
        <div>
            <GenresList/>
            <SearchMovie/>
            {
                // if we have search movie we don't need main movie list
                !searchMovies.length &&
                <MoviesList/>
            }
        </div>
    );
};

export {MoviePage};