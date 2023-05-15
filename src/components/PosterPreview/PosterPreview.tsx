import {FC} from 'react';
import {basePostURL} from "../../constants";

interface IProps {
    poster_path: string;
    title: string;
}

const PosterPreview: FC<IProps> = ({poster_path, title}) => {
    return (
        <div>
            <img src={`${basePostURL}${poster_path}`} alt={title}/>
        </div>
    );
};

export {PosterPreview};