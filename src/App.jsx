import './App.css'
import Navbar from './Component/Navbar'
import Login from './Pages/Login'
import Home from './Pages/Home'
import Footer from './Pages/Footer'
import { Outlet } from 'react-router-dom'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
const PageWrapper=()=>{
  return(<>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
  </>)

}

const router= createBrowserRouter([
  {
    path:"/",
    element:<PageWrapper></PageWrapper>,
    children:[
      {
      path:"/",
      element:<Home></Home>}
      ,
      {
        path:"/login",
        element:<Login></Login>}
        ,
  ]
  },


]);
function App() {
return (
  <RouterProvider router={router}></RouterProvider>
  )
}

export default App
