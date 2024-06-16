import { Box, VStack, Image, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <VStack spacing={4}>
          <Image
            src="/InstagramLogo.png"
            h={24}
            cursor={"pointer"}
            alt="Instagram Logo"
          />
          {isLogin ? <Login /> : <SignUp />}
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            my={4}
            gap={1}
            w={"full"}
          >
            <Box flex={2} h={"1px"} bg={"gray.400"} />
            <Text mx={1} color={"white"}>
              OR
            </Text>
            <Box flex={2} h={"1px"} bg={"gray.400"} />
          </Flex>
          <Flex>
            <Image src="/GoogleLogo.png" w={5} alt="Google Logo" />
            <Text mx={2} color={"blue.500"} cursor={"pointer"}>
              Login in with Google
            </Text>
          </Flex>
        </VStack>
      </Box>

      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Box fontSize={14} mx={2}>
            {Login ? "Don't have an account?" : "Already have an account"}
          </Box>
          <Box
            onClick={() => setIsLogin(!isLogin)}
            color={"blue.500"}
            cursor={"pointer"}
          >
            {Login ? "Sign Up" : "Log In"}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default AuthPage;
