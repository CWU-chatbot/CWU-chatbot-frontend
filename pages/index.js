import { useState, useRef, useEffect } from 'react';
import { Box, Button, Flex, Input, VStack, Text } from '@chakra-ui/react';
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

  // 사이드바 너비를 정의
  const sidebarWidth = '325px';

  return (
    <Box>
      <Flex h={{ base: 'auto', md: '100vh' }}>

        {/* Sidebar with Animation and Drag */}
        <motion.Box
          initial="closed"
          animate={isSidebarVisible ? "open" : "closed"}
          variants={sidebarVariants}
          transition={{ type: 'spring', stiffness: 260, damping: 30 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(event, info) => {
            if (info.offset.x > 100) {
              setIsSidebarVisible(true);
            } else {  
              setIsSidebarVisible(false);
            }
          }}
          style={{ width: sidebarWidth, height: '100%', backgroundColor: 'gray' }}
        >
          
        </motion.Box>

        {/* 메인 영역 */}
        <Box
          flex={1}
          display="flex"
          flexDirection="column"
          height="100vh"
          style={{
            transition: 'margin-left 0.5s ease',
            marginLeft: isSidebarVisible ? sidebarWidth : '0',
          }}
        >
          {/* 채팅 영역 */}
          <VStack spacing={4} align="stretch" overflowY="auto" flexGrow={1}>
            {messages.map((message) => (
              <Box key={message.id} bg="black" p={4} borderRadius="md">
                <Text color="white">{message.text}</Text>
              </Box>
            ))}
            <div ref={bottomOfMessages}></div>
          </VStack>

          {/* 하단 채팅 인풋바 */}
          <Box p={3} boxShadow="md" >
            <Flex justifyContent="center" alignItems="center">
              <Input
                placeholder="Type a message..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                width="600px"
                mb="30px"
                height="100px"
              />
              <Button mb="30px" ml={2} onClick={handleSendMessage}>
                Send
              </Button>
            </Flex>
          </Box>
        </Box>
      </Flex>

      {/* Toggle Sidebar Button */}
      <Button position="fixed" top="4" left="4" onClick={toggleSidebar}>
        {isSidebarVisible ? 'Hide Sidebar' : 'Show Sidebar'}
      </Button>
    </Box>
  );
}
