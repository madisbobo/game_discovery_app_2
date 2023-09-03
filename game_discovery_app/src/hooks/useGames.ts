import useData from "./useData";
import { Genre } from "./useGenres";

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
  ratings: Rating[];
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

const useGames = (selectedGenre: Genre | null) => {
  const { data, isLoading, error } = useData<Game>("games", {params: {genres: selectedGenre?.id}}, [selectedGenre?.id]);
  return { games: data, isLoading, error };
};

export default useGames;