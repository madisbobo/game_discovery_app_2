import { List, ListItem, Image, HStack, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import imgCropper from "../services/image-url";

const GenreList = () => {
  const { genres, isLoading, error } = useGenres();

  return (
    <>
      <List p="15px">
        <ListItem>{error && <p>{error}</p>}</ListItem>
        <ListItem>{isLoading && <p>Loading...</p>}</ListItem>
        {genres.map((genre) => (
          <ListItem key={genre.id} mb={3}>
            <HStack spacing={3}>
              <Image
                src={imgCropper(genre.image_background)}
                height="30px"
                width="30px"
                borderRadius="4px"
              />
              <Text>{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
