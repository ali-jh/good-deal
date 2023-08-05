import { Box, Button, Center, Checkbox, FormControl, FormLabel, Image, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React from 'react'
import logintitle from "../image/LogInTitle.png"
import Gandom from "../image/Gandom.png"
import "./Login.css"
import { BsEyeSlashFill } from "react-icons/bs"
import { useState } from 'react'
import { LoginApi} from '../api/loginApi'


const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const [fullname , setFullname] = useState("")

  return (
    <Box display={"flex"} justifyContent="center" alignItems={"center"} p="4px" m="0px" w={"100vw"} className=" main-login" bgColor={"#f5f5f5"} fontFamily="Shabnam-Light" bgImg={Gandom}>
      
      <Box display={"flex"} flexDirection="column" justifyContent={"center"} alignItems="center" p={"5px"} px={"10"} mt="5px" className='main-segment'>
        <Box m="35px" className=" title-image">
          <Image src={logintitle} alt="logo" />
        </Box>
        <FormControl px={"44px"} dir={"rtl"} className="login-form">
          <FormLabel> نام کاربری </FormLabel>
          <Input type="text" onChange={(e) => setUsername(e.target.value)} />
          <FormLabel> کلمه عبور </FormLabel>
          <InputGroup>
            <InputLeftElement
              pointerEvents='none'
              children={<BsEyeSlashFill color='gray.300' />}
            />
            <Input type="password" onChange={(e) => setPassword(e.target.value)} />
          </InputGroup>
          <Checkbox defaultChecked>مرابه خاطر بسپار</Checkbox>
        </FormControl>
        <LoginApi username={username} password={password} setFullname={setFullname}/>
        <Center pb="30px">آیا رمز عبور را فراموش کرده اید؟</Center>
      </Box>
    </Box>
  )

}

export default Login