import axios from "axios";

import {accessToken, baseURLMovieDB} from "../constants";

const axiosService = axios.create({baseURL: baseURLMovieDB});

// Add accessToken to request for getting all from API
axiosService.interceptors.request.use(res => {
    res.headers.Authorization = `Bearer ${accessToken}`;
    return res;
})

export {
    axiosService
}

