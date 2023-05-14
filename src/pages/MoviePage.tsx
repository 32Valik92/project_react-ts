import React from 'react';

import {GenresList, MoviesList, SearchMovie} from "../components";

const MoviePage = () => {
    return (
        <div>
            <SearchMovie/>
            <div>
                <GenresList/>
                <MoviesList/>
            </div>
        </div>
    );
};

export {MoviePage};