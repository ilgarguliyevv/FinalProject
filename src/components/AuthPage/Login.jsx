import { Button, Input } from "@chakra-ui/react";
import React, { useState } from "react";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
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
        placeholder="Password"
        fontSize={14}
        type="password"
        size={"sm"}
        value={input.password}
        onChange={(e) => setInput({ ...input, password: e.target.value })}
      />
      <Button
        w={"full"}
        colorScheme="blue"
        size={"sm"}
        fontSize={14}
        // onClick={handleLogin}
      >
        Login
      </Button>
    </>
  );
};

export default Login;
