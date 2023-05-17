import React, {FC, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";
import {InfoPoster} from "../InfoPoster/InfoPoster";

const MovieInfo: FC = () => {
    const {chosenMovie} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();

    const choseMovieId = +localStorage.getItem('choseMovieId'); // Get choseMovieId from localStorage

    // Get info about chosen movie
    useEffect(() => {
        dispatch(movieActions.getChoseMovieId({id: choseMovieId}));
    }, [dispatch, choseMovieId])

    return (
        <div>
            {
                // Render all information about chosen movie
                chosenMovie && <InfoPoster chosenMovie={chosenMovie}/>
            }
        </div>
    );
};

export {MovieInfo};