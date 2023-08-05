import { Center, Grid, GridItem, Stack } from '@chakra-ui/react'
import React from 'react'

const ShopListComponent = ({shopname , shopaddress , date , submit}) => {
  return (
    <Center w="100%"  >
        <Center bgColor={"#5E5E5E"} borderRadius="10px" w={"100%"} py="10px" > 
          <Grid templateColumns='repeat(12, 1fr)' w={"100%"} flexDir="row-reverse">
           <GridItem colSpan={1} textAlign="center" color={"white"}>{shopname}</GridItem>
           <GridItem colSpan={1} textAlign="center" color={"white"}>{shopaddress}</GridItem>
           <GridItem colSpan={8} textAlign="center" color={"white"}></GridItem>
           <GridItem colSpan={1} textAlign="center" color={"white"}>{date}</GridItem>
           <GridItem colSpan={1} textAlign="center" color={"white"}>{submit}</GridItem>
          </Grid>
        </Center>
    </Center>
  )
}

export default ShopListComponent