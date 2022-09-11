import { useState } from "react";
import reactLogo from "./assets/react.svg";
import GlobalStyles from ".";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages";
import MarketList from "./pages/market";
import NotFound from "./pages/not-found";
import Navbar from "./components/navbar";
import { MainContainer } from "./App.styles";

function App() {
  return (
    <>
      <GlobalStyles />
      <MainContainer>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="market" element={<MarketList />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </MainContainer>
    </>
  );
}

export default App;
