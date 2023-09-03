import { useEffect, useState } from "react";
import { apiClient } from "../services/api-client";
import { CanceledError } from "../services/genre-service";
import { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
  const [data, setData] = useState<T[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();

    apiClient
      .get<FetchResponse<T>>(`/${endpoint}`, { signal: controller.signal, ...requestConfig })
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
  }, deps ? [...deps] : []);

  return { data, isLoading, error };
};

export default useData;
