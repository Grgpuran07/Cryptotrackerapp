import { createContext, useEffect,useState } from "react";
import React from 'react'
import axios from "axios";

export const Cart = createContext()

const Context = ({children}) => {
    const [filterarray,setFilterArray] = useState([])
    const [coinarray,setCoinarray] = useState([])


   useEffect(()=>{
     axios.get("https://api.coincap.io/v2/assets").then(res=>{
        // console.log(res.data.data)
        setCoinarray(res.data.data)
        const topfifty = res.data.data.filter((item)=>{return parseInt(item.rank) < 51})
        setFilterArray(topfifty)
     }).catch(err=>{console.log(err)
    alert("Connection problem!")})
   },[])
  
  return (
    <Cart.Provider value={{coinarray,setCoinarray,filterarray,setFilterArray}}>
         {children}
    </Cart.Provider>
  )
}

export default Context

// https://api.coincap.io/v2/assets