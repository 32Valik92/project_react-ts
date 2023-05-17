import React, {FC, useEffect} from 'react';
import {useSearchParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {movieActions} from "../../redux";


const SearchMovie: FC = () => {
    const {searchMovies, searchTrigger, page, searchWords} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();
    const [query, setQuery] = useSearchParams({page: '1'});

    // Get and set to the movie store our movies by searched words
    useEffect(() => {
        dispatch(movieActions.searchMoviesByWords({words: searchWords, page: +query.get('page')}))
    }, [query, searchWords, dispatch])

    return (
        <div>
            {
                // If we don't have search movies, and we don't click on button to send search words
                !searchMovies.length && searchTrigger
                    ?
                    <div>
                        Sorry. We can't find these movies
                    </div>
                    :
                    // If we have search words in our store for finding
                    searchWords.searchWords &&
                    <div>
                        {/* Pagination */}
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

                        {/* Showing our searched movies */}
                        {searchMovies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
                    </div>
            }
        </div>
    );
};

export {SearchMovie};
