import logo from "../assets/Logo.svg"
export default function Logo() {
  return (
    <div>
    <div id="logo" className="flex items-center gap-2">
        <img src={logo} alt="logo"></img>
        <h1 className="text-primery">Study <span className="text-secondary">Stack</span></h1>
        </div>
      
    </div>
  )
}
