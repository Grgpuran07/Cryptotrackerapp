import React from 'react'
import {Link} from "react-router-dom"
import "./card.css"
import Singlecoin from './Singlecoin'
 

const Card = ({id,rank,name,priceUsd,symbol}) => {


  return (
    <>
     
    <Link to={`/${id}`}>
      <div className='card'>
        <div className='firstitem'><p>{rank}</p></div>
        <div className='seconditem'><p>{name}</p></div> 
        <div className='thirditem'><p>{symbol}</p></div> 
        <div className='fourthitem'><p>{parseFloat(priceUsd).toFixed(2)}</p></div> 
        <div className='fifthitem'><p>{parseFloat(priceUsd*128.15).toFixed(2)}</p></div> 
      </div>
    </Link>
     
    
</>
     
  )
}

export default Card