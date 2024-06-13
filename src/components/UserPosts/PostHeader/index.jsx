import { Flex, Box, Avatar, Text } from "@chakra-ui/react";
import React from "react";

const PostHeader = ({ username, avatar }) => {
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      w={"full"}
      my={2}
    >
      <Flex alignItems={"center"} gap={2}>
        <Avatar src={avatar} size={"sm"} />
        <Flex fontSize={12} fontWeight={"bold"} gap={2}>
          {username}
          <Box color={"gray.500"}>* 1h</Box>
        </Flex>
      </Flex>
      <Box>
        <Text
          cursor={"pointer"}
          fontSize={12}
          color={"blue.500"}
          fontWeight={"bold"}
          _hover={{ color: "white" }}
          transition={"0.2s ease-in-out"}
        >
          Unfollow
        </Text>
      </Box>
    </Flex>
  );
};

export default PostHeader;
