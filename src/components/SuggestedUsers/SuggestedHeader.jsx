import { Avatar, Flex, Text, Box } from "@chakra-ui/react";
import React from "react";
import { Link, Link as RouterLink } from "react-router-dom";

const SuggestedHeader = () => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar name="Ilgar" size={"lg"} src="/image-1.jpeg" />
        <Text fontSize={12} fontWeight={"bold"}>
          guliyevv_i
        </Text>
      </Flex>
      <Box
        fontSize={14}
        fontWeight={"medium"}
        color={"blue.400"}
        cursor={"pointer"}
        style={{ textDecoration: "none" }}
      >
        <RouterLink to={"/auth"}>LogOut</RouterLink>
      </Box>
    </Flex>
  );
};

export default SuggestedHeader;
