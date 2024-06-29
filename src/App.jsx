// // import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import "./App.css";
// import NavigationPage from "../src/layout/NavigationPage";
// import InstagramHome from "../src/pages/InstagramHome";
// import Auth from "../src/pages/Auth";
// import { Navigate, Route, Routes } from "react-router-dom";
// import ProfilePage from "./pages/ProfilePage";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth } from "./firebase/firebase";
// // import routes from "./routes/routes";

// // const router = createBrowserRouter(routes);

// function App() {
//   // return <RouterProvider router={router} />;
//   const [authUser] = useAuthState(auth);

//   return (
//     <NavigationPage>
//       <Routes>
//         <Route
//           path="/"
//           element={authUser ? <InstagramHome /> : <Navigate to="/auth" />}
//         />
//         <Route
//           path="/auth"
//           element={!authUser ? <Auth /> : <Navigate to="/" />}
//         />
//         <Route path="/:username" element={<ProfilePage />} />
//       </Routes>
//     </NavigationPage>
//   );
// }

// export default App;

import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import NavigationPage from "../src/layout/NavigationPage";
import InstagramHome from "../src/pages/InstagramHome";
import Auth from "../src/pages/Auth";
import AdminPanel from "./components/AdminPanel/AdminPanel";
import AdminRoute from "./components/AdminPanel/AdminRoute";
import ProfilePage from "./pages/ProfilePage";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, firestore } from "./firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

function App() {
  const [authUser] = useAuthState(auth);
  const [isAdmin, setIsAdmin] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const checkUserStatus = async () => {
      if (authUser) {
        const userDoc = await getDoc(doc(firestore, "users", authUser.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          if (userData.isBlocked) {
            await auth.signOut();
            return <Navigate to="/auth" />;
          }
          setIsAdmin(userData.isAdmin);
        } else {
          setIsAdmin(false);
        }
      }
    };
    checkUserStatus();
  }, [authUser]);

  return (
    <div>
      <Routes>
        <Route
          path="/auth"
          element={
            !authUser ? (
              <Auth />
            ) : isAdmin ? (
              <Navigate to="/admin" />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/"
          element={
            authUser ? (
              isAdmin ? (
                <Navigate to="/admin" />
              ) : (
                <NavigationPage>
                  <InstagramHome />
                </NavigationPage>
              )
            ) : (
              <Navigate to="/auth" />
            )
          }
        />
        <Route
          path="/:username"
          element={
            authUser && !isAdmin ? (
              <NavigationPage>
                <ProfilePage />
              </NavigationPage>
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminPanel />
            </AdminRoute>
          }
        />
        <Route path="*" element={<Navigate to="/auth" />} />
      </Routes>
    </div>
  );
}

export default App;
