import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
import { useToast } from "@chakra-ui/react";

const useLogOut = () => {
  const [signOut, isLoggingOut, error] = useSignOut(auth);
  const showToast = useToast();
  const handleLogOut = async () => {
    try {
      await signOut();
      localStorage.removeItem("user-info");
      console.log("Log Out");
    } catch (error) {
      showToast("Error", error.message, "error");
    }
  };

  return { handleLogOut, isLoggingOut, error };
};

export default useLogOut;
