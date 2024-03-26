import React from "react";
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
} from "@chakra-ui/react";
import { motion } from 'framer-motion';

const LoginForm = () => {
  return (
    <Box>
      <Flex>
      <Box width="80%">
        <Text m="30px">
          CWU_chat
        </Text>
        <Box>
        <motion.h1 
          animate={{fontSize : 50, color : '#ff2994'}}
        >
          Welcome
        </motion.h1>
        </Box>
      </Box>
    
    <Box
      w="20%"
      h="100vh"
      p={8}
      borderWidth={1}
      
      boxShadow="lg"
      bg="black"
    >
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
        <Link color="blue.500" href="./signup">
          Sign Up
        </Link>
      </Text>
    </Box>
      </Flex>
      
    </Box>
  );
};

export default LoginForm;
