import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Toaster
      position="top-right"
      toastOptions={{
        error: {
          border: "1px solid #EB5757",
        },
        success: {
          border: "1px solid #35d911",
        },
        duration: 5000,
        style: {
          borderRadius: "6px",
          boxShadow: "0px 2px 26px rgba(82, 215, 0, 0.1)",
          maxWidth: "366px",
          minHeight: "48px",
          fontWeight: 500,
          fontSize: "14px",
          lineHeight: "17px",
          letterSpacing: "0.01em",
          color: "#000B14",
          textAlign: "left",
          flex: "unset",
        },
      }}
    />
  </React.StrictMode>
);
