import { Heading } from "@chakra-ui/react";

interface Props {
  genre?: string;
  platform?: string;
}

const GameHeading = ({ genre, platform }: Props) => {
  return (
    <Heading as="h1" mb={4} fontSize="5xl">
      {platform} {genre} Games
    </Heading>
  );
};

export default GameHeading;
