import useData from "./useData";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => {
  const { data, isLoading, error } = useData<Platform>("platforms/lists/parents");

  return { platforms: data, isLoading, error };
};

export default usePlatforms;
