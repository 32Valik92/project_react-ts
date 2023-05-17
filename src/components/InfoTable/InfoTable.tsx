import {FC} from 'react';

import {IGenre} from "../../interfaces";
import {Genre} from "../Genre/Genre";

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
        <div>
            <table>
                <tbody>
                <tr>
                    <td>release_date</td>
                    <td>{release_date}</td>
                </tr>
                <tr>
                    <td>vote_average</td>
                    <td>{vote_average}</td>
                </tr>
                <tr>
                    <td>genres</td>
                    <td>{
                        genres
                            ?
                            genres.map(genre => <Genre key={genre.id} genre={genre}/>)
                            :
                            'Not specified'
                    }</td>
                </tr>
                <tr>
                    <td>runtime</td>
                    <td>{runtime}</td>
                </tr>
                <tr>
                    <td>production_companies</td>
                    <td>{
                        production_companies
                            ?
                            production_companies.map((company, index) => <div key={index}>{company}</div>)
                            :
                            'Not specified'
                    }</td>
                </tr>
                <tr>
                    <td>production_countries</td>
                    <td>{production_countries.map((country, index) => <div key={index}>{country}</div>)}</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export {InfoTable};