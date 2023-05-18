import React from 'react';

import {GenresList, MoviesList, SearchMovie} from "../../components";
import {useAppSelector} from "../../hooks";
import './MoviePage.css';

const MoviePage = () => {
    const {searchMovies, searchWords} = useAppSelector(state => state.movieReducer);

    return (
        <div className={'main'}>
            <GenresList/>

            {
                // If we don't click on search button we don't need this component
                searchWords.searchWords &&
                <SearchMovie/>
            }

            {
                // if we have search movie we don't need main movie list
                !searchMovies.length &&
                <MoviesList/>
            }
        </div>
    );
};

export {MoviePage};