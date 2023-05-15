import {FC} from 'react';
import ReactStarRatings from "react-star-ratings";

import {IChosenMovie} from "../../interfaces";
import {PosterPreview} from "../PosterPreview/PosterPreview";
import {InfoTable} from "../InfoTable/InfoTable";

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
        production_countries
    } = chosenMovie;


    // Get array countries and companies for give to <InfoTable/>
    const companies = production_companies.map(company => company.name);
    const countries = production_countries.map(country => country.name);

    return (
        <div className={'InfoPoster'}>
            <div><h1>{title}</h1></div>
            <div>
                <PosterPreview
                    poster_path={chosenMovie.belongs_to_collection ? chosenMovie.belongs_to_collection.poster_path : poster}
                    title={title}/>

                <ReactStarRatings rating={vote_average} starRatedColor='blue' numberOfStars={10} starDimension='30px'
                                  starSpacing='5px'/>
            </div>
            <InfoTable genres={genres} release_date={release_date} runtime={runtime} vote_average={vote_average}
                       production_companies={companies} production_countries={countries}/>

        </div>
    );
};

export {InfoPoster};