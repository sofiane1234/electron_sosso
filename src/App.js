import { RouterProvider } from "react-router-dom";
import router from "./config/router.js";


export default function App() {
  return <RouterProvider router={router} />;
}