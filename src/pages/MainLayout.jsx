import React from 'react'
import Header from '../component/Header'
import { Box, Center } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <Box h="100%" >
    <Header/>

    <Center w={"100%"} mt="-5" mb={"5"}>
      <Center
        w={"90%"}
        bgColor={"#ffffff"}
        boxShadow="0px 5px 4px 0 rgb(0,0,0,0.5)"
        borderRadius={"25px"}
        paddingTop="2%"
        flexDirection={"column"}
        zIndex={1}
      >
        <Outlet/>
      </Center>
    </Center>
    
  </Box>
  )
}

export default MainLayout