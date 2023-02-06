import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const SignUp_page = () => {
  const navigate = useNavigate();
  const [formData, setFromData] = useState([]);

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setFromData({ ...formData, [name]: value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formData);

    const length = Object.keys(formData).length;

    if (length == 4) {
      axios
        .post("http://localhost:3000/signup", formData)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });

      navigate("/login_user");
      //Form submission happens here
    } else {
      alert("please fill all  fields");
    }
  };

  return (
    <>
      <h2>SIGN UP</h2>
      <form action="" onSubmit={onSubmitHandler}>
        <span>Name</span>
        <input
          type="text"
          name="name"
          onChange={(e) => inputChangeHandler(e)}
        />
        <br />
        <span>Email</span>
        <input
          type="email"
          name="email"
          onChange={(e) => inputChangeHandler(e)}
        />
        <br />
        <span>Username</span>
        <input
          type="text"
          name="username"
          onChange={(e) => inputChangeHandler(e)}
        />
        <br />
        <span>Password</span>
        <input
          type="password"
          name="password"
          onChange={(e) => inputChangeHandler(e)}
        />
        <br />
        <input type="submit" name="sumbit" />
      </form>
    </>
  );
};
