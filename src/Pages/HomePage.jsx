import React from 'react'
import {User_Footer, Header} from "../Components/index"
import { Outlet } from 'react-router-dom'
const HomePage = () => {
  return (
     <>
       <Header/>
       <Outlet/>
       <User_Footer/>
     </>
  )
}

export default HomePage