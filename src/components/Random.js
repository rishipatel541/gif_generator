
// import axios from "axios";
// import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";
export default function Random() {
  // const [gif,setgif] = useState('');
  // const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
  // const [loading ,setloading] = useState(false);
  // useEffect (()=>{
  //   fectData();
  // },[]);
  // async function fectData(){
  //   setloading(true);
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
  //   const {data} =  await axios.get(url);
  //   const imagesource = data.data.images.downsized_large.url;
  //   setgif(imagesource);
  //   setloading(false);
  // }
 
  const {gif,loading,fectData} = useGif();
  function submithandler(){
    fectData();
  }
    

  return (
    <div className="w-1/2 h-[100%] flex flex-col items-center p-[15px] dldldl bg-emerald-400 border-2 border-black rounded-xl min-h-full">
      <h2 className="mb-[10px] text-xl font-bold underline ">A RANDOM GIF</h2>
      
      {
        loading ? (<Spinner/>) : (<div className="sss"><img src={gif} alt="rr"/></div>)
      }
      
      
      <button onClick={submithandler} className="mt-[12px] w-4/5 bg-green-100 p-[7px] rounded-md">GENERATE</button>
    </div>

  )
}
// export default Random;
