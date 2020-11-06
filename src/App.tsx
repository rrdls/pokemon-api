import React from "react";
import { GlobalStyle } from "./assets/styles/global";
import Home from "./pages/Home";
import Routes from "./config/routes";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Routes />
    </>
  );
};

export default App;
