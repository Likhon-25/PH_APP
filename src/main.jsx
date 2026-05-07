import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";
import RootLayout from "./layout/RootLayout";
import Apps from "./Pages/Apps/Apps";
import InstallApps from "./Pages/InstallApps/InstallApps";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          // path:"/",
          index: true,
          element: <h2>HomePage</h2>
        },
        {
          path:"/apps",
          element: <Apps />
        },
        {
          path: "/installApps",
          element: <InstallApps />
        }
      ],
      errorElement: <NotFoundPage />
    }
  ]
)

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router } />
  </StrictMode>,
);
