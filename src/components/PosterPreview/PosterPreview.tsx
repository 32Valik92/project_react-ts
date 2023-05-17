import {FC} from 'react';

import {basePostURL} from "../../constants";

interface IProps {
    poster_path: string;
    title: string;
}

const PosterPreview: FC<IProps> = ({poster_path, title}) => {

    return (
        <div>
            {
                poster_path
                    ?
                    <img src={`${basePostURL}${poster_path}`} alt={title}/>
                    :
                    'Sorry poster is not defined'
            }
        </div>
    );
};

export {PosterPreview};