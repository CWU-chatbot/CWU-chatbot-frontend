import { Box, Flex, Text, VStack, Button, Input, useColorMode } from '@chakra-ui/react';
import { useState } from 'react';
import API from '../utils/axios'; // Axios 인스턴스를 import 합니다.
import ChatArea from '/components/ChatArea';

export default function Home() {
  const { colorMode } = useColorMode();
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false); // 로딩 상태 추가

  const handleSend = async () => {
    if (inputValue.trim() !== '') {
      const newMessages = [...messages, { text: inputValue, type: 'user' }];
      setMessages(newMessages);
      setInputValue('');
      setLoading(true); // 요청 시작 시 로딩 상태를 true로 설정

      try {
        console.log("Sending request to API with content:", inputValue);
        const response = await API.post('/chat', {
          folderId: 3,
          content: inputValue
        });

        console.log("Received response from API:", response.data);
        const aiMessage = response.data.content || '답변을 받을 수 없습니다.';
        setMessages([...newMessages, { text: aiMessage, type: 'ai' }]);
      } catch (error) {
        console.error("Error occurred while communicating with the API:", error);
        setMessages([...newMessages, { text: 'AI 서버에서 응답이 없습니다.', type: 'ai' }]);
      } finally {
        setLoading(false); // 요청이 끝나면 로딩 상태를 false로 설정
      }
    }
  };

  return (
    <Flex width="100vw" height="100vh" bg={colorMode === 'light' ? 'gray.100' : 'gray.800'} color={colorMode === 'light' ? 'black' : 'white'}>
      <Box flex="1" p={10} justifyContent="center" position="relative">
        <VStack spacing={8}>
          <Text fontSize="2xl">CWU _ CHAT</Text>
          <Box bg={colorMode === 'light' ? 'white' : 'gray.700'} p={5} borderRadius="md" shadow="md">
            <Text>안녕하세요! 주어진 문서에 대해 궁금한 것이 있으면 언제든 물어봐주세요!</Text>
          </Box>
          <Box width="100%" overflowY="auto" flex="1">
            <ChatArea messages={messages} loading={loading} />
          </Box>
        </VStack>

        <Flex position="absolute" bottom="0" left="0" right="0" justify="center" p="4" bg={colorMode === 'light' ? 'white' : 'gray.700'}>
          <Input
            placeholder="Type your message here..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          />
          <Button colorScheme="blue" onClick={handleSend} ml={2}>
            Send
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
}
