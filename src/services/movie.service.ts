import {IRes} from "../types";
import {IMovie, IPagination} from "../interfaces";
import {axiosService} from "./axios.service";
import {urls} from "../constants";

class MovieService {

    // Method for getting all movies
    getAll(page: number = 1): IRes<IPagination<IMovie[]>> {
        return axiosService.get(urls.toMovies, {params: {page}});
    }
}

export const movieService = new MovieService();