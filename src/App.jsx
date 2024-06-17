// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import NavigationPage from "../src/layout/NavigationPage";
import InstagramHome from "../src/pages/InstagramHome";
import Auth from "../src/pages/Auth";
import { Navigate, Route, Routes } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
import { useEffect } from "react";
import useAuthStore from "./store/authStore";
// import routes from "./routes/routes";

// const router = createBrowserRouter(routes);

function App() {
  // return <RouterProvider router={router} />;
  const authUser = useAuthStore((state) => state.user);

  return (
    <NavigationPage>
      <Routes>
        <Route
          path="/"
          element={authUser ? <InstagramHome /> : <Navigate to="/auth" />}
        />
        <Route
          path="/auth"
          element={!authUser ? <Auth /> : <Navigate to="/" />}
        />
        <Route path="/:profile" element={<ProfilePage />} />
      </Routes>
    </NavigationPage>
  );
}

export default App;
