import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthContext } from "../context";
import Error404 from "../Error 404/Error404";
import MainPage from "../MainPage/mainPage";
import Login from "../NavbarPage/Login";

import { publicRoutes,privateRoutes } from "../Router/route";

function RouterApp(){
  const isLogin = false;
  const {isAuth,setisAuth} = useContext(AuthContext);


    return(
      isAuth
      ?
      <Routes>
      {privateRoutes.map(routee =>(
        <Route
        path={routee.path}
        element={routee.element}
        />
        ))}
        <Route path="*" element={<MainPage to = "main"/>} />
      </Routes>
      :
        <Routes>
        {publicRoutes.map(routee =>(
          <Route
          path={routee.path}
          element={routee.element}
          />
          ))}
        <Route path="*" element={<Login to="login" replace/>} />
      </Routes>
    )
}export default RouterApp;