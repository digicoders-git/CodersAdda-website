import Home from "../pages/Home";
import AboutApp from "../pages/AboutApp";

export const routes = [
  {
    path: "/",
    element: <Home />,
    name: "Home",
  },
  {
    path: "/about-app",
    element: <AboutApp />,
    name: "About App",
  },
  // Add more routes here later
];
