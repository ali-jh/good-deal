import { Box, Center, HStack, Select, Stack, Text } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DatePicker from "react-multi-date-picker";
import { dataContext } from "../context/DataContextProvider";
import { GetCity } from "../api/api";
import useInfoStore from "../stores/infoStore";

const Selectinfo = () => {
  const setCityID = useInfoStore((state) => state.setCityID);
  const mainPosition = "bottom";
  const relativePosition = "center";
  const { ostan } = useContext(dataContext);
  const [cities, setCities] = useState([]);

  const handleChangeOstan = (e) => {
    GetCity({
      id: e.target.value,
      setCities: setCities,
    });
  };
  const handleChangeCity = (e) => {
    setCityID(e.target.value);
  };
  return (
    <Box
      height={["max-content", "max-content", "max-content", "80px", "80px"]}
      mt="3%"
      w="80%"
      bgColor={"rgba(233, 235, 255, 0.38)"}
      boxSizing="border-box"
      borderRadius={"25px"}
      style={{ boxShadow: "0 0 0 0.3px gray" }}
      fontFamily="Shabnam-light"
    >
      <Center width={"100%"} pt="20px">
        <Stack
          height={"100%"}
          spacing={12}
          direction={[
            "column",
            "column",
            "column",
            "row",
            "row",
          ]}
        >
          <Center>
            <Stack>
              <Text textAlign={"center"}>استان</Text>
              <Select
                variant={"outline"}
                w={["100%", "100%", "100%", "12vw", "12vw"]}
                minW={["200px", "200px", "200px", "12vw", "12vw"]}
                h={"48px"}
                boxSizing="border-box"
                borderRadius={"10px"}
                bg={"#ffffff"}
                border={"0.84px solid #4763e4"}
                textAlign="center"
                onChange={handleChangeOstan}
              >
                {ostan.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </Select>
            </Stack>
          </Center>
          <Center>
            <Stack>
              <Text textAlign={"center"}>شهر</Text>
              <Select
                variant={"outline"}
                w={["100%", "100%", "100%", "12vw", "12vw"]}
                minW={["200px", "200px", "200px", "12vw", "12vw"]}
                h={"48px"}
                boxSizing="border-box"
                borderRadius={"10px"}
                bg={"#ffffff"}
                textAlign="center"
                border={"0.84px solid #4763e4"}
                onChange={handleChangeCity}
              >
                {cities.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </Select>
            </Stack>
          </Center>
          <Center>
            <Stack>
              <Text textAlign={"center"}>محله</Text>
              <Select
                variant={"outline"}
                w={["100%", "100%", "100%", "12vw", "12vw"]}
                minW={["200px", "200px", "200px", "12vw", "12vw"]}
                h={"48px"}
                boxSizing="border-box"
                borderRadius={"10px"}
                bg={"#ffffff"}
                border={"0.84px solid #4763e4"}
              ></Select>
            </Stack>
          </Center>
          <Center>
            <Stack>
              <Text textAlign={"center"}>تاریخ روزجاری</Text>
              <Center
                w={["100%", "100%", "100%", "12vw", "15vw"]}
                minW={["200px", "200px", "200px", "12vw", "12vw"]}
                position={"relative"}
              >
                <DatePicker
                  calendar={persian}
                  locale={persian_fa}
                  style={{
                    width: "100%",
                    height: "48px",
                    boxSizing: "border-box",
                    borderRadius: "10px",
                    backgroundColor: "#ffffff",
                    border: "0.84px solid #4763e4",
                  }}
                  calendarPosition={`${mainPosition}-${relativePosition}`}
                />
              </Center>
            </Stack>
          </Center>
        </Stack>
      </Center>
    </Box>
  );
};

export default Selectinfo;
