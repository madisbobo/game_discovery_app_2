import { Search2Icon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <InputGroup mx="15px">
      <InputLeftElement children={<BsSearch />} />
      <Input
        type="text"
        placeholder="Search games..."
        borderRadius="20px"
        variant="filled"
      />
    </InputGroup>
  );
};

export default SearchInput;
