import React from "react";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";
import { Box, Image } from "@chakra-ui/react";

const UserPost = () => {
  return (
    <>
      <PostHeader />
      <Box my={2} borderRadius={4} overflow={"hidden"}>
        <Image src="/image-1.jpeg" alt="userprofil" />
      </Box>
      <PostFooter />
    </>
  );
};

export default UserPost;
