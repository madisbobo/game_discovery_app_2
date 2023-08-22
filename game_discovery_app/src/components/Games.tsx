import React, { useEffect, useState } from "react";
import axios from "axios";

const apiKey = "8560a6cb69ab4861b918e8577d1ee4fa";

interface Game {
  name: string;
  rating: number;
}

const Games = () => {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    axios
      .get("https://api.rawg.io/api/games?key=" + apiKey)
      .then((res) => {
        setGames(res.data.results);
        console.log(res.data.results);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <>
      <ul>
        {games.map((game, index) => (
          <li key={index}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Games;
