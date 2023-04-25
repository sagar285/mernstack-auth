import { useEffect, useState } from "react";
import axios from "axios";
const Profile = () => {
const [name, setname] = useState("")
const [email, setemail] = useState("")
  let auth = localStorage.getItem("auth");

  async function profiles() {
    const response = await axios.get("http://localhost:8000/profile",
     {
      headers: {
        Authorization: auth,
      },
    });
if(response.status==200){
    setname(response.data.name)
   setemail(response.data.email)
}
else{
    alert("user auth failsed");
}
  }

  useEffect(() => {
    profiles();
  }, []);

  return <div>
    <h1>{name}</h1>
    <h2>{email}</h2>
  </div>;
};

export default Profile;
