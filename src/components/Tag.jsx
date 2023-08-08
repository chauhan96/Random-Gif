import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY

export default function Tag() {


  const [tag, setTag] = useState('cat')
  const {gif,spinner,fetchData} = useGif(tag)


  function changehandler(e){
      setTag(e.target.value)
  }
  
  return (<div className='w-1/2  bg-blue-500 rounded-lg border border-black
  flex flex-col items-center gap-y-5 mt-[15px]'>

    <p className='mt-[15px] text-2xl underline uppercase font-bold'>Random {tag} Gif</p>
    {
      spinner ? <Spinner></Spinner> : <img src={gif} alt="" height={100} width={200}/>
    }

    <input type="text" value={tag} onChange={changehandler}  className='w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center'/>

    <button onClick={()=> fetchData(tag)} className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]">Generate</button>
  </div>);
}