import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from "./components/About/About"; 
import Contact from "./components/Contact/Contact.jsx";

import User from "./components/User/User.jsx";
import Github from './components/Github/Github.jsx';

import Home from './components/Home/Home'
import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider, Routes } from 'react-router-dom'
import Layout from './layout.jsx'
// const router=createBrowserRouter([
//     {
//         path:'/',
//         element:<Layout />,
//         children :[
//             {
//                 path :"",
//                 element:<Home />

//             },
//             {
//                 path :"about",
//                 element:<About />
//             },
//             {
//                 path: "Contact",
//                 element:<Contact />
//             },
           

//         ]
//     }
// ])
const router=createBrowserRouter(
    createRoutesFromElements(
       <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='user/:userid' element={<User/>}/>
        <Route path='github' element={<Github/>}/>



       </Route>
    )
)
ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
    <RouterProvider  router={router}/>
</React.StrictMode>
  
)
