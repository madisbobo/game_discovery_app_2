import { useEffect, useState } from 'react'
import gameService, { CanceledError } from '../services/game-service';


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

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
  
    useEffect(() => {
      setIsLoading(true);
      const { request, cancel } = gameService.getAllGames();
      request
        .then((res) => {
          setGames(res.data.results);
          setIsLoading(false);
          console.log(res.data.results);
        })
        .catch((err) => {
          setIsLoading(false);
          if (err instanceof CanceledError) return;
          setError(err.message);
          console.log(err);
        });
      return () => cancel();
    }, []);

    return {games, isLoading, error}
}

export default useGames