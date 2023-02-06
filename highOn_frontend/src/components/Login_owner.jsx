import "./LoginPage.css"

export const Login_OwnerPage=()=>{

    const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");

    const submitHandler = () => {
        axios
          .post("http://localhost:3000/login_user", {
            userid: userid,
            password: password,
          })
          .then(function (response) {
            alert("you logged in as OWNER successfully")
            console.log(response);
          })
          .catch(function (error) {
            alert("invalid login credentials")
            console.log(error);
          });
      }


    return(
        <>
        <h2>OWNER LOGIN</h2>
        <div className="login_type">
        <a href="/login_user"> <h3>USER</h3></a> 
        <a href="/login_owner"><h3>OWNER</h3></a>
        </div>
        <span>userid</span><input type="text" name="userid" onChange={(e)=>setUserid(e.target.value)} />
        <br />
        <span>password</span><input type="password" name="password" onChange={(e)=>setPassword(e.target.value)} />
        <br />
        <input type="submit" name="submit" onSubmit={submitHandler} />
        </>
    )
}

