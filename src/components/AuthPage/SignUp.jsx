import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import React, { useState } from "react";

const SignUp = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    fullName: "",
    username: "",
  });
  const [showPassword, setShowPassowrd] = useState();
  return (
    <>
      <Input
        placeholder="Email"
        fontSize={14}
        type="email"
        size={"sm"}
        value={input.email}
        onChange={(e) => setInput({ ...input, email: e.target.value })}
      />
      <Input
        placeholder="Username"
        fontSize={14}
        type="text"
        size={"sm"}
        value={input.username}
        onChange={(e) => setInput({ ...input, username: e.target.value })}
      />
      <Input
        placeholder="Full Name"
        fontSize={14}
        type="text"
        size={"sm"}
        value={input.fullName}
        onChange={(e) => setInput({ ...input, fullName: e.target.value })}
      />
      <InputGroup>
        <Input
          placeholder="Password"
          fontSize={14}
          type={showPassword ? "text" : "password"}
          value={input.password}
          size={"sm"}
          onChange={(e) => setInput({ ...input, password: e.target.value })}
        />
        <InputRightElement h={"full"}>
          <Button
            variant={"ghost"}
            size={"sm"}
            onClick={() => setShowPassowrd(!showPassword)}
          >
            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
          </Button>
        </InputRightElement>
      </InputGroup>
      <Button w={"full"} colorScheme="blue" size={"sm"} fontSize={14}>
        Sign Up
      </Button>
    </>
  );
};

export default SignUp;
