import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.css"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Visualizar from "./pages/Visualizar";
import App from "./App"
import Deletar from "./pages/Deletar";
import Atualizar from "./pages/Atualizar";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/visualizar",
    element: <Visualizar />,
  },
  {
    path: "/deletar",
    element: <Deletar/>,
  },
  {
    path: "/atualizar",
    element: <Atualizar />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);