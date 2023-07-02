import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { QueryClientProvider } from "react-query";
import { RouterProvider } from "react-router-dom";
import queryClient from "./services/query";
import router from "./services/router";
import { AuthProvider } from "./context/AuthContent";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
