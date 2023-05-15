import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";

const MovieInfo: FC = () => {
    const dispatch = useAppDispatch();

    const choseMovieId = +localStorage.getItem('choseMovieId');
    const {chosenMovie} = useAppSelector(state => state.movieReducer);

    useEffect(() => {
        dispatch(movieActions.getChoseMovieId({id: choseMovieId}));
    },[dispatch, choseMovieId])

    return (
        <div>
            {chosenMovie && chosenMovie.id}
        </div>
    );
};

export {MovieInfo};