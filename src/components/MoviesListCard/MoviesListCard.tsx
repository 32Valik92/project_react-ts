import {FC} from 'react';
import ReactStarRatings from 'react-star-ratings';

import {IMovie} from "../../interfaces";
import {PosterPreview} from "../PosterPreview/PosterPreview";
import {useNavigate} from "react-router-dom";

interface IProps {
    movie: IMovie;
}

const MoviesListCard: FC<IProps> = ({movie}) => {
    const navigate = useNavigate();
    const {title, id, vote_average, poster_path} = movie;

    // Function for get choseMovieId and jump to info page about chosen movie
    const movieInfo = () => {
        localStorage.setItem('choseMovieId', `${id}`);
        navigate('/movieInfo');
    };

    return (
        <div onClick={movieInfo}>

            {/* Tittle our movie */}
            <div>
                {title}
            </div>

            {/* Get img for Card */}
            <PosterPreview key={id} poster_path={poster_path} title={title}/>

            {/* star-ratings */}
            <ReactStarRatings rating={vote_average} starRatedColor='blue' numberOfStars={10} starDimension='30px' starSpacing='5px'/>

        </div>
    );
};

export {MoviesListCard};