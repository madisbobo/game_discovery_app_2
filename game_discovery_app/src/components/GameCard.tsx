import {
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import imgCropper from "../services/image-url";
import CriticScore from "./CriticScore";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image
        objectFit="cover"
        src={imgCropper(game.background_image)}
        alt="Chakra UI"
      />
      <CardBody
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Stack spacing="3">
          <HStack justifyContent="space-between" mb={1}>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore criticScore={game.metacritic} />
          </HStack>
          <Heading size="md" mb={1}>
            {game.name} {game.ratings[0]?.title}
          </Heading>
          <Text color="gray.500">{game.released}</Text>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
