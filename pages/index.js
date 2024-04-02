import { Box, Flex, Text, VStack, Button, Input, useColorMode } from '@chakra-ui/react';
import { useState } from 'react';
import ChatArea from "/components/ChatArea"

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex width="100vw" height="100vh" bg={colorMode === 'light' ? 'gray.100' : 'gray.800'} color={colorMode === 'light' ? 'black' : 'white'}>
      
      {/* 메인 영역 */}
      <Box flex="1" p={10} justifyContent="center" position="relative">
        <VStack spacing={8}>
          <Text fontSize="2xl">Private Data QA Chat</Text>
          <Box bg={colorMode === 'light' ? 'white' : 'gray.700'} p={5} borderRadius="md" shadow="md">
            {/* 채팅 내용 표시 영역 */}
            <Text>안녕하세요! 주어진 문서에 대해 궁금한 것이 있으면 언제든 물어봐주세요!</Text>
          </Box>
          <Box overflow="scroll">
            <ChatArea/>
          </Box>
        </VStack>

        {/* 입력 영역 */}
        <Flex position="absolute" bottom="0" left="0" right="0" justify="center" p="4">
          <Input placeholder="Type your message here..." />
          <Button colorScheme="blue">Send</Button>
        </Flex>
      </Box>
    </Flex>
  );
}
