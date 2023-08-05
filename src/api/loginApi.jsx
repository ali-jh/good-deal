import { Button } from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useInfoStore from "../stores/infoStore";
import usePersistStore from "../stores/persistStore";

export function LoginApi({ username, password }) {
  const setFirstName = usePersistStore((state) => state.setFirstName);
  const setLastName = usePersistStore((state) => state.setLastName);

  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://172.16.37.85:54112/api/Users/Login",
        {
          username,
          password,
        }
      );
      console.log(response.data)
      setFirstName(response.data.firstName),
      setLastName(response.data.lastName),
      navigate("app/home");
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <Button
      bgColor={"#4762e3"}
      color="white"
      mb={"2px"}
      type="submit"
      w="340px"
      mt="10px"
      onClick={handleLogin}
    >
      ورود
    </Button>
  );
}
