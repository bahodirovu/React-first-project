import React, { useEffect, useState } from "react";
import "../src/style/style.css";
import { BrowserRouter, Router} from "react-router-dom";
import Navbar from "./components/Navbar";
import RouterApp from "./components/RouterApp";
import { AuthContext } from "./context";

export default function App() {
  const [isAuth, setisAuth] = useState(false)
  useEffect(()=>{
    if(localStorage.getItem("auth")){
      setisAuth(true)
    }
  },[])
  return (
    <AuthContext.Provider value={{isAuth,setisAuth}}>
      <BrowserRouter>     
      <Navbar/> 
      <RouterApp/>
    </BrowserRouter>  
    </AuthContext.Provider>
    
    );
}
