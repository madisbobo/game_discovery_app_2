import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { apiClient } from "../services/api-client";
import { FetchResponse } from "../services/api-client";

export interface FetchGamesResponse {
  count: number;
  results: Game[];
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  released: string;
  metacritic: number;
  rating_top: number;
  parent_platforms: { platform: Platform }[];
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Rating {
  id: number;
  title: string;
}

const useGames = (gameQuery: GameQuery) => {
  return useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient
        .get("/games", {
          params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder?.value,
            search: gameQuery.searchText,
          },
        })
        .then((res) => res.data),
    staleTime: 10 * 60 * 1000, // 10 min
  });
};

export default useGames;
