import { useQuery } from "@tanstack/react-query";
import { initialPlatforms } from "../data/platforms";
import APIClient from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => {
  const apiClient = new APIClient<Platform>("platforms/lists/parents");

  return useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: {count: initialPlatforms.length, results: initialPlatforms}
  });
};

export default usePlatforms;
