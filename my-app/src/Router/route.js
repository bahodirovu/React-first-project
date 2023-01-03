import MainPage from "../MainPage/mainPage"
import Game from "../NavbarPage/Game"
import Login from "../NavbarPage/Login"

export  const privateRoutes = [
{path:"main",element:<MainPage/>},
{path:"game",element:<Game/>}
]
export  const publicRoutes = [
{path:"login",element:<Login/>},
]
