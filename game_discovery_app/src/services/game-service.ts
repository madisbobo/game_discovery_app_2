import { FetchGamesResponse } from "../hooks/useGames";
import {apiClient, CanceledError} from "./api-client";


class GameService {
  getAllGames() {
    const controller = new AbortController();

    const request = apiClient.get<FetchGamesResponse>("/games", {
      signal: controller.signal,
    });
    return {
      request,
      cancel: () => controller.abort(),
    };
  }
}

export default new GameService();
export {CanceledError};
    