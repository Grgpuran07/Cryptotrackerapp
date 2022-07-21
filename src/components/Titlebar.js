import React from 'react'
import Card from './Card';
import { Cart } from '../Context';
import { useState,useContext } from 'react';
import Home from './Home';


const Titlebar = () => {
  const {coinarray,filterarray,setFilterArray} = useContext(Cart);
  const [top,setTop] = useState(0)
  const filterCoins = ()=>{
        if(top<1){
          alert("Enter more than 1.")
          setTop(0)
        }else{
          // console.log(coinarray)
           const filteritems = coinarray.filter(item=>{
            return  parseInt(item.rank) <= top;
           })
           setFilterArray(filteritems)
        }
  }
  
  return (
     <>
     <Home/>
     <div className="topdisplay"><input type="number" value={top} onChange={(e)=>setTop(e.target.value)} placeholder="Enter to view top coins" />
       <button onClick={()=>filterCoins()}>Apply</button></div>
       <div className='card'>
        <div className='firstitem'><p>Rank</p></div>
        <div className='seconditem'><p>Name</p></div>
        <div className='thirditem'><p>Symbol</p></div>
        <div className='fourthitem'><p>Price($)</p></div>
        <div className='fifthitem'><p>Price(Nrs)</p></div>
        </div>
       {filterarray.map((currelem)=>{
         const {id,rank,name,priceUsd,symbol} = currelem;
         return(
          <Card rank={rank} name={name} priceUsd={priceUsd} symbol={symbol} key={rank} id={id}/> 
         )
       })}

     </>
  )
}

export default Titlebar