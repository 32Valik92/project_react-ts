import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";
import {InfoPoster} from "../InfoPoster/InfoPoster";

const MovieInfo: FC = () => {
    const dispatch = useAppDispatch();
    const {chosenMovie} = useAppSelector(state => state.movieReducer);

    const choseMovieId = +localStorage.getItem('choseMovieId'); // Get choseMovieId from localStorage

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