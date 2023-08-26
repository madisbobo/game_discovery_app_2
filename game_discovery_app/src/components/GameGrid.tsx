import { Spinner, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

const GameGrid = () => {
  const {games, isLoading, error} = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      {isLoading ? (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      ) : (
        <ul>
          {games.map((game, index) => (
            <li key={index}>{game.name}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default GameGrid;
