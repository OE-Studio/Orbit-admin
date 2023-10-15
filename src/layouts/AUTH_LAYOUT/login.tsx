import React, {useState, useEffect} from "react";
import {useLoginMutation} from '@/slices/AUTH/authApiSlice'
import { useDispatch } from "react-redux";
import Input from "@/components/INPUT";
// import { setUserDetails, setToken } from "@/slices/AUTH/authSlice";
import { setUserDetails } from "@/slices/AUTH/authSlice";
import { useRouter } from "next/router";
import { DarkLogo } from "@/assets/icons";
import { Loader } from "@/assets/icons";

export const LoginLayout = () =>{
    const [user, setUser] = useState("daodu.muyiwa@gmail.com")
    const [pwd, setPwd] = useState("password")

    const [login, {isLoading}] = useLoginMutation()

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
        <div className="flex items-center justify-center pt-20 pb-4">
            <div className="w-80 p-4 rounded-lg shadow-md bg-white flex flex-col items-center">
                <DarkLogo/>

                <form className="space-y-4 w-full">
                    <Input
                        label="Email" 
                        required={true} 
                        name="user"
                        className="mt-4"
                        value={user}
                        onChange={(e)=>setUser(e.target.value)}
                    />

                    <Input 
                        label="Password" 
                        required={true} 
                        name="name"
                        className="mt-4 w-40"
                        value={pwd}
                        onChange={(e)=>setPwd(e.target.value)}
                        type="password"
                    />

                    <button className="btn-black rounded-lg h-11 flex items-center justify-center gap-2 w-full mt-6 font-semibold text-base" onClick={loginHandler}>
                        {
                            isLoading ? 
                            <div><Loader/> Submitting</div> : 
                            "Submit"
                        }
                    </button>
                </form>
            </div>
        </div>
    )
}