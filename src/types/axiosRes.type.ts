import {AxiosResponse} from "axios";

// type for axios response
export type IRes<T> = Promise<AxiosResponse<T>>