import {
  Box,
  Button,
  Card,
  CardHeader,
  Center,
  Divider,
  Grid,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { RiArrowGoBackFill } from "react-icons/ri";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useNavigate, useParams } from "react-router-dom";
import { GetCategory, GetProductsById, PostPrices } from "../api/api";
import icon1 from "../assets/images/Icon1.png";
import useInfoStore from "../stores/infoStore";
import ProductsCard from "./ProductsCard";

const ShopInfoComponent = ({
  name,
  address,
  phone,
  postalCode,
  posx,
  posy,
}) => {
  const navigate = useNavigate();
  const position = [posx, posy];

  const [category, setCategory] = useState([]);
  const [productsById, setProductsById] = useState([]);
  const setCategoryID = useInfoStore((state) => state.setCategoryID);
  const categoryId = useInfoStore((state) => state.categoryId);
  const { shopID } = useParams();
  const [prices, setPrices] = useState([]);
  const [IDs, setIDs] = useState([]);

  const getPrice = (data) => {
    console.log(data.productId);
    if (!IDs.includes(data.productId)) {
      let ids = IDs;
      ids.push(data.productId);
      setIDs(ids);
      let p = prices;
      p.push({
        productId: data.productId,
        price: data.price,
        shopId: shopID,
        userId: 19,
        isApproved: false,
      });
      setPrices(p);
    } else if (IDs.includes(data.productId)) {
      let pp = "";
      let pi = "";
      prices.map((p) => {
        if (p.productId == data.productId) {
          pp = p;
          pi = prices.indexOf(p);
        }
      });
      let p = prices;
      p[pi].price = data.price;
      setPrices(p);
    }

    console.log(prices);
  };

  const handleSend = () => {
    console.log(prices)
    PostPrices({
      data: prices,
      onSuccess: () => {},
      onFail: () => {},
    });
  };

  useEffect(() => {
    GetCategory({
      setCategory: setCategory,
    });
  }, []);

  useEffect(() => {
    GetProductsById({
      id: categoryId,
      setProductsById: setProductsById,
    });
  }, [categoryId]);

  return (
    <Box width={"100%"} px={10}>
      <HStack
        display={"flex"}
        flexDir={"row"}
        justifyContent={"space-around"}
        whiteSpace="nowrap"
        fontWeight={"bold"}
        w="auto"
      >
        <img src={icon1} alt="Icon" style={{ marginLeft: "23px" }} />
        <Text
          fontSize={"22px"}
          style={{ marginLeft: "30px" }}
          fontFamily="Shabnam-Light"
          fontWeight={700}
          letterSpacing="-0.01em"
        >
          اطلاعات فروشگاه
        </Text>
        <Divider />
        <Text
          fontSize={"1xl"}
          style={{ marginRight: "30px", marginLeft: "22px" }}
        >
          بازگشت
        </Text>
        <RiArrowGoBackFill
          style={{
            backgroundColor: "#4763E4",
            color: "white",
            borderRadius: "30px",
            padding: "16px",
          }}
          size="50px"
          onClick={() => navigate(-1)}
        />
      </HStack>
      <HStack
        display={"flex"}
        whiteSpace="nowrap"
        justifyContent={"space-around"}
        mr="-180px"
        mb="25px"
        w={"auto"}
        fontFamily={"Shabnam-Light"}
        fontSize="18px"
        fontWeight={700}
        letterSpacing="-0.01em"
      >
        <Text fontSize={"18px"}>عنوان فروشگاه</Text>
        <Text fontSize={"18px"}>کدپستی</Text>
        <Text fontSize={"18px"}>شماره تماس</Text>
      </HStack>
      <HStack
        display={"flex"}
        whiteSpace="nowrap"
        justifyContent={"space-around"}
        mr="-180px"
        mt="25px"
        fontFamily={"Shabnam-Light"}
        fontSize="16px"
        fontWeight={500}
        letterSpacing="-0.01em"
        lineHeight={"22px"}
      >
        <Text fontSize={"16px"}>{name}</Text>
        <Text fontSize={"16px"}>{postalCode}</Text>
        <Text fontSize={"16px"}>{phone}</Text>
      </HStack>
      <HStack
        display={"flex"}
        flexDir={"row"}
        whiteSpace="nowrap"
        mr={"50px"}
        mt="54px"
        mb={"15px"}
        fontFamily={"Shabnam-Light"}
        letterSpacing="-0.01em"
      >
        <Text fontSize={"18px"} fontWeight={700} style={{ marginLeft: "30px" }}>
          آدرس پستی{" "}
        </Text>
        <Text fontSize={"16px"} fontWeight={400}>
          {address}
        </Text>
      </HStack>
      <Center>
        <MapContainer
          center={position}
          zoom={13}
          scrollWheelZoom={false}
          style={{
            border: " 1px solid #4763E4",
            width: "80%",
            height: "437px",
            borderRadius: "15px",
            zIndex: 20,
          }}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>{name}</Popup>
          </Marker>
        </MapContainer>
      </Center>
      <HStack
        display={"flex"}
        justifyContent={"space-around"}
        whiteSpace="nowrap"
        fontWeight={"bold"}
        w="auto"
        mb={"30px"}
        mt={10}
      >
        <img src={icon1} alt="Icon" style={{ marginLeft: "23px" }} />
        <Text
          fontSize={"22px"}
          style={{ marginLeft: "30px" }}
          fontFamily="Shabnam-Light"
          fontWeight={700}
          letterSpacing="-0.01em"
        >
          قیمت گذاری
        </Text>
        <Divider />
      </HStack>
      {!categoryId ? (
        <Box
          boxSize="1.5"
          h={"max-content"}
          w={"100%"}
          bgColor={"#ffffff"}
          fontFamily="Shabnam-Light"
        >
          <SimpleGrid
            spacing={1}
            templateColumns="repeat(7, minmax(200px, 1fr))"
          >
            {category.map((item) => (
              <Card
                bgColor={"none"}
                border="none"
                boxShadow={"none"}
                key={item.id}
                _hover={{
                  cursor: "pointer",
                }}
              >
                <CardHeader alignItems={"center"}>
                  <Center>
                    <Image
                      src={item.picture}
                      onClick={() => setCategoryID(item.id)}
                      borderRadius={25}
                      _hover={{
                        boxShadow: "0px 0px 10px 10px rgba(0,0,0,0.2)",
                        transitionDuration:'0.2s',
                        transitionProperty:'all'
                      }}
                    />
                  </Center>
                </CardHeader>
              </Card>
            ))}
          </SimpleGrid>
        </Box>
      ) : (
        <Stack width={"100%"} mb={5}>
          <Box>
            <Grid
              templateColumns="repeat(12, 1fr)"
              w={"100%"}
              flexDir="row-reverse"
            >
              {productsById.map((item) => (
                <ProductsCard
                  key={item.id}
                  name={item.name}
                  id={item.id}
                  shopID={shopID}
                  getPrice={getPrice}
                />
              ))}
            </Grid>
          </Box>
          <HStack dir="ltr">
            <Button
              onClick={handleSend}
              w={"147px"}
              h={"58px"}
              bgColor={"#4763e4"}
              borderRadius={"15px"}
              color="white"
              fontFamily={"Shabnam-Light"}
              fontStyle="normal"
              fontSize={"16px"}
              fontWeight={"500"}
            >
              ثبت نهایی
            </Button>
            <Button
              onClick={() => setCatid(-1)}
              w={"147px"}
              h={"58px"}
              bgColor={"#4763e4"}
              borderRadius={"15px"}
              mr={"20px"}
              color="white"
              fontFamily={"Shabnam-Light"}
              fontStyle="normal"
              fontSize={"16px"}
              fontWeight={"500"}
            >
              ذخیره
            </Button>
            <Button
              onClick={() => setCategoryID(0)}
              w={"147px"}
              h={"58px"}
              bgColor={"#4763e4"}
              borderRadius={"15px"}
              mr={"20px"}
              color="white"
              fontFamily={"Shabnam-Light"}
              fontStyle="normal"
              fontSize={"16px"}
              fontWeight={"500"}
            >
              قبلی
            </Button>
          </HStack>
        </Stack>
      )}
    </Box>
  );
};

export default ShopInfoComponent;
