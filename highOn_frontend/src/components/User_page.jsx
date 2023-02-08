import { useEffect, useState } from "react"

export const User_page=()=>{

    const data= localStorage.getItem(("qr_url"))
    const code= localStorage.getItem("code")
    const [qrcode,setQrcode]= useState(JSON.parse(data))
    
    useEffect(()=>{

        console.log(qrcode)

    },[qrcode])

    return(
        <>
        <h2>User dashboard</h2>
        <div>
            <img src={qrcode.data} alt="" />
        </div>
        <div>
            <h3>user Code</h3>
            <h1>{code}</h1>
        </div>
        </>
    )
}