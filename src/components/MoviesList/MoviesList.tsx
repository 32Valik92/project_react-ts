import React, {FC, useEffect} from 'react';
import {useSearchParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";

const MoviesList: FC = () => {
    const {moviesList, page} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();
    const [query, setQuery] = useSearchParams({page: '1'});

    // Get movies page for showing
    useEffect(() => {
        dispatch(movieActions.getAllMovies({page: +query.get('page')}));
    }, [query, dispatch])

    return (
        <div>

            {/* Pagination */}
            <div>
                <button disabled={page === 1}
                        onClick={(): void => setQuery(prev => (
                            {
                                ...prev, page: +prev.get('page') - 1
                            }
                        ))}> prev page
                </button>

                <button disabled={page === 500}
                        onClick={(): void => setQuery(prev => (
                            {
                                ...prev, page: +prev.get('page') + 1
                            }
                        ))}> next page
                </button>
            </div>

            {/* Show movie cards */}
            <div>
                {moviesList && moviesList.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
            </div>

            {/* Pagination */}
            <div>
                <button disabled={page === 1}
                        onClick={(): void => setQuery(prev => (
                            {
                                ...prev, page: +prev.get('page') - 1
                            }
                        ))}> prev page
                </button>

                <button disabled={page === 500}
                        onClick={(): void => setQuery(prev => (
                            {
                                ...prev, page: +prev.get('page') + 1
                            }
                        ))}> next page
                </button>
            </div>

        </div>
    );
};

export {MoviesList};