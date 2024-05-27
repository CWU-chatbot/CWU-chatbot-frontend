import { Box, VStack, HStack, keyframes, Text } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { useColorMode } from "@chakra-ui/color-mode";
import { FaCircle } from 'react-icons/fa';

const dotFlashing = keyframes`
  0% {
    opacity: 0.2;
    transform: scale(1);
  }
  20% {
    opacity: 1;
    transform: scale(1.2);
  }
  100% {
    opacity: 0.2;
    transform: scale(1);
  }
`;

const LoadingDots = () => {
  const { colorMode } = useColorMode();
  const color = colorMode === 'light' ? 'gray.500' : 'gray.200';

  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <Box as={FaCircle} animation={`${dotFlashing} 1.5s infinite`} animationDelay="0s" mx={1} fontSize="10px" color={color} />
      <Box as={FaCircle} animation={`${dotFlashing} 1.5s infinite`} animationDelay="0.3s" mx={1} fontSize="10px" color={color} />
      <Box as={FaCircle} animation={`${dotFlashing} 1.5s infinite`} animationDelay="0.6s" mx={1} fontSize="10px" color={color} />
    </Box>
  );
};

const ChatArea = ({ messages, loading }) => {
  const messagesEndRef = useRef(null);
  const { colorMode } = useColorMode();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  return (
    <Box
      p={5}
      width="100%"
      bg={colorMode === 'light' ? 'gray.200' : 'gray.800'}
      color={colorMode === 'light' ? 'black' : 'white'}
      borderRadius="md"
      maxHeight="400px"
      overflowY="auto"
    >
      <VStack spacing={3} align="start" width="100%">
        {messages.map((message, index) => (
          <HStack
            key={index}
            alignSelf={message.type === 'user' ? 'flex-end' : 'flex-start'}
            bg={message.type === 'user' ? (colorMode === 'light' ? 'gray.300' : 'gray.600') : (colorMode === 'light' ? 'gray.100' : 'gray.500')}
            p={3}
            borderRadius="md"
            width="fit-content"
            maxWidth="80%"
          >
            <Text>{message.text}</Text>
          </HStack>
        ))}
        {loading && (
          <HStack alignSelf="flex-start" bg={colorMode === 'light' ? 'gray.100' : 'gray.500'} p={3} borderRadius="md" width="fit-content" maxWidth="80%">
            <LoadingDots />
          </HStack>
        )}
        <div ref={messagesEndRef} />
      </VStack>
    </Box>
  );
};

export default ChatArea;
