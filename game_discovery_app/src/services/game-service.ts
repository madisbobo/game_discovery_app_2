import {apiClient, CanceledError} from "./api-client";

export interface FetchGamesResponse {
    count: number;
    results: Game[];
}

export interface Game {
  id: number;
  name: string;
  rating: number;
}

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
    