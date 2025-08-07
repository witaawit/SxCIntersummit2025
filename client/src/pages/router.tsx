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
import UserProfilePage from "./user/UserProfilePage";
import { AboutSection } from "./main/AboutSection";
import Profile from "./main/Profile";
import NotificationCard from "@/components/profile/NotificationCard";
import Unauthorized from "./main/Unauthorized";
import ProgramLayout from "@/layout/ProgramLayout";
import programRouter from "./program/programRouter";

export const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  { path: "/register", element: <SignupPage /> },
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
        path: "about",
        element: <AboutSection />,
      },
      {
        path: "profile",
        element: <Profile />,
        children: [
          {
            path: "home",
            element: <UserProfilePage />, // <== Halaman Notifications
          },
          {
            index: true,
            element: <UserProfilePage />, // <== Halaman Notifications
          },
          {
            path: "notifications",
            element: <NotificationCard />, // <== Halaman Notifications
          },
        ],
      },

      {
        path: "program",
        element: <ProgramLayout />,
        children: programRouter, // <== Nested program routes
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
  {
    path: "unauthorized",
    element: <Unauthorized />,
  },
]);
