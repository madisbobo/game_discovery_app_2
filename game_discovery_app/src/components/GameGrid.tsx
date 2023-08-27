import {
  HStack,
  SimpleGrid,
  Spinner,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
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
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          spacing="15px"
          p="15px"
        >
          {games.map((game) => (
            <GameCard game={game} key={game.id} />
          ))}
        </SimpleGrid>
      )}
    </>
  );
};

export default GameGrid;
