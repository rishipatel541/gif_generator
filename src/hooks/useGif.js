// export default function Tag() {
//   return <div>Tag</div>;
// }


import axios from "axios";
import { useEffect, useState } from "react";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;


 const useGif = (tag) => {
  const [gif,setgif] = useState('');
  const [loading ,setloading] = useState(false);
  const url1 = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`
  const url2 = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`

  useEffect (()=>{
    fectData();
  },[]);
 
  async function fectData(tag){
    setloading(true);
    const {data} =  await axios.get(tag ? url1 : url2);
    const imagesource = data.data.images.downsized_large.url;
    setgif(imagesource);
    setloading(false);
  }
    return {gif,fectData,loading} 
}

export default useGif;