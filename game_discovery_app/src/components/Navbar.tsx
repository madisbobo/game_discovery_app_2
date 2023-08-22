import {
  Image,
  InputGroup,
  InputLeftElement,
  Input,
  HStack,
  Switch,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import logo from "../assets/logo.webp";

const Navbar = () => {
  return (
    <>
      <HStack align="center">
        <Image boxSize="60px" objectFit="cover" src={logo} alt="logo" />

        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <Search2Icon color="gray.300" />
          </InputLeftElement>
          <Input type="text" placeholder="Search" />
        </InputGroup>

        <Switch id="dark-mode" />
        <FormLabel htmlFor="dark-mode" mb="0" ml="10px">
          Dark mode
        </FormLabel>
      </HStack>
    </>
  );
};

export default Navbar;
