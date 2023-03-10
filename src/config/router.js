import { createBrowserRouter } from "react-router-dom";
import Home from "../screens/home";
import Music from "../screens/music";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/music",
    element: <Music />
  }
]);

export default router;
