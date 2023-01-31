import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
} from "react-router-dom";
import ErrorPage from "./ErrorPage";
import AddContact from "./components/AddContact";
import Header from "./components/Header";
import ListContact from "./components/ListContact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // main root layout component
    errorElement: <ErrorPage />,
    children: [
      {
        path: "contacts/:contactId",
        element: <ListContact />,
      },
    ],
  },
  {
    path: "add",
    element: <AddContact />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
  </React.StrictMode>
);
