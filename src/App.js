import { ThemeProvider } from "styled-components";
import "./App.css";
import GlobalStyle from "./styles/global";
import theme from "./styles/theme";
import { RouterProvider } from "react-router-dom";
import Router from "./routes/router";
 

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RouterProvider router={Router} />
      </ThemeProvider>
    </>
  );
}

export default App;