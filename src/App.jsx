import React from "react";
import { Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import DataContextProvider from "./context/DataContextProvider";
import MainLayout from "./pages/MainLayout";
import { Box } from "@chakra-ui/react";

const App = () => {
  return (
    <Box bgColor={"#F5F5F5"} h={"max-content"}>
      <DataContextProvider>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/app" element={<MainLayout />}>
            <Route path="shop/:shopID" element={<ShopPage />} />
            <Route path="home" element={<HomePage />} />
          </Route>
        </Routes>
      </DataContextProvider>
    </Box>
  );
};
export default App;
