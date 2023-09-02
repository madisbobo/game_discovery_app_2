import { Grid, GridItem, Show } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [genre, setGenre] = useState("");

  const filterByGenre = (event) => {
    console.log("hey");

    setGenre("family");
    console.log(genre);
    console.log(event);
  };

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          <Navbar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" p="15px">
            <GenreList handleClick={filterByGenre} />
          </GridItem>
        </Show>
        <GridItem area="main" p="15px">
          <GameGrid key={genre} genre={genre} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
