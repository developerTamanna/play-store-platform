import { createBrowserRouter } from "react-router";
import RootLayout from "../RootLayout/RootLayout";

import Apps from "../Pages/Apps/Apps";
import MyProfile from "../Pages/MyProfile/MyProfile";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import NotFound from "../Pages/NotFound/NotFound";
import AppDetails from "../Pages/AppDetails/AppDetails";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import Kids from "../Pages/Kids/Kids";
import Contact from "../Pages/contact/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        path: "/",
        Component: Apps,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/appdetails/:id",

        element: (
          <PrivateRoute>
            <AppDetails></AppDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("/data.json"),
      },
      {
        path: "/kids",
        element: (
          <PrivateRoute>
            <Kids></Kids>
          </PrivateRoute>
        ),
      },
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
]);
