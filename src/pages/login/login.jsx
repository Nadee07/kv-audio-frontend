import React from 'react';
import { useState } from 'react';
import "./login.css"



export default function LoginPage() {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");

   

    function handleOnSubmit(e){
        e.preventDefault()
        console.log(email , password)
    }


    return(
        <div className=" bg-picture w-full h-screen flex justify-center items-center">
        <form onSubmit={handleOnSubmit()}>

        
            <div className="w-[400px] h-[400px] backdrop-blur-xl rounded-l-2xl flex justify-center items-center flex-col relative">

                <img src="/logo.png" alt="logo"className="w-[100px] h-[100px] absolute top-1 object-cover"/>

                <input type="email"
                 placeholder="Email" 
                 className="w-[300px] h-[50px] bg-white rounded-lg mt-10 pl-5" 
                 value={email} 
                 onChange={(e)=>setEmail(e.target.value)}/>
                
              
                 

                <input type="password"
                 placeholder="Password" 
                 className="w-[300px] h-[50px] bg-white rounded-lg mt-5 pl-5" 
                 value={password} 
                 onChange={(e)=>setPassword(e.target.value)}/>

                

                 <button className="my-8 w-[300px] h-[50px] bg-[#efac38] rounded-lg mt-5 text-white font-bold
                  hover:bg-[#efac38] transition duration-200"onClick={login}>Login</button>
            </div>
            </form>
        </div>
    )
}

