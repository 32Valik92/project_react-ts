import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {genreActions} from "../../redux";
import {MovieCard} from "../MovieCard/MovieCard";

const MoviesChoseGenre = () => {
    const {moviesChoseGenre: movies} = useAppSelector(state => state.genreReducer);
    const [query, setQuery] = useSearchParams({page: '1'});

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(genreActions.getAllMoviesByGenre({id: +query.get('choseGenreId')}));
    }, [dispatch])

    return (
        <div>
            {movies && movies.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {MoviesChoseGenre};