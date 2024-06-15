import { Box, Grid, Skeleton, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ProfilePost from "./ProfilePost";

const ProfilePosts = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <Grid
      templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
      gap={1}
      columnGap={1}
    >
      {loading &&
        [0, 1, 2, 3, 4, 5].map((_, index) => (
          <VStack key={index} alignItems={"flex-start"} gap={4}>
            <Skeleton w={"full"}>
              <Box h={"300px"}>contents wrapped</Box>
            </Skeleton>
          </VStack>
        ))}

      {!loading && (
        <>
          <ProfilePost img="/image-1.jpeg" />
          <ProfilePost img="/image-2.jpg" />
          <ProfilePost img="/image-3.jpg" />
          <ProfilePost img="/image-4.jpg" />
          <ProfilePost img="/image-5.jpg" />
        </>
      )}
    </Grid>
  );
};

export default ProfilePosts;
