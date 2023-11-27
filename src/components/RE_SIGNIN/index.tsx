import { setUserDetails, setSignInPopup } from "@/slices/AUTH/authSlice";
import { useRouter } from "next/router";
import { DarkLogo } from "@/assets/icons";
import { Loader } from "@/assets/icons";
import Input from "../INPUT"
import { useDispatch } from "react-redux";
import React, {useState, useEffect} from "react";
import {useLoginMutation} from '@/slices/AUTH/authApiSlice'
import { apiSlice } from "@/pages/api/apiSlice";


export const ResignIn = ()=>{
    const [user, setUser] = useState("")
    const [pwd, setPwd] = useState("")
    const [error, setError] = useState("")

    const [login, {isLoading}] = useLoginMutation()

    const dispatch = useDispatch()

    const router = useRouter()

    const loginHandler = async(event:React.MouseEvent<HTMLElement>) =>{
        event.preventDefault()
        try{
            let userData = login({email:user, password:pwd}).unwrap()
            let result = await userData
            if(result?.existingAdmin){
                dispatch(setUserDetails(result))
                router.reload()
                dispatch(setSignInPopup(false))
            }
            else throw new Error(result.message)
            
        }
        catch(err:any){
            setError(err.message)
            setTimeout(() => {
                setError("")
            }, 4000);
        }
    }

    return (
        <div className="w-screen h-screen fixed top-0 left-0 flex pt-20 justify-center bg-[#545050] bg-opacity-70 z-40 animate blur-bg backdrop-filter">
            <div>
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

                    {error ? <div className="text-center mt-3 text-red_500 ">{error}</div> : ""}
                </div>
            </div>
        </div>
    )
}