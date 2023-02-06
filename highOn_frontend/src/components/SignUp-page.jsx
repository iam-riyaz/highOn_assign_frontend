import { useState } from "react"

import { useNavigate } from "react-router-dom"


export const SignUp_page=()=>{
    
    const navigate= useNavigate()
    const [formData, setFromData]= useState([])

    const inputChangeHandler = (event) => {
        const {name, value} = event.target
        setFromData({...formData, [name]: value})
    }

    const onSubmitHandler = (event) => {
        event.preventDefault()
        console.log(formData)
        navigate("/login")
	//Form submission happens here
    }

return(
    <>
    <form action="" onSubmit={onSubmitHandler}>
   <span>Name</span><input type="text" name="name" onChange={(e)=>inputChangeHandler(e)} />
   <br />
   <span>Email</span><input type="email" name="email" onChange={(e)=>inputChangeHandler(e)} />
   <br />
   <span>Username</span><input type="text" name="username" onChange={(e)=>inputChangeHandler(e)} />
   <br />
   <span>Password</span><input type="password" name="password" onChange={(e)=>inputChangeHandler(e)}/>
   <br />
   <input type="submit" name="sumbit" />
   </form>

    </>
)
}