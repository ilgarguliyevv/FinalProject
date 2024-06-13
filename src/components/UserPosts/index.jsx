import {
  Container,
  VStack,
  Flex,
  SkeletonCircle,
  Skeleton,
  Box,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import UserPost from "./UserPost";

const UserPosts = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      {loading &&
        [0, 1, 2, 3].map((_, index) => (
          <VStack key={index} gap={4} alignItems={"flex-start"} mb={10}>
            <Flex gap={2}>
              <SkeletonCircle size="10" />
              <VStack gap={2} alignItems={"flex-start"}>
                <Skeleton height={"10px"} w={"200px"} />
                <Skeleton height={"10px"} w={"200px"} />
              </VStack>
            </Flex>
            <Skeleton w={"full"}>
              <Box h={"500"}>contents wrapped</Box>
            </Skeleton>
          </VStack>
        ))}

      {!loading && (
        <>
          <UserPost
            img="/image-1.jpeg"
            username="ardaguler"
            avatar="/image-1.jpeg"
          />
          <UserPost
            img="/image-2.jpg"
            username="cristiano"
            avatar="/image-2.jpg"
          />
          <UserPost
            img={"/image-3.jpg"}
            username={"yagubhajili"}
            avatar={"/image-3.jpg"}
          />
          <UserPost
            img={"/image-4.jpg"}
            username={"mercedes"}
            avatar={"/image-4.jpg"}
          />
          <UserPost
            img={"/image-5.jpg"}
            username={"cars"}
            avatar={"/image-5.jpg"}
          />
        </>
      )}
    </Container>
  );
};

export default UserPosts;
