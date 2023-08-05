import { Box, Text, Stack, Image, Center } from "@chakra-ui/react";
import React from "react";
import usePersistStore from "../stores/persistStore";
import person from "../image/person.png";
import back from "../image/back.png";

const Navbar = () => {
  const firstName = usePersistStore((state) => state.firstName);
  const lastName = usePersistStore((state) => state.lastName);
  return (
    <Center
      bgColor={"#2647BB"}
      w="90%"
      height="6vh"
      borderRadius="15px"
      display={"flex"}
      flexDir={"row-reverse"}
      p={2}
    >
      <Stack
        direction={["column", "row-reverse"]}
        w={"100%"}
        justifyContent={"space-between"}
      >
        <Stack direction={["column", "row-reverse"]}>
          <Image src={back} alt="mozeee" h={"100%"} />
          {/* <Image src={person} alt="mozeee" w={"50px"} h={"50px"} /> */}
        </Stack>
        <Stack direction={"row"}>
          <Image src={person} alt="mozeee" h={"100%"} />
          <Center>
            <Text color={"white"}>{firstName + " " + lastName}</Text>
          </Center>
        </Stack>
      </Stack>
    </Center>
  );
};

export default Navbar;
