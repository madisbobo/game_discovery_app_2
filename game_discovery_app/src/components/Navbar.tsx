import {
  Image,
  InputGroup,
  InputLeftElement,
  Input,
  HStack,
  Switch,
  FormLabel,
  useColorMode,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import logo from "../assets/logo.webp";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
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

        <Switch
          id="dark-mode"
          isChecked={colorMode === "dark"}
          onChange={toggleColorMode}
        />
        <FormLabel htmlFor="dark-mode" mb="0" ml="10px">
          Dark Mode
        </FormLabel>
      </HStack>
    </>
  );
};

export default Navbar;
