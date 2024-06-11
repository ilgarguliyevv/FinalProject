import Auth from "../pages/Auth";
import InstagramHome from "../pages/InstagramHome";

const routes = [
  {
    path: "/",
    element: <InstagramHome />,
  },
  {
    path: "/auth",
    element: <Auth />,
  },
];

export default routes;
