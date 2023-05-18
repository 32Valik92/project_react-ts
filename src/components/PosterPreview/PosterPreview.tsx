import {FC} from 'react';

import {basePostURL} from "../../constants";
import undefined_photo from '../../assets/images/undefined_photo.jpg'

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
                    <img src={undefined_photo} alt={title}/>
            }
        </div>
    );
};

export {PosterPreview};