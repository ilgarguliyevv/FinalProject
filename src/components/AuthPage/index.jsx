import {
  Box,
  VStack,
  Image,
  Input,
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const [Login, setLogin] = useState(true);

  const navigete = useNavigate();

  const [input, setInput] = useState({
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handleLogin = () => {
    // console.log("input", input);
    if (!input.email || !input.password) {
      alert("Hamısını doldurun");
      return;
    }
    navigete("/");
  };
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
          <Input
            placeholder="Email"
            fontSize={14}
            type="email"
            value={input.email}
            onChange={(e) => setInput({ ...input, email: e.target.value })}
          />
          <Input
            placeholder="Password"
            fontSize={14}
            type="password"
            value={input.password}
            onChange={(e) => setInput({ ...input, password: e.target.value })}
          />
          {!Login ? (
            <Input
              placeholder="Confirm password"
              fontSize={14}
              type="password"
              value={input.confirmpassword}
              onChange={(e) =>
                setInput({ ...input, confirmpassword: e.target.value })
              }
            />
          ) : null}
          <Button
            w={"full"}
            colorScheme="blue"
            size={"sm"}
            fontSize={14}
            onClick={handleLogin}
          >
            {Login ? "Login" : "Sign Up"}
          </Button>
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
            onClick={() => setLogin(!Login)}
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
