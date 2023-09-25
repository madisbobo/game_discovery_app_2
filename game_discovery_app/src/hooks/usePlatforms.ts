import { useQuery } from "@tanstack/react-query";
import { initialPlatforms } from "../data/platforms";
import { apiClient } from "../services/api-client";
import { FetchResponse } from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => {
  return useQuery<FetchResponse<Platform>, Error>({
    queryKey: ["platforms"],
    queryFn: () => apiClient.get("platforms/lists/parents").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: {count: initialPlatforms.length, results: initialPlatforms}
  });
};

export default usePlatforms;
