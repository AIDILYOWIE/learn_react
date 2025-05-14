import { useState } from "react";
import { FormLogin } from "./Components/Fragments/FormLogin";
import { Login } from "./Pages/login";
import { Register } from "./Pages/register";
import { createBrowserRouter } from "react-router";
import { Product } from "./Pages/product";

const App = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/product",
    element: <Product />,
  },
]);

export default App;
