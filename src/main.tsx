import { createRoot } from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.tsx";
import HellBent from "./HellBent.tsx";
import Prunella from "./Prunella.tsx";
import NotFoundPage from "./NotFoundPage.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/hellbent", element: <HellBent /> },
  { path: "/prunella", element: <Prunella /> },
  { path: "*", element: <NotFoundPage /> },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
