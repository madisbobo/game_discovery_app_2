import { List, ListItem, Image, HStack, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import imgCropper from "../services/image-url";

const GenreList = () => {
  const { genres, isLoading, error } = useGenres();

  return (
    <>
      <List>
        <ListItem>{error && <p>{error}</p>}</ListItem>
        <ListItem>{isLoading && <p>Loading...</p>}</ListItem>
        {genres.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack spacing={3}>
              <Image
                src={imgCropper(genre.image_background)}
                boxSize="32px"
                borderRadius="8px"
              />
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
