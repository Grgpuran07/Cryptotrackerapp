import React, { useContext, useState } from 'react'
import { Cart } from '../Context'
// import { useState } from 'react'
import "./card.css"

const Home = () => {
     
     const [search,setSearch] = useState('')
     const [navbar,setNavbar] = useState(false)
    const  {coinarray,setFilterArray} = useContext(Cart)
  

    const searchCoin = () =>{
      if(search.length===0){
        return
      }
      const searchedarray = coinarray.filter(item=>{
        return item.name.toLowerCase().includes(search.toLowerCase());
      })
      if(searchedarray.length===0){
          alert("Not found")
          return
      }
      setFilterArray(searchedarray)
      setSearch("")
    }

    const changeBackground = () =>{
      // console.log(window.scrollY)
      if(window.scrollY>80){
        setNavbar(true);
      }else{
        setNavbar(false)
      }
    }

    window.addEventListener("scroll",changeBackground);
    
  return (
    <>
    <div className={navbar?"home active":"home"}><p>Home</p>
    <div><input type="text" placeholder="Enter coin to search" value={search} onChange={(e)=>setSearch(e.target.value)}/><button onClick={()=>searchCoin()}>Search</button></div></div>
      
    </>
     
  )
}

export default Home