import { useState } from "react";
import reactLogo from "./assets/react.svg";
import GlobalStyles from ".";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages";
import Market from "./pages/market";
import NotFound from "./pages/not-found";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="market" element={<Market />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
