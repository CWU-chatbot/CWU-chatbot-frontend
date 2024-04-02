import {Box, VStack, Text, Input, Button} from "@chakra-ui/react";


const SideBar = (props) => {

    return (
        <Box p={5} width="325px" h="100vh" bg="black"/*bg={colorMode === 'light' ? 'white' : 'gray.700'}*/>
        <VStack spacing={5}>
          <Button></Button>
          
          {/*<Input placeholder="OpenAI API Key" type="password" value={apiKey} onChange={handleApiKeyChange} />*/}
          <Button colorScheme="blue">Process</Button>
          {/*<Button onClick={toggleColorMode}>
            {colorMode === 'light' ? 'Dark' : 'Light'}
        </Button>*/}
        </VStack>
</Box>





    );

};

export default SideBar;