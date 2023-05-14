import React, {FC} from 'react';
import {NavigateFunction, useNavigate} from "react-router-dom";

import {IGenre} from "../../interfaces";

interface IProps {
    genre: IGenre;
}

const Genre: FC<IProps> = ({genre}) => {
    const navigate: NavigateFunction = useNavigate();

    const {id, name} = genre;

    return (
        <div onClick={() => navigate(`/choseGenre?choseGenreId=${id}`)}>
            {name}
        </div>
    );
};

export {Genre};