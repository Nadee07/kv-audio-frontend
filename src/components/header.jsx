import { Link } from "react-router-dom";

export default function Header(){
    return(
        <header className="w-full h-[100px] shadow-xl flex justify-center">
                <Link to="/" className= "text-[20px] font-bold m-1">Home</Link>
                <Link to="/contact" className= "text-[20px] font-bold m-1">Contact</Link>
                    {/*gallery*/}
                <Link to="/gallery" className= "text-[20px] font-bold m-1">Gallery</Link>
                <Link to="/items" className= "text-[20px] font-bold m-1">Items</Link>


        </header>
    )
}