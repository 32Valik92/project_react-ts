import {FC} from 'react';
import ReactStarRatings from 'react-star-ratings';

import {IMovie} from "../../interfaces";
import {basePostURL} from "../../constants";

interface IProps {
    movie: IMovie;
}

const MovieCard: FC<IProps> = ({movie}) => {
    const {title, vote_average, poster_path} = movie;
    return (
        <div>

            {/* Tittle our movie */}
            <div>
                {title}
            </div>

            {/* Get img for Card */}
            <div>
                <img src={`${basePostURL}${poster_path}`} alt={title}/>
            </div>

            {/* star-ratings */}
            <div>
                <ReactStarRatings rating={vote_average} starRatedColor='blue' numberOfStars={10} starDimension='30px' starSpacing='5px'/>
            </div>
        </div>
    );
};

export {MovieCard};