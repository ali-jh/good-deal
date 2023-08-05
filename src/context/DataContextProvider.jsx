import React, { createContext, useEffect, useState } from 'react';
import { GetOstan } from '../api/api';

export const dataContext = createContext();


const DataContextProvider = ({ children }) => {
  const [ostan, setOstan] = useState([])

  useEffect(() => {
    const fetchApi = async () => {
      setOstan(await GetOstan())
    }

    fetchApi()
  },[])

  return (
    <dataContext.Provider value={{ostan}}>
        {children}
    </dataContext.Provider>
  )
};

export default DataContextProvider