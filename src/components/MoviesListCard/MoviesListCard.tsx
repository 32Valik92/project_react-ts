import {FC} from 'react';
import ReactStarRatings from 'react-star-ratings';
import {useNavigate} from "react-router-dom";

import {IMovie} from "../../interfaces";
import {PosterPreview} from "../PosterPreview/PosterPreview";
import './MoviesListCard.css'

interface IProps {
    movie: IMovie;
}

const MoviesListCard: FC<IProps> = ({movie}) => {
    const navigate = useNavigate();
    const {title, id, vote_average, poster_path} = movie;

    // Function for set choseMovieId to localStorage and jump to info page about chosen movie
    const movieInfo = (): void => {
        localStorage.setItem('choseMovieId', `${id}`);
        navigate('/movieInfo');
    };

    return (
        <div className={'moviesListCard'} onClick={movieInfo}>

            {/* Tittle our movie */}
            <div className={'title'}>
                {title}
            </div>

            {/* Get img for Card */}
            <PosterPreview key={id} poster_path={poster_path} title={title}/>

            {/* star-ratings from react-star-ratings */}
            <div className={'starsDiv'}>
                <ReactStarRatings
                    rating={vote_average}
                    starRatedColor='black'
                    numberOfStars={10}
                    starDimension='100%'
                    starSpacing='2px'
                />
            </div>

        </div>
    );
};

export {MoviesListCard};