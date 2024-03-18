import React, { useState } from 'react';
import {
  ChakraProvider,
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
} from '@chakra-ui/react';

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // 여기에 회원가입 로직을 추가할 수 있습니다.
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <ChakraProvider>
      <Flex minHeight="100vh" alignItems="center" justifyContent="center">
        <Box
          borderWidth={1}
          px={4}
          py={8}
          maxWidth="400px"
          width="100%"
          boxShadow="md"
          rounded="md"
        >
          <Heading textAlign="center" mb={6}>
            회원가입
          </Heading>
          <FormControl>
            <FormLabel>Email 주소</FormLabel>
            <Input
              type="email"
              placeholder="이메일을 입력하세요"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              mb={4}
            />
          </FormControl>
          <FormControl>
            <FormLabel>비밀번호</FormLabel>
            <Input
              type="password"
              placeholder="비밀번호를 입력하세요"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              mb={4}
            />
          </FormControl>
          <Button colorScheme="blue" onClick={handleSignUp} width="100%">
            가입하기
          </Button>
        </Box>
      </Flex>
    </ChakraProvider>
  );
};

export default SignUpPage;
