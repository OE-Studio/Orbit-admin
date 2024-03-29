import React, {useState, useEffect, useContext} from "react";
import {useLoginMutation} from '@/slices/AUTH/authApiSlice'
import { useDispatch } from "react-redux";
import Input from "@/components/INPUT";
// import { setUserDetails, setToken } from "@/slices/AUTH/authSlice";
import { setUserDetails } from "@/slices/AUTH/authSlice";
import { useRouter } from "next/router";
import { DarkLogo } from "@/assets/icons";
import { Loader } from "@/assets/icons";

export const LoginLayout = () =>{
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

            console.log(result)
            if(result?.existingAdmin){
                dispatch(setUserDetails(result))
                router.replace("/overview")
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

                {error ? <div className="text-center mt-3 text-red_500 ">{error}</div> : ""}
            </div>
        </div>
    )
}