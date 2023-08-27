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
} from "@chakra-ui/react";
import { Platform, Rating } from "../hooks/useGames";

interface Props {
  title: string;
  backgroundImage: string;
  released: string;
  rating: number;
  ratings: Rating[];
  platforms: Platform[];
}

const GameCard = ({
  title,
  backgroundImage: background_image,
  released,
  rating,
  ratings,
  platforms,
}: Props) => {
  return (
    <>
      <Card maxW="sm" overflow="hidden">
          <Image objectFit="cover" src={background_image} alt="Chakra UI" />
        <CardBody>
          <Stack spacing="3">
            <Flex>
              {platforms.map((p) => (
                <Text key={p.platform.id}>{p.platform.name}</Text>
              ))}
              <Spacer />
              <Text>{rating}</Text>
            </Flex>
            <Heading size="md">
              {title} {ratings[0].title}
            </Heading>
            <Text>{released}</Text>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
