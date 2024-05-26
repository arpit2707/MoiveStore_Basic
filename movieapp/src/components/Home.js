import {
  BrowserRouter as Router,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./RootLayout";
import About from "./About";
import Albums from "./Albums";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/",
        element: <Albums />,
      },
    ],
  },
]);

const Home = () => {
  return <RouterProvider router={router} />;
};

export default Home;
