import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Center,
  GridItem,
  HStack,
  Input,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";

const ProductsCard = ({ name, getPrice, id, approvedPrice, shopID }) => {
  getPrice = getPrice || function () {};


  return (
    <GridItem colSpan={[12, 12, 6, 6, 4, 2]}>
      <Box display={"inline-flex"} p={2}>
        <Card
          fontFamily="Shabnam-Light"
          h={"max-content"}
          w={"100%"}
          border="1px solid #E1E1E1"
          borderRadius={"19px"}
          py={10}
          style={{
            background:
              "linear-gradient(180deg, #F9F9F9 23.51%, rgba(255, 255, 255, 0) 100%)",
          }}
        >
          <CardHeader pb={"0px"}>
            <Text
              fontSize={"13px"}
              lineHeight="16px"
              fontWeight={700}
              fontStyle="normal"
              mb={"5px"}
            >

              {/* {name} */}
              {String(name).length > 20
                ? String(name).slice(0, 20) + "... "
                : name }
            </Text>
            <Text
              fontSize={"12px"}
              fontStyle="normal"
              fontWeight={400}
              lineHeight="17px"
              color={"#4763e4"}
            >
            </Text>
          </CardHeader>
          <CardBody>
            <Text
              fontWeight={700}
              fontStyle="normal"
              fontSize={"12px"}
              lineHeight="15px"
              mb={"4px"}
              color="5e5e5e"
            >
              قیمت جدید
            </Text>
            <Input
              bgColor={"#f2f2f2"}
              border="1px solid #dedede"
              borderRadius={"25px"}
              onChange={(e) => {
                getPrice({
                  price: e.target.value,
                  productId: id,
                });
              }}
            />
          </CardBody>
        </Card>
      </Box>
    </GridItem>
  );
};

export default ProductsCard;
