import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {genreActions} from "../../redux";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {GenresList} from "../GenresList/GenresList";
import {Loading} from "../Loading/Loading";
import './MoviesChoseGenre.css'

const MoviesChoseGenre = () => {
    const {moviesChoseGenre: movies, page, isLoading} = useAppSelector(state => state.genreReducer);
    const dispatch = useAppDispatch();
    const [query, setQuery] = useSearchParams({page: '1'});

    // Get movies page by chosen genre
    useEffect(() => {
        dispatch(genreActions.getAllMoviesByGenre({id: +query.get('choseGenreId'), page: +query.get('page')}));
    }, [dispatch, query])

    // Function for pagination
    const paginationFunc = (button: string): void => {
        if (button === 'next') {
            setQuery(prev => ({...prev, page: +prev.get('page') + 1, choseGenreId: +query.get('choseGenreId')}));
        } else {
            setQuery(prev => ({...prev, page: +prev.get('page') - 1, choseGenreId: +query.get('choseGenreId')}));
        }
    }
    return (
        <div className={'main'}>

            {/* Render genres list */}
            <GenresList/>

            {
                // If we are in pending status we have spinner else we have our component
                isLoading
                    ?
                    <Loading/>
                    :
                    <div className={'moviesListByGenre'}>

                        {/* Render all movie card */}
                        <div className={'movieCards'}>
                            {movies && movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
                        </div>

                        {/* Pagination */}
                        <div className={'pagination'}>
                            <button disabled={page === 1} onClick={(): void => paginationFunc('prev')}> prev page</button>
                            <button disabled={page === 500} onClick={(): void => paginationFunc('next')}> next page</button>
                        </div>
                    </div>
            }
        </div>
    );
};

export {MoviesChoseGenre};