import { useState } from "react";
import {
  Heading,
  Text,
  SimpleGrid,
  Box,
  Grid,
  GridItem,
  Show,
} from "@chakra-ui/react";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main" "footer"`,
          lg: `"nav nav" "aside main" "footer footer"`,
        }}
      >
        <GridItem area="nav" bg="yellow.100">
          nav
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" bg="green.100">
            Aside
          </GridItem>
        </Show>
        <GridItem area="main" bg="blue.100">
          main
        </GridItem>
        <GridItem area="footer" bg="purple.100">
          footer
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
