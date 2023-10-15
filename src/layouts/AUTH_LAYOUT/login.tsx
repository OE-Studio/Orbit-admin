import React, {useState, useEffect} from "react";
import {useLoginMutation} from '@/slices/AUTH/authApiSlice'
import { useDispatch } from "react-redux";
// import { setUserDetails, setToken } from "@/slices/AUTH/authSlice";
import { setUserDetails } from "@/slices/AUTH/authSlice";
import { useRouter } from "next/router";

export const LoginLayout = () =>{
    const [user, setUser] = useState("daodu.muyiwa@gmail.com")
    const [pwd, setPwd] = useState("password")

    const [login] = useLoginMutation()

    const dispatch = useDispatch()

    const router = useRouter()

    const loginHandler = async(event:React.MouseEvent<HTMLElement>) =>{
        event.preventDefault()
        try{
            let userData = login({email:user, password:pwd}).unwrap()
            let result = await userData
            dispatch(setUserDetails(result))
            // dispatch(setToken(userData?.loginToken))
            router.replace("/overview")
        }
        catch(err){
            console.log(err)
        }
    }


    return (
        <div>
            <form className="space-y-4">
                <input className="block border border-black" value={user} onChange={(e)=>setUser(e.target.value)} type="text"  />

                <input className="block border border-black" value={pwd} onChange={(e)=>setPwd(e.target.value)} type="text"  />

                <button onClick={loginHandler}>Submit</button>
            </form>
        </div>
    )
}