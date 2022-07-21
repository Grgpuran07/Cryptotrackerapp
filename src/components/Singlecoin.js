import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Cart } from '../Context'
import axios from 'axios'
import moment from 'moment'
import "./singlecoin.css"
import {Line} from 'react-chartjs-2'
import {Chart as ChartJS,Title,Tooltip,LineElement,Legend,CategoryScale,LinearScale,PointElement } from "chart.js";
ChartJS.register(Title,Tooltip,LineElement,Legend,CategoryScale,LinearScale,PointElement )


const Singlecoin = () => {
    const {coinarray} = useContext(Cart)
    const {id}= useParams()
    const [singlecoininfo,setSinglecoininfo] = useState({})
    const [array,setArray] = useState([]) 
    const [time,setTime] = useState()
    useEffect(()=>{
       
       axios.get(`https://api.coincap.io/v2/assets/${id}/history?interval=d1`,).then(res=>{
        // console.log(res)
        const {data,timestamp} = res
        setTime(timestamp)
        setArray(data.data)
       }).catch(err=>{
        console.log(err)
       })

       const singlearray = coinarray.filter((item)=>{
        return (id === item.id)
       })
       setSinglecoininfo(singlearray[0]);

       

    },[])
    
    let labelsitems = [];
    array.filter(item=>{
      let newDate = moment.utc(item.date).format("MMM Do, YYYY");
      return labelsitems.push(newDate);
    })

    let dataitems =[] ;
    array.filter(item=>{
      return dataitems.push(item.priceUsd);
    })

    // console.log(array)
    // console.log(id)
    // console.log(labelsitems)
    // console.log(dataitems)

    const data = {
      labels:labelsitems,
      datasets:[
        {
          label:`${id} variation in USD`,
          data:dataitems,
          backgroundColor:"blue",
          borderColor:"blue",
          pointRadius:"0"
        }
      ]
    }
    
    const {changePercent24Hr,explorer,
      marketCapUsd,
      maxSupply,
      name,
      priceUsd,
      rank,
      supply, 
      symbol,
      volumeUsd24Hr,
      vwap24Hr,} = singlecoininfo
    // console.log(singlecoininfo)
  return (
    <> 
    <div className='coininfo'>
          <p>Coin Name: {name}</p>
          <p>Rank: {rank}</p>
          <p>Price : $ {parseFloat(priceUsd).toFixed(2)}</p>
          <p>Maximum Supply: {parseFloat(maxSupply/1000000).toFixed(2)} Million</p>
          <p>Market Capital : $ {parseFloat(marketCapUsd/1000000000).toFixed(2)} Billion</p>
         <p>Change Percent within 24 hour: {parseFloat(changePercent24Hr).toFixed(2)} %</p>
      </div>
       <div className='graphdiv'>
          <Line data={data}></Line>
       </div>
       
    </>
     
  )
}

export default Singlecoin