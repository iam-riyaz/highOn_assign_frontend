import axios from "axios";
import { useState } from "react";
import "./LoginPage.css"
import { useNavigate } from "react-router-dom";

export const Login_OwnerPage=()=>{

    const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");
  const navigate= useNavigate()

    const submitHandler = () => {
        axios
          .post("http://localhost:3000/login_owner", {
            "userid": userid,
            "password": password,
          })
          .then(function (response) {
            alert("you logged in as OWNER successfully")
            console.log(response);
            navigate("/owner_page")
            
          })
          .catch(function (error) {
            alert("invalid login credentials")
            console.log(userid,password)
            console.log(error);
          });

      }


    return(
        <>
        <h2>OWNER LOGIN</h2>
        <div className="login_type">
        <a href="/login_user"> <h4>USER</h4></a> 
        <a href="/login_owner"><h4>OWNER</h4></a>
        </div>
        <span>userid: </span><input type="text" name="userid" onChange={(e)=>setUserid(e.target.value)} />
        <br />
        <span>password: </span><input type="password" name="password" onChange={(e)=>setPassword(e.target.value)} />
        <br />
        <input type="submit" name="submit" onClick={submitHandler} />
        </>
    )
}

