import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MetaMaskContextProvider } from "./hooks/useMetaMask.tsx";
import { MyTokenWithPresaleProvider } from "./hooks/useMyTokenWithPresale.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MetaMaskContextProvider>
      <MyTokenWithPresaleProvider>
        <App />
        <ToastContainer autoClose={2000} />
      </MyTokenWithPresaleProvider>
    </MetaMaskContextProvider>
  </React.StrictMode>
);
