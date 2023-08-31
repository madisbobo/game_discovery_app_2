import useData from "./useData";

interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const GenreList = () => {
  const { data, isLoading, error } = useData<Genre>("genres");

  return { genres: data, isLoading, error };
};

export default GenreList;
