import axios from "axios";
import { useEffect, useState } from "react";


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY

const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) => {

    const [gif, setGif] = useState("")
    const [spinner, setSpinner] = useState(false)
  
    async function fetchData(tag){
      setSpinner(true)
     
       const {data} = await axios.get(tag ? `${url}&tag=${tag}`:url)
       const gif = data.data.images.downsized.url
      setGif(gif)
  setSpinner(false)
    }
    
    useEffect(()=>{
      fetchData(tag)
    }, [])

    return {gif,spinner,fetchData}
};

export default useGif;
