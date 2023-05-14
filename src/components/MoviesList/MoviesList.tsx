import React, {FC, useEffect} from 'react';
import {useSearchParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";
import {MovieCard} from "../MovieCard/MovieCard";

const MoviesList: FC = () => {
    const dispatch = useAppDispatch();
    const {moviesList, page} = useAppSelector(state => state.movieReducer);
    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        console.log(query.get('page'))
        dispatch(movieActions.getAllMovies({page: +query.get('page')}));
    }, [query, dispatch])

    return (
        <div>

            {/* Pagination */}
            <div>
                <button disabled={page === 1}
                        onClick={(): void => setQuery(prev => ({...prev, page: +prev.get('page') - 1}))}> prev page
                </button>
                <button onClick={(): void => setQuery(prev => ({...prev, page: +prev.get('page') + 1}))}> next page
                </button>
            </div>

            {/* Show movie page */}
            <div>
                {moviesList && moviesList.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
            </div>

            {/* Pagination */}
            <div>
                <button disabled={page === 1}
                        onClick={(): void => setQuery(prev => ({...prev, page: +prev.get('page') - 1}))}> prev page
                </button>
                <button onClick={(): void => setQuery(prev => ({...prev, page: +prev.get('page') + 1}))}> next page
                </button>
            </div>
        </div>
    );
};

export {MoviesList};