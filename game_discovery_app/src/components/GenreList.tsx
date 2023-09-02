import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import imgCropper from "../services/image-url";
import GenreSkeleton from "./GenreSkeleton";

interface Props {
  handleClick: (event) => void;
}

const GenreList = ({ handleClick }: Props) => {
  const { genres, isLoading, error } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <>
      <List>
        <ListItem>{error && <p>{error}</p>}</ListItem>
        {isLoading &&
          skeletons.map((skeleton) => (
            <ListItem key={skeleton} paddingY="5px">
              <GenreSkeleton />
            </ListItem>
          ))}
        {genres.map((genre) => (
          <ListItem
            _hover={{ cursor: "pointer" }}
            key={genre.id}
            paddingY="5px"
            onClick={() => handleClick(event)}
          >
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
