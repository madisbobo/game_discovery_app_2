import { HStack, Spinner, Text, Wrap, WrapItem } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, isLoading, error } = useGames();

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
        <Wrap spacing="30px" justify="center" py="20px">
          {games.map((game) => (
            <WrapItem>
              <GameCard title={game.name} rating={game.rating} />
            </WrapItem>
          ))}
        </Wrap>
      )}
    </>
  );
};

export default GameGrid;
