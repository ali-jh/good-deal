import React from "react";
import { useLocation } from "react-router-dom";
import ShopInfoComponent from "../component/ShopInfoComponent";
import Header from "../component/Header";

const ShopPage = () => {
  const loction = useLocation();
  return (
    <ShopInfoComponent
      name={loction.state.name}
      address={loction.state.address}
      phone={loction.state.phone}
      postalCode={loction.state.postalCode}
      posx={loction.state.xLocation}
      posy={loction.state.yLocation}
    />
  );
};

export default ShopPage;
