// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import NavigationPage from "../src/layout/NavigationPage";
import InstagramHome from "../src/pages/InstagramHome";
import Auth from "../src/pages/Auth";
import { Route, Routes } from "react-router-dom";
// import routes from "./routes/routes";

// const router = createBrowserRouter(routes);

function App() {
  // return <RouterProvider router={router} />;
  return (
    <NavigationPage>
      <Routes>
        <Route path="/" element={<InstagramHome />}></Route>
        <Route path="/auth" element={<Auth />}></Route>
      </Routes>
    </NavigationPage>
  );
}

export default App;
