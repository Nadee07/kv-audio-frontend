import { Link } from "react-router-dom";

export default function Header(){
    return(
        <header className="w-full h-[100px] shadow-xl flex justify-center items-center relative">
            <img src="/logo.png" alt="logo" className="w-[100px] h-[100px] object-cover border-[3px] absolute left-1 rounded-full "/>
                <Link to="/" className= "text-[20px] font-bold m-1">Home</Link>
                <Link to="/Contact" className= "text-[20px] font-bold m-1">Contact</Link>
                    {/*gallery*/}
                <Link to="/Gallery" className= "text-[20px] font-bold m-1">Gallery</Link>
                <Link to="/Items" className= "text-[20px] font-bold m-1">Items</Link>


        </header>

    )
}