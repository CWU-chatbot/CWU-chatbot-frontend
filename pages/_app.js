import { ChakraProvider, Flex } from '@chakra-ui/react'
import SideBar from "/components/SideBar";


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Flex width="100%">  
      <SideBar/>
      <Component {...pageProps} />
      </Flex>
      
    </ChakraProvider>
  );  
}

export default MyApp