import React from 'react'
import {DBHeader , Footer} from "../Components/index"
import { Outlet } from 'react-router-dom'
const AdminDashboardPage = () => {
  return (
    <div>
        <DBHeader/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default AdminDashboardPage