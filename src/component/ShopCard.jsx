import { Button, Center, Grid, GridItem, Stack } from "@chakra-ui/react";
import React from "react";
import { MdEditNote } from "react-icons/md";
import useInfoStore from "../stores/infoStore";
import { useNavigate } from "react-router-dom";

const ShopCard = ({
  id,
  name,
  address,
  date,
  width,
  height,
  bgColor,
  textColor,
  onClick,
  phone,
  postalCode,
  xLocation,
  yLocation,
}) => {
  const setShopID = useInfoStore((state) => state.setShopID);
  const navigate = useNavigate();

  id = id || 1;
  name = name || "name";
  address = address || "address";
  date = date || "date";
  width = width || "100%";
  height = height || "100%";
  bgColor = bgColor || "#f9f9f9";
  textColor = textColor || "#404040";
  onClick = onClick || (() => {});
  return (
    <Center w="100%">
      <Center
        bgColor={bgColor}
        borderRadius="10px"
        w={width}
        py="10px"
        border={" 1px solid #D0DAFF"}
      >
        <Grid
          templateColumns="repeat(12, 1fr)"
          w={"100%"}
          flexDir="row-reverse"
        >
          <GridItem colSpan={1} textAlign="center" color={textColor}>
            {name}
          </GridItem>
          <GridItem colSpan={7} textAlign="start" color={textColor}>
            {address}
          </GridItem>
          <GridItem colSpan={2} textAlign="center" color={textColor}></GridItem>
          <GridItem colSpan={1} textAlign="center" color={textColor}>
            1401/2/2
          </GridItem>
          <GridItem
            colSpan={1}
            color={textColor}
            display={"flex"}
            justifyContent={"center"}
          >
            <Button
              width={"max-content"}
              bgColor={"transparent"}
              onClick={() => {
                setShopID(id),
                  navigate(`/app/shop/${id}`, {
                    state: {
                      name: name,
                      address: address,
                      phone: phone,
                      postalCode: postalCode,
                      xLocation: xLocation,
                      yLocation: yLocation,
                    },
                  });
              }}
            >
              <MdEditNote fontSize={25} />
            </Button>
          </GridItem>
        </Grid>
      </Center>
    </Center>
  );
};

export default ShopCard;
