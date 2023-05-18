import {IRes} from "../types";
import {IChosenMovie, IMovie, IPagination, ISearch} from "../interfaces";
import {axiosService} from "./axios.service";
import {urls} from "../constants";

class MovieService {

    // Method for getting page movies
    getMovies(page: number = 1): IRes<IPagination<IMovie[]>> {
        return axiosService.get(urls.toMovies, {params: {page}});
    }

    // Method for getting all information about chosen movie
    getByChoseMovieId(id: number): IRes<IChosenMovie> {
        return axiosService.get(`${urls.toChosenMovieId}/${id}`);
    }

    // Method for getting movies by search words
    searchMovies(words: ISearch, page: number): IRes<IPagination<IMovie[]>> {
        return axiosService.get(urls.searchMovies, {params: {query: words.searchWords, page: page}});
    }
}

export const movieService = new MovieService();
