import { Box, VStack, Button } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";
import ColorMode from "/components/ColorModeButton";

const SideBar = (props) => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Box p={5} width="325px" height="100vh" bg={colorMode === 'light' ? 'white' : 'gray.700'}>
            <VStack spacing={5}>
                <ColorMode />
                <Button colorScheme="blue">New Chat</Button>
            </VStack>
        </Box>
    );
};

export default SideBar;
