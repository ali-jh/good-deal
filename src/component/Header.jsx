import { Box } from "@chakra-ui/react";
import React from "react";
import headerBanner from "../image/headerBanner.svg";
import parchamBanner from "../image/parcham.svg";
import kharidekhob from "../image/kharidekhob.svg";
import shoar from "../image/shoar.svg";

const Header = () => {
  return (
    <Box
      w="100%"
      h={"20vh"}
      bgImg={headerBanner}
      bgRepeat="no-repeat"
      bgSize="cover"
      display="flex"
      flexDir="row"
      justifyContent="space-between"
      position={"relative"}
      zIndex={0}
    >
      <img
        src={parchamBanner}
        width={"10%"}
        alt="logo"
        style={{
          marginLeft: "5%",
          marginTop: "1%",
          marginBottom: "2%",
          borderRadius: "80px",
        }}
      />
      <img
        src={kharidekhob}
        width={"50%"}
        style={{ marginTop: "1%", marginBottom: "2%", borderRadius: "80px" }}
        alt="logo"
      />
      <img
        src={shoar}
        width={"20%"}
        style={{ marginTop: "1%", marginBottom: "2%", borderRadius: "80px" }}
        alt="logo"
      />
    </Box>
  );
};

export default Header;
