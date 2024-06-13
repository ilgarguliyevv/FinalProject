import { Container } from "@chakra-ui/react";
import React from "react";
import UserPost from "./UserPost";

const UserPosts = () => {
  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      <UserPost />
      <UserPost />
      <UserPost />
      <UserPost />
      <UserPost />
    </Container>
  );
};

export default UserPosts;
