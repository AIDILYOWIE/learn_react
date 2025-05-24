import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
import App from "./App";
import { RouterProvider } from "react-router/dom";
import ReactDOM from "react-dom/client";
import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { TotalPriceProvider } from "./Context/TotalPriceContext";
import Navbar from "./Components/Layouts/NavbarLayouts";
import DarkModeContextProvider from "./Context/DarkModeContext";
import { FormProvider } from "./Context/formContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <DarkModeContextProvider>
        <TotalPriceProvider>
          <Navbar></Navbar>
          <FormProvider>
            <RouterProvider router={App} />
          </FormProvider>
        </TotalPriceProvider>
      </DarkModeContextProvider>
    </Provider>
  </React.StrictMode>
);
