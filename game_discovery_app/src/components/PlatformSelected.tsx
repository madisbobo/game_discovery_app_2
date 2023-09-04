import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelected = ({ selectedPlatform, onSelectPlatform }: Props) => {
  const { platforms, error } = usePlatforms();

  if (error) return null;

  return (
    <Box py="10px">
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          {selectedPlatform?.name || "Platforms"}
        </MenuButton>
        <MenuList>
          {platforms.map((platform) => (
            <MenuItem
              key={platform.id}
              onClick={() => onSelectPlatform(platform)}
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