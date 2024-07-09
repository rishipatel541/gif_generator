
import Random from "./components/Random"
import Tag from "./components/Tag"

export default function App() {
  return(
    <div className="w-full min-h-[100vh] flex flex-col items-center background">
    
      <h1 className="flex flex-col items-center w-10/12 text-2xl font-bold  bg-white m-[15px] p-[10px] border rounded-xl">Random GIF</h1>
    
      <Random/>
      <Tag/>
   </div>

  )
}
