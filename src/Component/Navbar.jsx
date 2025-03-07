import logo from "../assets/Logo.svg"
import { IoSearch } from "react-icons/io5";
import { HiMiniShoppingBag } from "react-icons/hi2";
export default function Navbar() {
  return (
    <>
        <div id="nav-Container" className="border flex items-center justify-between">
        {/* logo ===========*/}
        <div id="logo" className="flex items-center gap-2">
        <img src={logo} alt="logo"></img>
        <h1 className="text-primery">Study <span className="text-secondary">Stack</span></h1>
        </div>
        {/* Nav Items========= */}
        <div id="nav-Item" className="hidden md:flex">
        <ul className="flex items-center gap-10">
        <li>Home</li>
        <li>Shop</li>
        <li>New Arrivals</li>
        <li>Sale</li>
        <li>Blog</li>
        <li>About Us</li>
        </ul>

        </div>
        {/* Nav Thirdsec=========== */}
        <div>
        <ul className="flex gap-6 md:gap-10 items-center">
        <li>Login</li>
        <li><IoSearch /></li>
        <li><HiMiniShoppingBag /></li>
        
        </ul>
            
        </div>

        </div>
    </>
  )
}
