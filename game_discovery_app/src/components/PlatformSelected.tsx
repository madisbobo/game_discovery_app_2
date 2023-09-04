import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import usePlatforms from "../hooks/usePlatforms";
import { useState } from "react";

const PlatformSelected = () => {
  const { platforms, error } = usePlatforms();
  const [selectedPlatform, setSelectedPlatform] = useState("");

  if (error) return null;

  return (
    <Box py="10px">
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          {selectedPlatform ? selectedPlatform : "Platforms"}
        </MenuButton>
        <MenuList>
          <MenuItem onClick={() => setSelectedPlatform("All")}>All</MenuItem>
          {platforms.map((platform) => (
            <MenuItem
              key={platform.id}
              onClick={() => setSelectedPlatform(platform.name)}
            >
              {platform.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default PlatformSelected;
