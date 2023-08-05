import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'


const useInfoStore = create((set,get) => ({
    cityId:"",
    shopId:"",
    categoryId:"",

    setCityID : (id)=>set({cityId:id}),
    setShopID : (id)=>set({shopId:id}),
    setCategoryID : (id)=>set({categoryId:id}),
}))

export default useInfoStore