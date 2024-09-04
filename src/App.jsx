import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import {HomePage , AdminPage , AdminDashboardPage} from "./Pages/pages"
import {Login , DashHero , Winner , Add_candidate , Add_voter} from "./Components/index"
const routes = createBrowserRouter(createRoutesFromElements(<>
  <Route path='/' element={<HomePage/>}>
       <Route index element={<h1>Home</h1>}/>
       <Route path='about' element={<h1>About</h1>}/>
       <Route path='contact' element={<h1>Contact</h1>}/>
       <Route path='login' element={<Login/>}/>
    </Route>
    <Route path='admin_login' element={<AdminPage/>}>

    </Route>
    <Route path='dashboard' element={<AdminDashboardPage/>}>
        <Route  index element={<DashHero/>}/>
        <Route path='winner' element={<Winner/>}/>
        <Route path='add_candidate' element={<Add_candidate/>}/>
        <Route path='add_voter' element={<Add_voter/>}/>
    </Route> 
</>))
const App = () => {
  return (
    <RouterProvider router={routes}/>
  )
}

export default App