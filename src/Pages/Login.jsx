import Logo from "../Component/logo"
import { FaEye,FaEyeSlash } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
function handelLoginForm(e){
    e.preventDefault();
    console.log(e.target)
   const formdata= new FormData(e.target)
   console.log(formdata)
   const jsonObject = {};
   formdata.forEach((value, key) => {
     jsonObject[key] = value;
   });

   console.log('Form Data as JSON:', jsonObject);
  

}
export default function Login() {
  return (
    <div className="border grid grid-cols-2 m-20 p-10 w-1/2">
    {/*left side====================================   */}
    <div className="login-leftside flex flex-col gap-5 items-start border">
     <Logo></Logo>
     <div className='flex flex-col gap-2'>
     <h2 className="text-2xl">Login into Your Account</h2>
     <p className="text-xs">Welcom Back! Select method to log in:</p>
     </div>
    <form className="flex flex-col items-start gap-2 " onSubmit={handelLoginForm}>
    <label htmlFor="Email">Email</label>
    <input type="text" name="email" placeholder="abc@gmail.com" id="email" required className="w-full p-2"></input><span><MdCancel /></span>
    <label htmlFor="Password">Password</label>
    <input type="password" name="password" placeholder="password" id="pass" required></input><span><FaEye /><FaEyeSlash /></span> 
    <label htmlFor="checkbox"></label>
    <input type="checkbox" name="agree" required></input><span>Remember me</span>
    <button type="submit">Login Now</button>
    </form>
</div>
    {/* right side======================================  */}
    <div>

    </div>
      
    </div>
  )
}
