import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";
import {SubmitHandler, useForm} from "react-hook-form";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {ISearch} from "../../interfaces";
import {movieActions} from "../../redux";
import css from './SearchInput.module.css';

const SearchInput: FC = () => {
    const {searchTrigger} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {register, reset, handleSubmit} = useForm<ISearch>();

    // Function for set words from input to store
    const search: SubmitHandler<ISearch> = (words) => {
        if (!searchTrigger) {
            // Change trigger after click for showing result
            dispatch(movieActions.changeSearchTrigger());
        }

        // Set searched words to store
        dispatch(movieActions.setSearchWords(words));
        navigate('movies?page=1'); // Move to main movies page
        reset();
    }

    return (
        <div className={css.formDiv}>
            <form onSubmit={handleSubmit(search)}>
                <input type="text" placeholder={'Enter keywords...'} {...register('searchWords')}/>
                <button>Search</button>
            </form>
        </div>
    );
};

export {SearchInput};
