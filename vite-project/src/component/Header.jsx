import "./Header.css"
import { useContext } from "react";
import { Link } from "react-router-dom"
import { Authcontext } from "./Usercontext";
const Header = () => {


  let auth =localStorage.getItem("auth");
  const {userauth,setuserauth} =useContext(Authcontext);
  if(auth){
    setuserauth(true);
  }
  
  return (
    <div>
        <nav>
            <ul className='header-ul'>
                <li><Link to={"/"}>Home</Link></li>
                {
                  auth && userauth ? <div className='rl'>
                  <li><Link to={"/profile"}>Profile</Link></li>
                  <li><Link to={"/logout"}>logout</Link></li>
                  </div>: <div className='rl'>
                <li><Link to={"/register"}>Register</Link></li>
                <li><Link to={"/login"}>login</Link></li>
                </div>
                }
               
            </ul>
        </nav>
    </div>
  )
}

export default Header