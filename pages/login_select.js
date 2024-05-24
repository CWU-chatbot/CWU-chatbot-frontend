import React, { useState, useEffect } from "react";
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
import { motion, useAnimation } from 'framer-motion';
import { useRouter } from 'next/router';
import API from '../utils/axios';

const typingContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const typingVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const LoginForm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  const handleLogin = async (event) => {
    event.preventDefault(); // 폼의 기본 제출 동작을 막습니다.

    try {
      const response = await API.post('/members/sign_in', {
        id: id,
        password: password
      });
      console.log('Response:', response.data);
      localStorage.setItem('accessToken', response.data.accessToken); // 응답에서 토큰을 저장
      router.push('/'); // 로그인 성공 후 리다이렉트
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleSignUp = async () => {
    console.log("Sign Up:", { id, password });

    try {
      const response = await API.post('/members/sign_up', {
        id: id,
        password: password
      });
      console.log('Sign Up Response:', response.data);
      localStorage.setItem('accessToken', response.data.accessToken); // 응답에서 토큰을 저장
      onClose(); // 모달 닫기
      router.push('/'); // 회원가입 성공 후 리다이렉트
    } catch (error) {
      console.error('Sign Up failed:', error);
    }
  };

  return (
    <Box position="relative" overflow="hidden" width="100vw" height="100vh">
      {/* 움직이는 배경 */}
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '200%',
          height: '200%',
          background: 'linear-gradient(to right, #ff6b6b, #f06595, #cc5de8, #845ef7, #5c7cfa)',
          backgroundSize: '400% 100%',
          zIndex: 0
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 0%', '0% 0%'],
        }}
        transition={{
          duration: 30, // 애니메이션 지속 시간 30초로 설정
          ease: 'linear',
          repeat: Infinity,
        }}
      />

      <Flex position="relative" zIndex={1} width="100%">
        <Box width="80%" m="30px">
          <Text fontSize="6xl"  fontWeight="bold">
            CWU _ CHAT
          </Text>
          <motion.div
            variants={typingContainer}
            initial="hidden"
            animate={controls}
            style={{ display: 'inline-flex', whiteSpace: 'pre', fontSize: '50px'}}
          >
            {"청운대학교 챗봇 페이지에 오신 것을 환영합니다.".split("").map((char, index) => (
              <motion.span key={index} variants={typingVariant}>
                {char}
              </motion.span>
            ))}
          </motion.div>
        </Box>

        <Box w="20%" h="100vh" p={8} borderWidth={1} boxShadow="lg" bg="black">
          <Heading mb={4} textAlign="center">
            Welcome back!
          </Heading>
          <Text mb={8} textAlign="center" color="gray.500">
            Log in to your account to continue.
          </Text>
          <Stack spacing={4}>
            <form onSubmit={handleLogin}>
              <FormControl id="id">
                <FormLabel>ID</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter your ID"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
              <Button type="submit" colorScheme="blue" width="full" mt={4}>
                Log In
              </Button>
            </form>
          </Stack>
          <Text mt={4} textAlign="center">
            Don&apos;t have an account?{" "}
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
              <FormLabel>ID</FormLabel>
              <Input
                type="text"
                placeholder="Enter your ID"
                value={id}
                onChange={(e) => setId(e.target.value)}
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
