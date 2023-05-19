import {FC} from 'react';
import ReactStarRatings from "react-star-ratings";

import {IChosenMovie} from "../../interfaces";
import {PosterPreview} from "../PosterPreview/PosterPreview";
import {InfoTable} from "../InfoTable/InfoTable";
import './InfoPoster.css';

interface IProps {
    chosenMovie: IChosenMovie;
}

const InfoPoster: FC<IProps> = ({chosenMovie}) => {
    const {
        poster_path: poster,
        title,
        genres,
        release_date,
        runtime,
        vote_average,
        production_companies,
        production_countries,
        overview
    } = chosenMovie;


    // Get array countries and companies for give to <InfoTable/>
    const companies = production_companies.map(company => company.name);
    const countries = production_countries.map(country => country.name);

    return (
        <div className={'InfoPoster'}>

            <div className={'title'}>
                <h2>{title}</h2>
            </div>

            <div className={'cardAndTable'}>
                <div className={'card'}>
                    {/* If we have another poster for card we send it, else send default poster */}
                    <PosterPreview
                        poster_path={chosenMovie.belongs_to_collection ? chosenMovie.belongs_to_collection.poster_path : poster}
                        title={title}/>

                    {/* Star Ratings from react-star-ratings */}
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

                {/* Component where we render all info about chosen movie */}
                <InfoTable genres={genres} release_date={release_date} runtime={runtime} vote_average={vote_average}
                           production_companies={companies} production_countries={countries}/>
            </div>


            {/* Main info about chosen movie */}
            <div className={'overview'}>{overview}</div>

        </div>
    );
};

export {InfoPoster};