import { Box, Center, Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { GetShops } from "../api/api";
import useInfoStore from "../stores/infoStore";
import Navbar from "./Navbar";
import Selectinfo from "./SelectInfo";
import ShopCard from "./ShopCard";
import ShopListComponent from "./ShopListComponent";

const HomePageCard = () => {
  const setCityID = useInfoStore((state) => state.setCityID);
  const cityId = useInfoStore((state) => state.cityId);
  const shopId = useInfoStore((state) => state.shopId);

  const [shops, setShops] = useState([]);

  useEffect(() => {
    GetShops({
      id: cityId,
      setShop: setShops,
    });
  }, [cityId]);
  return (
      <Center
        w={"100%"}
        // // bgColor={"#ffffff"}
        // boxShadow="0px 5px 4px 0 rgb(0,0,0,0.5)"
        borderRadius={"25px"}
        // paddingTop="2%"
        flexDirection={"column"}
      >
      <Navbar />
      <Selectinfo />
      <Stack spacing={2} w="100%" px={"3%"} my="3%">
        <ShopListComponent
          shopname={"نام فروشگاه"}
          shopaddress={"آدرس فروشگاه"}
          date={"1401/01/08"}
          submit={"قیمت گذاری"}
        />
        {shops.map((item) => (
          <ShopCard
            key={item.id}
            name={item.name}
            address={item.address}
            id={item.id}
            phone={item.phone}
            postalCode={item.postalCode}
            xLocation={item.xLocation}
            yLocation={item.yLocation}
          />
        ))}
      </Stack>
    </Center>
  );
};

export default HomePageCard;
