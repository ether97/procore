import { ThemeProvider } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Homepage } from "./pages/Homepage";
import React, { useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import { GuardRoute } from "./components/GuardRoute";

const router = createBrowserRouter([
  {
    path: "",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    element: <GuardRoute />,
    children: [
      {
        path: "/home",
        element: <Homepage />,
      },
    ],
  },
]);

function App() {
  const theme = useMemo(() => createTheme(themeSettings("dark")));
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </div>
  );
}

export default App;
