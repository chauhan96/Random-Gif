import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY

export default function Random() {


  const {gif,spinner,fetchData} = useGif()
  
  
  return (<div className='w-1/2  bg-green-500 rounded-lg border border-black
  flex flex-col items-center gap-y-5 mt-[15px]'>
    <p className='mt-[15px] text-2xl underline uppercase font-bold'>Random Gif</p>
    {
      spinner ? <Spinner></Spinner> : <img src={gif} alt="" height={100} width={200}/>
    }
    <button onClick={()=> fetchData()} className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]">Generate</button>
  </div>);
}

