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
} from "@chakra-ui/react";

const LoginForm = () => {
  return (
    <Box
      w="400px"
      p={8}
      borderWidth={1}
      borderRadius={8}
      boxShadow="lg"
      bg="white"
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
        <Link href='./login'>
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
  );
};

export default LoginForm;
