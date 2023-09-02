import { useEffect, useState } from "react";
import { apiClient } from "../services/api-client";
import { CanceledError } from "../services/genre-service";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string, genre?: string) => {
  const [data, setData] = useState<T[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();

    var params: { genres?: string } = {};
    if (genre) {
        params.genres = genre;
    }


    apiClient
      .get<FetchResponse<T>>(`/${endpoint}`, { signal: controller.signal, params })
      .then((res) => {
        setLoading(false);
        setData(res.data.results);
        console.log(res.data.results);
      })
      .catch((err) => {
        setLoading(false);
        if (err instanceof CanceledError) return;
        setError(err.message);
        console.log(err);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return { data, isLoading, error };
};

export default useData;
