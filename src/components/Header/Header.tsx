import React, {FC} from 'react';
import {NavLink} from "react-router-dom";

import {User} from "../UserInfo/User";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";
import {SearchInput} from "../SearchInput/SearchInput";

const Header: FC = () => {
    const {searchTrigger} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();

    // Function for reset SearchMovie and SearchWords for when we click on Movies we will have main page with main movies
    const resetMoviePage = (): void => {
        dispatch(movieActions.resetSearchMovie());
        dispatch(movieActions.resetSearchWords());

        if (searchTrigger === true) {
            dispatch(movieActions.changeSearchTrigger())
        }
    }

    return (
        <div>
            <div>
                <NavLink to={'movies?page=1'} onClick={resetMoviePage}>Movies</NavLink>
            </div>

            <div>
                <NavLink to={'movieInfo'}>MovieInfoPage</NavLink>
            </div>

            <div>
                <SearchInput/>
            </div>

            <User/>

        </div>
    );
};

export {Header};