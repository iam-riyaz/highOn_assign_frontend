import { useState } from "react";
import "./LoginPage.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Login_UserPage = () => {
  const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const submitHandler = () => {
    
    axios
      .post("http://localhost:3000/login_user", {
        userid: userid,
        password: password,
      })
      .then(function (response) {
        alert("you logged in as USER successfully")
        console.log(response);
        localStorage.setItem('id', JSON.stringify(response.data))
        navigate("/map_page")
      })
      .catch(function (error) {
        alert("invalid login credentials")
        console.log(error);
      });
  };
  return (
    <>
      <h2>USER LOGIN</h2>
      <div className="login_type">
        <a href="/login_user">
          {" "}
          <h4>USER</h4>
        </a>
        <a href="/login_owner">
          <h4>OWNER</h4>
        </a>
      </div>
      <span>userid: </span>
      <input
        type="text"
        name="username"
        onChange={(e) => setUserid(e.target.value)}
      />
      <br />
      <span>password: </span>
      <input
        type="password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <input type="submit" name="submit" onClick={submitHandler} />
    </>
  );
};
