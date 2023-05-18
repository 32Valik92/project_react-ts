import React, {FC, useEffect} from 'react';
import {useSearchParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {Loading} from "../Loading/Loading";
import './MoviesList.css';

const MoviesList: FC = () => {
    const {moviesList, page, isLoading, searchWords} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();
    const [query, setQuery] = useSearchParams({page: '1'});

    // Get movies page for showing
    useEffect(() => {
        dispatch(movieActions.getAllMovies({page: +query.get('page')}));
    }, [query, dispatch])

    // Function for pagination and hide message about "We can't find"
    const paginationFunc = (button: string): void => {
        if (button === 'next') {
            setQuery(prev => ({...prev, page: +prev.get('page') + 1}));
        } else {
            setQuery(prev => ({...prev, page: +prev.get('page') - 1}));
        }

        // When we got message about "We can't find" and after click we will not see that
        if (searchWords.searchWords) {
            dispatch(movieActions.resetSearchWords());
        }
    }

    return (
        // If we are in pending status we have spinner else we have our component
        isLoading
            ?
            <Loading/>
            :
            <div className={'moviesList'}>
                {/* Pagination */}
                <div>
                    <button disabled={page === 1} onClick={(): void => paginationFunc('prev')}> prev page</button>
                    <button disabled={page === 500} onClick={(): void => paginationFunc('next')}> next page</button>
                </div>

                {/* Show movie cards */}
                <div>
                    {
                        moviesList && moviesList.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)
                    }
                </div>

                {/* Pagination */}
                <div>
                    <button disabled={page === 1} onClick={(): void => paginationFunc('prev')}> prev page</button>
                    <button disabled={page === 500} onClick={(): void => paginationFunc('next')}> next page</button>
                </div>

            </div>
    );
};

export {MoviesList};
