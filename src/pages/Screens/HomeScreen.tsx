import { useState } from "react";
import Head from "../../components/Static/Head"
import {FaClock, FaTimeline} from "react-icons/fa6"
// import { MdOutlineBookmarkAdd } from "react-icons/md"
// import { FaDeleteLeft } from "react-icons/fa6"
import pics from "../../assets/20 Ways Churches can Encourage Prayer_1619798433_600x400.webp"


const HomeScreen = () => {
  // const [journal, setJournal] = useState('')

 

  const Data =[
    {title: "My Biggest Dream", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque explicabo magnam commodi!", time: "9:38am", date: "Nov 4 2024", photo: pics},
    {title: "Frontend Topic", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque explicabo magnam commodi!", time: "9:18am", date: "Nov 4 2024", photo: pics},
    {title: "Make a good choice", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque explicabo magnam commodi!", time: "5:30am", date: "Nov 2 2024", photo: pics},
    {title: "My Biggest Dream", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque explicabo magnam commodi!", time: "10:10pm", date: "Nov 1 2024", photo: pics},
    {title: "My Biggest Dream", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque explicabo magnam commodi!", time: "10:10pm", date: "Nov 1 2024", photo: pics},
    {title: "My Biggest Dream", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque explicabo magnam commodi!", time: "10:10pm", date: "Nov 1 2024", photo: pics},
  ]
  
  return (
    <div className="h-screen bg-teal-50/45">
      <Head name="Dashboard"/>
      <div className="px-[15px] flex">
           
            
   <div className="h-[calc(100vh-60px)] border-r-[3px] border-r-teal-600 w-[250px] overflow-y-scroll">
    {/* Holder */}
    <h1 className="text-2xl font-bold text-gray-900">List of all Journal </h1>
  {Data.map((props, index)=>(
      <div className=" bg-teal-100 border-y-[1px] flex flex-col border-y-slate-400 cursor-pointer mt-[1px]" key={index} >
      <span className="text-pink-500 font-semibold">{props.title}</span>
      <span className="text-[13px]">{props.description}</span>
      <div className="text-[12px] font-bold mt-[5px] flex ">
        <span className="flex items-center mr-[5px]"> <FaClock className="mr-[5px]"/>{props.time}</span>
        <span className="flex items-center "> <FaTimeline className="mr-[5px]"/>{props.date}</span>
      </div>
    </div>
  ))}

   </div>

   {/* Journal View */}
 <div>
 
        {/* <div>
        {selectedJournal && (
        <div>
          <h3>{selectedJournal.title}</h3>
          <p>{selectedJournal.description}</p>
        </div>
)}

        </div> */}
      </div>
      </div>
     
 
    </div>
  )
}

export default HomeScreen
