import axios, { CanceledError } from "axios";

export interface FetchResponse<T> {
    count: number;
    results: T[];
  }

const apiClient = axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: import.meta.env.VITE_REACT_APP_API_KEY
    }
})


export {CanceledError, apiClient};