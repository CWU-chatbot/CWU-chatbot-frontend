import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Heading,
  Text,
  Link,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { motion } from 'framer-motion';

const LoginForm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    console.log("Sign Up:", { email, password });
    // 여기에 회원가입 로직을 추가하세요.
  };

  return (
    <Box>
      <Flex>
        <Box width="80%">
          <Text m="30px">
            CWU_chat
          </Text>
          <Box>
            <motion.h1 animate={{ fontSize: 50, color: '#ff2994' }}>
              Welcome
            </motion.h1>
          </Box>
        </Box>

        <Box w="20%" h="100vh" p={8} borderWidth={1} boxShadow="lg" bg="black">
          <Heading mb={4} textAlign="center">
            Welcome back!
          </Heading>
          <Text mb={8} textAlign="center" color="gray.500">
            Log in to your account to continue.
          </Text>
          <Stack spacing={4}>
          
            <FormControl id="email">
              <FormLabel>Email Address</FormLabel>
              <Input type="email" placeholder="Enter your email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" placeholder="Enter your password" />
            </FormControl>
            <Link href='./'>
            <Button colorScheme="blue" width="full">
              Log In
            </Button>
            </Link>
        
      
          </Stack>
          <Text mt={4} textAlign="center">
            Don't have an account?{" "}
            <Link color="blue.500" onClick={onOpen}>
              Sign Up
            </Link>
          </Text>
        </Box>
      </Flex>

      {/* Sign Up Modal */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>회원가입</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Email 주소</FormLabel>
              <Input
                type="email"
                placeholder="이메일을 입력하세요"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>비밀번호</FormLabel>
              <Input
                type="password"
                placeholder="비밀번호를 입력하세요"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Button colorScheme="blue" onClick={handleSignUp} width="100%" mt={4}>
              가입하기
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default LoginForm;
