import { useEffect, useState } from "react";
import { Spinner, Text } from "@chakra-ui/react";
import gameService, { Game, CanceledError } from "../services/game-service";

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    const { request, cancel } = gameService.getAllGames();
    request
      .then((res) => {
        setGames(res.data.results);
        setIsLoading(false);
        console.log(res.data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
        console.log(err);
      });
    return () => cancel();
  }, []);

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
