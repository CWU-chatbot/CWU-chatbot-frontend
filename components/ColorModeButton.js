import { Button } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";

const ColorModeButton = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
        </Button>
    );
};

export default ColorModeButton;
