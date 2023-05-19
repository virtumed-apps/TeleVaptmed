import React from "react";
import { AuthProvider } from "./hooks/auth";
import { AppRoutes } from "./routes";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import { GlobalStyle } from "./pages/Home/styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
