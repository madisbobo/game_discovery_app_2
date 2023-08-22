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

const Navbar = () => {
  return (
    <>
      <HStack justifyContent="space-between" p="15px">
        <Image boxSize="60px" src={logo} alt="logo" />

        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <Search2Icon color="gray.300" />
          </InputLeftElement>
          <Input type="text" placeholder="Search" />
        </InputGroup>
        <ColorModeSwitch />
      </HStack>
    </>
  );
};

export default Navbar;
