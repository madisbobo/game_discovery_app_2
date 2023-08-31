import { useEffect, useState } from "react";
import genreService, { CanceledError } from "../services/genre-service";

export interface FetchGenresResponse {
  count: number;
  results: Genre[];
}

interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const GenreList = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    const { request, cancel } = genreService.getAllGenres();

    request
      .then((res) => {
        setLoading(false);
        setGenres(res.data.results);
        console.log(res.data.results);
      })
      .catch((err) => {
        setLoading(false);
        if (err instanceof CanceledError) return;
        setError(err.message);
        console.log(err);
      });

    return () => {
      cancel();
    };
  }, []);

  return { genres, isLoading, error };
};

export default GenreList;
