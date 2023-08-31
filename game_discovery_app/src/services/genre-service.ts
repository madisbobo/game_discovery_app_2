import { apiClient, CanceledError } from "./api-client";

class GenreService {
  getAllGenres() {
    const controller = new AbortController();

    const request = apiClient.get("/genres", { signal: controller.signal });
    return { request, cancel: () => controller.abort };
  }
}

export default new GenreService();
export { CanceledError };

