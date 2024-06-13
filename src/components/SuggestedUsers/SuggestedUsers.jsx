import { Text, Flex, VStack, Box } from "@chakra-ui/react";
import React from "react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader />

      <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
        <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
          Suggested for you
        </Text>
        <Text
          fontSize={12}
          fontWeight={"bold"}
          _hover={{ color: "gray.400" }}
          cursor={"pointer"}
        >
          See All
        </Text>
      </Flex>
      <SuggestedUser
        name="Yagub Hajili"
        followers={125}
        avatar="/image-3.jpg"
      />
      <SuggestedUser
        name="Cristiano Ronaldo"
        followers={328}
        avatar="/image-2.jpg"
      />
      <SuggestedUser
        name="Mercedes Benz"
        followers={538}
        avatar="/image-4.jpg"
      />

      <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
        © 2024 INSTAGRAM FROM META
      </Box>
    </VStack>
  );
};

export default SuggestedUsers;
