import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
import App from "./App";
import { RouterProvider } from "react-router/dom";
import ReactDOM from "react-dom/client";
import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import DarkModeContextProvider from "./Context/DarkModeContext";
import Navbar from "./Components/Layouts/NavbarLayouts";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <DarkModeContextProvider>
        <Navbar/>
        <RouterProvider router={App} />
      </DarkModeContextProvider>
    </Provider>
  </React.StrictMode>
);
