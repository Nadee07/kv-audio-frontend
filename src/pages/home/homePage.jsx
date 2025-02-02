import { Route, Routes } from "react-router-dom";
import Header from "../../components/header";
import ErrorNotFound from "./error";
import Home from "./home";
import Items from "./items";
import Gallery from "./gallery";
import Contact from "./contact";

export default function HomePage(){
    return(
        <>
            <Header/>
            <div className="h-[calc(100vh-100px)] w-full"> 
                 <Routes path="/*">
                       <Route path= "/Contact" element={<Contact/>}/>
                       <Route path= "/Gallery" element={<Gallery/>}/>
                       <Route path= "/Items" element={<Items/>}/>
                       <Route path= "/" element={<Home/>}/>
                       <Route path= "/*" element={<ErrorNotFound/>}/>


                 
                 
                 </Routes>


            </div>
       </>
    )
}