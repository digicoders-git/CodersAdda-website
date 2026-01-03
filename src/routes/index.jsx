import Home from "../pages/Home";
import AboutApp from "../pages/AboutApp";
import AboutUs from "../pages/AboutUs";

export const routes = [
  {path: "/", element: <Home />, name: "Home",},
  {path: "/about-app", element: <AboutApp />, name: "About App",},
  {path: "/about-us", element: <AboutUs />, name: "About Us",},
];
