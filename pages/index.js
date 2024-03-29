// pages/index.js
import { useState, useRef, useEffect } from 'react';
import { Box, Button, Container, Flex, Input, VStack, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const bottomOfMessages = useRef(null);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    setMessages([...messages, { id: Date.now(), text: inputValue }]);
    setInputValue('');
  };

  useEffect(() => {
    bottomOfMessages.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const sidebarVariants = {
    open: { x: 0 },
    closed: { x: '-100%' },
  };

  return (
    <Container maxW="container.xl" p={0}>
      <Flex h={{ base: 'auto', md: '100vh' }}>

        {/* Sidebar with Animation */}
        <motion.div
          initial="closed"
          animate={isSidebarVisible ? "open" : "closed"}
          variants={sidebarVariants}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          style={{ width: '250px', height: '100%', backgroundColor: 'blue.500' }}
        >
          <Box>
            ddd
          </Box>
        </motion.div>

        {/* Main Content Area */}
        <Box flex={1} display="flex" flexDirection="column" height="100vh">
          {/* Chat Area */}
          <VStack spacing={4} align="stretch" overflowY="auto" flexGrow={1}>
            {messages.map((message) => (
              <Box key={message.id} bg="black" p={4} borderRadius="md">
                <Text color="white">{message.text}</Text>
              </Box>
            ))}
            <div ref={bottomOfMessages}></div>
          </VStack>

          {/* ChatBar fixed at the bottom */}
          <Box p={4} bg="black" boxShadow="md">
            <Input
              placeholder="Type a message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <Button ml={2} onClick={handleSendMessage}>Send</Button>
          </Box>
        </Box>

      </Flex>

      {/* Toggle Sidebar Button */}
      <Button position="fixed" top="4" left="4" onClick={toggleSidebar}>
        {isSidebarVisible ? 'Hide Sidebar' : 'Show Sidebar test'}
      </Button>
    </Container>
  );
}
