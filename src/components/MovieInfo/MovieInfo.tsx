import React, {FC, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";
import {InfoPoster} from "../InfoPoster/InfoPoster";
import {Loading} from "../Loading/Loading";
import './MovieInfo.css';

const MovieInfo: FC = () => {
    const {chosenMovie, isLoading} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();

    const choseMovieId = +localStorage.getItem('choseMovieId'); // Get choseMovieId from localStorage

    // Get info about chosen movie
    useEffect(() => {
        if (choseMovieId) {
            dispatch(movieActions.getChoseMovieId({id: choseMovieId}));
        }
    }, [dispatch, choseMovieId])


    return (

        // If we have id in localStorage, we can get all info
        choseMovieId
            ?
            (
                // If we are in pending status we have spinner else we have our component
                isLoading
                    ?
                    <Loading/>
                    :
                    // Render all information about chosen movie
                    chosenMovie && <InfoPoster chosenMovie={chosenMovie}/>
            )
            :
            <div className={'notChoseMovie'}>
                You haven't selected any movie. Please choose one that interests you, and you will receive
                detailed information about it.
            </div>

    );
};

export {MovieInfo};