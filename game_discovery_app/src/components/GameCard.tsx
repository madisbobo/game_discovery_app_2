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

interface Props {
  title: string;
  rating: number;
}

const GameCard = ({ title, rating }: Props) => {
  return (
    <>
      <Card maxW="sm" overflow="hidden">
        <CardHeader p="0px">
          <Image
            objectFit="cover"
            src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Chakra UI"
          />
        </CardHeader>
        <CardBody>
          <Stack spacing="3">
            <Flex>
              <Text>Platform icons</Text>
              <Spacer />
              <Text>{rating}</Text>
            </Flex>
            <Heading size="md">{title} 👍</Heading>
            <Text>Release date</Text>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
