import React, {FC, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {genreActions} from "../../redux";
import {Genre} from "../Genre/Genre";

const GenresList: FC = () => {
    const {genresList} = useAppSelector(state => state.genreReducer);
    const dispatch = useAppDispatch();

    // Get all genres
    useEffect(() => {
        dispatch(genreActions.getAllGenres());
    }, [dispatch])

    return (
        <div>
            {
                // If we have genres list we can render each of all genre
                genresList && genresList.map(genre => <Genre key={genre.id} genre={genre}/>)
            }
        </div>
    );
};

export {GenresList};