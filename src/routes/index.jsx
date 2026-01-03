import Home from "../pages/Home";
import AboutApp from "../pages/AboutApp";
import AboutUs from "../pages/AboutUs";
import Privacy from "../pages/Privacy";
import Terms from "../pages/Terms";
import Refund from "../pages/Refund";
import Disclaimer from "../pages/Disclaimer";
import DownloadApp from "../pages/Download";

export const routes = [
  {path: "/", element: <Home />, name: "Home",},
  {path: "/about-app", element: <AboutApp />, name: "About App",},
  {path: "/about-us", element: <AboutUs />, name: "About Us",},
  {path: "/privacy", element: <Privacy />, name: "Privacy and Policy",},
  {path: "/terms", element: <Terms />, name: "Terms and Condition",},
  {path: "/refund", element: <Refund />, name: "Terms and Condition",},
  {path: "/disclaimer", element: <Disclaimer />, name: "Disclaimer",},
  {path: "/download", element: <DownloadApp />, name: "Download",},
];
