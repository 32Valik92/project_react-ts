import {axiosService} from "./axios.service";
import {urls} from "../constants";
import {IRes} from "../types";
import {IGenre, IMovie, IPagination, IResGenre} from "../interfaces";

class GenreService {
    // Method for getting all genres
    getGenres(): IRes<IResGenre<IGenre[]>> {
        return axiosService.get(urls.toGenres);
    }

    // Method for get all movies of our genre
    getMoviesByGenre(choseGenreId: number): IRes<IPagination<IMovie[]>> {
        return axiosService.get(urls.toMovies, {params: {with_genres: choseGenreId}});
    }

}

export const genreService = new GenreService()