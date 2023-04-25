import {useState,useContext,useEffect} from 'react'
import axios from "axios"
import {useNavigate} from "react-router-dom"
import { Authcontext } from '../component/Usercontext'

const Login = () => {
    const [show, setshow] = useState("show")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const navigate =useNavigate();
    const {setuserauth}=useContext(Authcontext);

    const auth = localStorage.getItem("auth");
    useEffect(()=>{
      if(auth){
        navigate("/")
      }
      else{
        setuserauth(false);
      }
    })

    
    function toggle(e){
        e.preventDefault();
        if(show=="show"){
            setshow("hide")
        }
        else{
            setshow("show")
        }
    }

 async function login(e){
  e.preventDefault();
  const response =await axios.post("http://localhost:8000/login",{
    email,password
  })
  if(response.status ==200){
    localStorage.setItem("auth",response.data.token);
    setuserauth(true);
    navigate("/")
  }
    
}



  return (
    <form>
    <input type="email"
     placeholder="enter your email"
     onChange={e=>setemail(e.target.value)}
      />
    <input type={show==="show"?"password":"text"}
     placeholder="enter your password"
     onChange={e=>setpassword(e.target.value)}
     />

    <span className="toggle-btn" onClick={toggle}>{show}</span>
    <button className="btn" onClick={login}>Login</button>
  </form>
  )
}

export default Login