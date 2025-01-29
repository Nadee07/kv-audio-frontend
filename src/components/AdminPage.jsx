import { BsGraphDown } from "react-icons/bs";
import { FaRegBookmark } from "react-icons/fa";
import { MdOutlineSpeaker } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";

export default function AdminPage(props){
    return(
        < div className="w-screen h-screen flex" >
             <div className="w-[300px] h-screen bg-green-200">
               <button className="w-full h-[40px] text-black text-[20px] font-bold flex justify-center items-center">
                 <BsGraphDown/>
                 Dashboard
               </button >
               <button className="w-full h-[40px] text-black text-[20px] font-bold flex justify-center items-center ">
                 <FaRegBookmark/>
                 Booking
               </button>
               <button className="w-full h-[40px] text-black text-[20px] font-bold flex justify-center items-center ">
                 <MdOutlineSpeaker/>
                Items
               </button>
               <button className="w-full h-[40px] text-black text-[20px] font-bold flex justify-center items-center ">
                 <FaRegUser/>
                 Users
               </button>
       
       
             </div>
             <div className="w-full bg-red-600">
       
       
             </div>
           </div>
    )

} 