import {FC} from 'react';

import {IGenre} from "../../interfaces";
import {Genre} from "../Genre/Genre";
import './InfoTable.css';

interface IProps {
    genres: IGenre[];
    release_date: string;
    runtime: number;
    vote_average: number;
    production_companies: string[];
    production_countries: string[];
}

const InfoTable: FC<IProps> = ({
                                   production_companies,
                                   production_countries,
                                   runtime,
                                   genres,
                                   release_date,
                                   vote_average
                               }) => {
    return (
        <div className={'table'}>

            <div className={'genresDiv'}>
                <h3>Genres</h3>

                <div className={'genres'}>
                    {genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
                </div>
            </div>

            <table>
                <tbody>
                <tr>
                    <td>Release date</td>
                    <td>{release_date}</td>
                </tr>
                <tr>
                    <td>Vote average</td>
                    <td>{vote_average}</td>
                </tr>
                <tr>
                    <td>Runtime</td>
                    <td>{runtime}</td>
                </tr>
                <tr>
                    <td>Production companies</td>
                    <td>{
                        production_companies.length
                            ?
                            <ol className={'companies'}>
                                {production_companies.map((company, index) => <li key={index}>{company}</li>)}
                            </ol>
                            :
                            'Not specified'
                    }</td>
                </tr>
                <tr>
                    <td>Production countries</td>
                    <td>{
                        production_countries.length
                            ?
                            production_countries.map((country, index) => <div key={index}>{country}</div>)
                            :
                            'Not specified'
                    }</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export {InfoTable};