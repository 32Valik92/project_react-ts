import {IRes} from "../types";
import {IChosenMovie, IMovie, IPagination} from "../interfaces";
import {axiosService} from "./axios.service";
import {urls} from "../constants";

class MovieService {

    // Method for getting all movies
    getMovies(page: number = 1): IRes<IPagination<IMovie[]>> {
        return axiosService.get(urls.toMovies, {params: {page}});
    }

    //Method for getting all information about chosen movie
    getByChoseMovieId(id: number): IRes<IChosenMovie> {
        return axiosService.get(`${urls.toChosenMovieId}/${id}`);
    }
}

export const movieService = new MovieService();