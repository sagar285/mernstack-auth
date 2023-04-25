import "./Register.css";
import { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [show, setshow] = useState("show")
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const navigate =useNavigate();

    function toggle(e){
        e.preventDefault();
        if(show=="show"){
            setshow("hide")
        }
        else{
            setshow("show")
        }
    }

async function register(e){
     e.preventDefault();
     const response = await axios.post("http://localhost:8000/register",{
        name:name,email:email,password:password
     })
     if(response.status===200){
        navigate("/")
     }
     else{
        alert("registration failed");
     }
}




  return (
    <form>
      <input type="text"
      placeholder="enter your name"
      onChange={e=>setname(e.target.value)}
       />

      <input type="email"
       placeholder="enter your email"
       onChange={e=>setemail(e.target.value)}
        />
      <input type={show==="show"?"password":"text"}
       placeholder="enter your password"
       onChange={e=>setpassword(e.target.value)}
       />

      <span className="toggle-btn" onClick={toggle}>{show}</span>
      <button className="btn" onClick={register}>Register</button>
    </form>
  );
};

export default Register;
