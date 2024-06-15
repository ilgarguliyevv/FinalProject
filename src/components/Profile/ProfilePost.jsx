import {
  Flex,
  GridItem,
  Text,
  Image,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Box,
  Avatar,
  Divider,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Comment from "../Comment";
import PostFooter from "../UserPosts/PostFooter";

const ProfilePost = ({ img }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <GridItem
        cursor={"pointer"}
        borderRadius={4}
        overflow={"hidden"}
        border={"1px solid"}
        borderColor={"whiteAlpha.300"}
        position={"relative"}
        aspectRatio={1 / 1}
        onClick={onOpen}
      >
        <Flex
          opacity={0}
          _hover={{ opacity: 1 }}
          position={"absolute"}
          top={0}
          right={0}
          left={0}
          bottom={0}
          bg={"blackAlpha.700"}
          transition={"all 0.3s ease"}
          zIndex={1}
          justifyContent={"center"}
        >
          <Flex alignItems={"center"} justifyContent={"center"} gap={50}>
            <Flex>
              <AiFillHeart size={20} />
              <Text fontWeight={"bold"} ml={2}>
                108
              </Text>
            </Flex>
            <Flex>
              <FaComment size={20} />
              <Text fontWeight={"bold"} ml={2}>
                10
              </Text>
            </Flex>
          </Flex>
        </Flex>

        <Image
          src={img}
          alt="profile"
          w={"100%"}
          h={"100%"}
          objectFit={"cover"}
        />
      </GridItem>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered={true}
        size={{ base: "3xl", md: "5xl" }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody bg={"black"} pb={5}>
            <Flex
              gap={4}
              w={{ base: "90%", sm: "70%", md: "full" }}
              mx={"auto"}
            >
              <Box
                borderRadius={4}
                overflow={"hidden"}
                border={"1px solid"}
                borderColor={"whiteAlpha.300"}
                flex={1.5}
              >
                <Image src={img} alt="profilepost" />
              </Box>
              <Flex
                flex={1}
                flexDir={"column"}
                px={10}
                display={{ base: "none", md: "flex" }}
              >
                <Flex alignItems={"center"} justifyContent={"space-between"}>
                  <Flex alignItems={"center"} gap={4}>
                    <Avatar
                      src="/public/161597844.jpg"
                      size={"sm"}
                      name="Ilgar Guliyev"
                    />
                    <Text fontWeight={"bold"} fontSize={12}>
                      guliyevv_i
                    </Text>
                  </Flex>
                  <Box
                    _hover={{ bg: "whiteAlpha.300", color: "red.600" }}
                    borderRadius={4}
                    p={1}
                  >
                    <MdDelete size={20} cursor={"pointer"} />
                  </Box>
                </Flex>
                <Divider my={4} bg={"gray.500"} />
                <VStack
                  w={"full"}
                  alignItems={"start"}
                  maxH={"350px"}
                  overflowY={"auto"}
                >
                  <Comment
                    createdAt={"5h ago"}
                    username={"yagubhajili"}
                    profileImg={
                      "https://avatars.githubusercontent.com/u/161597487?v=4"
                    }
                    text={"Ilqaaar cay suz"}
                  />
                  <Comment
                    createdAt={"1h ago"}
                    username={"guri_style"}
                    profileImg={
                      "https://avatars.githubusercontent.com/u/98018715?v=4"
                    }
                    text={"Zalim"}
                  />
                  <Comment
                    createdAt={"3h ago"}
                    username={"umudelizade"}
                    profileImg={
                      "https://avatars.githubusercontent.com/u/161642826?v=4"
                    }
                    text={"Pese gedek?"}
                  />
                  <Comment
                    createdAt={"3h ago"}
                    username={"umudelizade"}
                    profileImg={
                      "https://avatars.githubusercontent.com/u/161642826?v=4"
                    }
                    text={"Pese gedek?"}
                  />{" "}
                  <Comment
                    createdAt={"3h ago"}
                    username={"umudelizade"}
                    profileImg={
                      "https://avatars.githubusercontent.com/u/161642826?v=4"
                    }
                    text={"Pese gedek?"}
                  />{" "}
                  <Comment
                    createdAt={"3h ago"}
                    username={"umudelizade"}
                    profileImg={
                      "https://avatars.githubusercontent.com/u/161642826?v=4"
                    }
                    text={"Pese gedek?"}
                  />{" "}
                  <Comment
                    createdAt={"3h ago"}
                    username={"umudelizade"}
                    profileImg={
                      "https://avatars.githubusercontent.com/u/161642826?v=4"
                    }
                    text={"Pese gedek?"}
                  />{" "}
                  <Comment
                    createdAt={"3h ago"}
                    username={"umudelizade"}
                    profileImg={
                      "https://avatars.githubusercontent.com/u/161642826?v=4"
                    }
                    text={"Pese gedek?"}
                  />
                  <Comment
                    createdAt={"3h ago"}
                    username={"umudelizade"}
                    profileImg={
                      "https://avatars.githubusercontent.com/u/161642826?v=4"
                    }
                    text={"Pese gedek?"}
                  />
                  <Comment
                    createdAt={"3h ago"}
                    username={"umudelizade"}
                    profileImg={
                      "https://avatars.githubusercontent.com/u/161642826?v=4"
                    }
                    text={"Pese gedek?"}
                  />
                </VStack>
                <Divider my={4} bg={"gray.8000"} />
                <PostFooter isProfilePage={true} />
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfilePost;
