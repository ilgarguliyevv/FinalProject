import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const GoogleAuth = () => {
  return (
    <Flex alignItems={"center"} justifyContent={"center"} cursor={"pointer"}>
      <Image src="/GoogleLogo.png" w={5} alt="Google Logo" />
      <Text mx={2} color={"blue.500"} cursor={"pointer"}>
        Login in with Google
      </Text>
    </Flex>
  );
};

export default GoogleAuth;
