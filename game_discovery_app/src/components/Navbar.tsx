import {
  Image,
  InputGroup,
  InputLeftElement,
  Input,
  HStack,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const Navbar = () => {
  return (
    <>
      <HStack p="15px">
        <Image boxSize="60px" src={logo} alt="logo" />
        <SearchInput />
        <ColorModeSwitch />
      </HStack>
    </>
  );
};

export default Navbar;
