import useData from "./useData";

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

const useGames = (genre?: string) => {
  const { data, isLoading, error } = useData<Game>("games", genre);
  return { games: data, isLoading, error };
};

export default useGames;