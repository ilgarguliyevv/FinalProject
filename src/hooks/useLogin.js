// import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
// import useShowToast from "./useShowToast";
// import { auth, firestore } from "../firebase/firebase";
// import { doc, getDoc } from "firebase/firestore";
// import useAuthStore from "../store/authStore";

// const useLogin = () => {
//   const showToast = useShowToast();
//   const [signInWithEmailAndPassword, , loading, error] =
//     useSignInWithEmailAndPassword(auth);
//   const loginUser = useAuthStore((state) => state.login);

//   const login = async (inputs) => {
//     if (!inputs.email || !inputs.password) {
//       return showToast("Error", "Please fill all the fields", "error");
//     }
//     try {
//       const userCred = await signInWithEmailAndPassword(
//         inputs.email,
//         inputs.password
//       );

//       if (userCred) {
//         const docRef = doc(firestore, "users", userCred.user.uid);
//         const docSnap = await getDoc(docRef);
//         localStorage.setItem("user-info", JSON.stringify(docSnap.data()));
//         loginUser(docSnap.data());
//       }
//     } catch (error) {
//       showToast("Error", error.message, "error");
//     }
//   };

//   return { loading, error, login };
// };

// export default useLogin;

import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import useShowToast from "./useShowToast";
import { auth, firestore } from "../firebase/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import useAuthStore from "../store/authStore";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const showToast = useShowToast();
  const [signInWithEmailAndPassword, , loading, error] =
    useSignInWithEmailAndPassword(auth);
  const loginUser = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const login = async (inputs) => {
    if (!inputs.email || !inputs.password) {
      return showToast("Error", "Please fill all the fields", "error");
    }
    try {
      const userCred = await signInWithEmailAndPassword(
        inputs.email,
        inputs.password
      );

      if (userCred) {
        const docRef = doc(firestore, "users", userCred.user.uid);
        const docSnap = await getDoc(docRef);
        const userData = docSnap.data();

        // Update the lastLogin timestamp
        await updateDoc(docRef, {
          lastLogin: Date.now(),
        });

        localStorage.setItem("user-info", JSON.stringify(userData));
        loginUser(userData);

        // Redirect based on isAdmin status
        if (userData.isAdmin) {
          navigate("/admin");
        } else {
          navigate("/");
        }
      }
    } catch (error) {
      showToast("Error", error.message, "error");
    }
  };

  return { loading, error, login };
};

export default useLogin;
