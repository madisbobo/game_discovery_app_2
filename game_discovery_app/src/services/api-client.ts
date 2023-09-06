import axios, { CanceledError } from "axios";

const apiClient = axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "8560a6cb69ab4861b918e8577d1ee4fa"
    }
})

export {CanceledError, apiClient};