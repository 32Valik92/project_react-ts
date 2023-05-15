import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {genreActions} from "../../redux";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {GenresList} from "../GenresList/GenresList";

const MoviesChoseGenre = () => {
    const dispatch = useAppDispatch();
    const {moviesChoseGenre: movies, page} = useAppSelector(state => state.genreReducer);

    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        dispatch(genreActions.getAllMoviesByGenre({id: +query.get('choseGenreId'), page: +query.get('page')}));
    }, [dispatch, query])

    return (
        <div>
            {/* Render genres list */}
            <GenresList/>

            {/* Pagination */}
            <div>
                <button disabled={page === 1}
                        onClick={(): void => setQuery(prev => ({...prev, page: +prev.get('page') - 1, choseGenreId: +query.get('choseGenreId')}))}> prev page
                </button>
                <button onClick={(): void => setQuery(prev => ({...prev, page: +prev.get('page') + 1, choseGenreId: +query.get('choseGenreId')}))}> next page
                </button>
            </div>

            {/* Render all movie card */}
            <div>
                {movies && movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
            </div>
        </div>
    );
};

export {MoviesChoseGenre};