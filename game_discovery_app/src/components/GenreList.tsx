import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import imgCropper from "../services/image-url";
import GenreSkeleton from "./GenreSkeleton";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data: genres, isLoading, error } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  console.log(genres);

  if (error) return <Text>{error.message}</Text>;

  return (
    <>
      <Heading fontSize="2xl" mb={3}>
        Genres
      </Heading>
      <List>
        {isLoading &&
          skeletons.map((skeleton) => (
            <ListItem key={skeleton} paddingY="5px">
              <GenreSkeleton />
            </ListItem>
          ))}
        {genres?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack spacing={3}>
              <Image
                src={imgCropper(genre.image_background)}
                boxSize="32px"
                borderRadius="8px"
                objectFit="cover"
              />
              <Button
                fontSize="lg"
                variant="link"
                onClick={() => onSelectGenre(genre)}
                fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
                whiteSpace="normal"
                textAlign="start"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
