// routes.tsx or router.tsx
import { createBrowserRouter } from "react-router-dom";

import roleRoutes from "./role/roleRouter"; // <== Modularized
import Main from "./main/Main";
import ErrorPage from "./ErrorPage";
import Login from "./main/Login";
import Landing from "./main/Landing";
import AppLayout from "@/layout/AppLayout";
import RoleLayout from "@/layout/RoleLayout";
import { SignupPage } from "./main/SignUpPage";
import { AboutSection } from "./main/AboutSection";
import GuestPage from "./main/GuestPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignupPage />,
      },
      {
        path: "about",
        element: <AboutSection />,
      },

      // Other public routes that are based on role can be added here
      // For example: /admin/dasboard, /user/profile, etc.
      {
        path: "role",
        element: <RoleLayout />,
        children: roleRoutes, // <== Nest admin routes
      },
    ],
  },
]);
