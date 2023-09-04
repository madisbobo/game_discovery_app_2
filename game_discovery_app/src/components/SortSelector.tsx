import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

const SortSelector = () => {
  const ordering = [
    "Name",
    "Released",
    "Added",
    "Created, updated",
    "Rating",
    "Metacritic",
  ];

  return (
    <Box>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Order By:
        </MenuButton>
        <MenuList>
          {ordering.map((by) => (
            <MenuItem key={by}>{by}</MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default SortSelector;
