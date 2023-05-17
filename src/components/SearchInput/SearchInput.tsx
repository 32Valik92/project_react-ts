import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";
import {SubmitHandler, useForm} from "react-hook-form";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {ISearch} from "../../interfaces";
import {movieActions} from "../../redux";

const SearchInput: FC = () => {
    const {searchTrigger} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {register, reset, handleSubmit} = useForm<ISearch>();

    // Function for set words from input to store
    const search:SubmitHandler<ISearch> = (words) => {
        if (!searchTrigger){
            // Change trigger after click for showing searched movies
            dispatch(movieActions.changeSearchTrigger());
        }

        // Set searched words to store
        dispatch(movieActions.setSearchWords(words))
        navigate('movies?page=1'); // Move to main movies page
        reset();
    }

    return (
        <form onSubmit={handleSubmit(search)}>
            <input type="text" placeholder={'search'} {...register('searchWords')}/>
            <button>search</button>
        </form>
    );
};

export {SearchInput};
