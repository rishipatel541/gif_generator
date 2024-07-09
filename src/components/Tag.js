// export default function Tag() {
//   return <div>Tag</div>;
// }


// import axios from "axios";
import {  useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";
export default function Tag() {
  // const [gif,setgif] = useState('');
  // const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
  // const [loading ,setloading] = useState(false);
  const [tag,settag] =  useState('car');
  // useEffect (()=>{
  //   fectData();
  // },[]);
  // async function fectData(){
  //   setloading(true);
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`
  //   const {data} =  await axios.get(url);
  //   const imagesource = data.data.images.downsized_large.url;
  //   setgif(imagesource);
  //   setloading(false);
  // }
  

  const {gif,loading,fectData} = useGif(tag);

  // function submithandler(tag){
  //   fectData(tag);
  // }
  

  return (
    <div className=" mt-[30px] w-1/2 h-[100%] flex flex-col items-center p-[15px] dldldl border-2 border-black rounded-xl min-h-full bg-blue-400">
      <h2 className="mb-[10px] text-xl font-bold underline ">RANDOM {tag} GIF</h2>
      
      {
        loading ? (<Spinner/>) : (<div className="sss"><img src={gif} alt="rr"/></div>)
      }
      
      <input 
        onChange={(event) => settag(event.target.value)}
        name="search"
        value={tag}
        placeholder="enter the name"
        className="w-4/5 p-[7px] mt-[10px] text-center rounded-lg"
      />
      <button onClick={(tag) => fectData(tag)} className="mt-[12px] w-4/5 bg-green-100 p-[7px] rounded-md">GENERATE</button>
    </div>

      
  )
}
// export default Random;
