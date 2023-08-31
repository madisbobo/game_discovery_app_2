import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { genres, isLoading, error } = useGenres();

  return (
    <>
      {error && <p>{error}</p>}
      {isLoading && <p>Loading...</p>}
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
