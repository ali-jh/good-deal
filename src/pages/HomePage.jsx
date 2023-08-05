import { Box } from '@chakra-ui/react'
import React from 'react'
import Header from '../component/Header'
import HomePageCard from '../component/HomePageCard'

const HomePage = () => {
  return (
    <Box width={'100%'} h="100%" >
      {/* <Header/> */}
      <HomePageCard/>
    </Box>
  )
}

export default HomePage