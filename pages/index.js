import { useState } from "react";
import { Box, Container, Flex, Heading, VStack, useBreakpointValue, Button, Input } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence exitBeforeEnter={false}>
      {isOpen && (
        <motion.div
          initial={{ x: -250 }}
          animate={{ x: 0 }}
          exit={{ x: -300 }}
          transition={{ type: "spring", stiffness: 200, damping: 50 }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            bottom: 0,
            width: 300,
            backgroundColor: "gray",
            padding: 4
          }}
        >
          <VStack spacing={4} align="flex-start">
            <Heading size="md" color="black">Sidebar</Heading>
            {/* 네비게이션 항목들을 추가할 수 있습니다 */}
            <Box color="black">Nav Item 1</Box>
            <Box color="black">Nav Item 2</Box>
            <Box color="black">Nav Item 3</Box>
            <Button onClick={onClose}>Close</Button>
          </VStack>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const MainContent = ({ isSidebarOpen }) => {
  
  

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      setChatHistory([...chatHistory, message]);
      setMessage("");
    }
  };

  return (
    <Box p={4} flex="1" style={{ overflowY: "auto" }}>
      <Heading size="md">Main Content</Heading>
      {/* 메인 콘텐츠를 추가할 수 있습니다 */}
      
    </Box>
  );
};

const ChatBar = () => {

    const [message, setMessage] = useState("");
    const [chatHistory, setChatHistory] = useState([]);

    const handleSendMessage = () => {
        if (message.trim() !== "") {
          setChatHistory([...chatHistory, message]);
          setMessage("");
        }
      };

    return(
        <VStack>
        <Flex mt={4} alignItems="flex-end">
        <Input value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Type your message" />
        <Button ml={2} onClick={handleSendMessage}>Send</Button>
        </Flex>
        </VStack>
        
    )
    
}

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container maxW="container.xl">
      <Flex>
        <Button onClick={toggleSidebar}>Toggle Sidebar</Button>
        <Sidebar isOpen={isOpen} onClose={toggleSidebar} />
        <MainContent isSidebarOpen={isOpen} />
      </Flex>
      <ChatBar/>
    </Container>
  );
};

export default Page;