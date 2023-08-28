import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  CardFooter,
  Button,
  ButtonGroup,
  HStack,
  Flex,
  Spacer,
  Icon,
  CardHeader,
  Badge,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import { Md10K } from "react-icons/md";
import CriticScore from "./CriticScore";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card maxW="sm" overflow="hidden">
        <Image objectFit="cover" src={game.background_image} alt="Chakra UI" />
        <CardBody>
          <Stack spacing="3">
            <HStack justifyContent="space-between">
              <PlatformIconList
                platforms={game.parent_platforms.map((p) => p.platform)}
              />
              <CriticScore criticScore={game.metacritic} />
            </HStack>
            <Heading size="md">
              {game.name} {game.ratings[0].title}
            </Heading>
            <Text color="gray.500">{game.released}</Text>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
