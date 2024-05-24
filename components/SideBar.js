import { Box, VStack, IconButton, Button, HStack } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";
import { useRouter } from 'next/router';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { FiLogOut } from 'react-icons/fi';

const SideBar = (props) => {
    const { colorMode, toggleColorMode } = useColorMode();
    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        router.push('/login_select');
    };

    return (
        <Box p={5} width="325px" height="100vh" bg={colorMode === 'light' ? 'white' : 'gray.700'}>
            <VStack spacing={5}>
                <HStack spacing={3}>
                    <IconButton
                        aria-label="Toggle light mode"
                        icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                        onClick={toggleColorMode}
                    />
                    <IconButton
                        aria-label="Logout"
                        icon={<FiLogOut />}
                        onClick={handleLogout}
                        colorScheme="red"
                    />
                </HStack>
                <Button colorScheme="blue">New Chat</Button>
            </VStack>
        </Box>
    );
};

export default SideBar;
