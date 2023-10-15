import React, {ReactNode, FunctionComponent, useEffect, useState} from "react";
import Sidebar from "./components/SIDEBAR";
import Navbar from "./components/NAVBAR";
import styles from './index.module.css'
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { getToken, getUser } from "@/slices/AUTH/authSlice";
import Image from "next/image";


interface props{
    children:ReactNode
}

const DashboardLayout:FunctionComponent<props> = ({children}) =>{
    const router = useRouter()
    const token = useSelector(getToken)
    const user = useSelector(getUser)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(()=>{

        window.addEventListener('resize', ()=>{
            console.log("changed")
            if(window.innerWidth < 1024){
                setIsMobile(true)
            }
            else {
                setIsMobile(false)
            }
        });
    },[])

    if(isMobile){
        return <div className="flex items-center justify-center">
            <div className="p-4 text-center">
                <Image src="/mobile.jpg" height={500} width={500} alt="Mobile view image"/>
                <p className="mt-4">This App is disabled on mobile, please login on a PC or Desktop</p>
            </div>
        </div>
    }

    return (
            <div className="flex">
                <Sidebar user={user}/>
                <div className={`${styles.cont} pb-8 px-9 relative`}>
                    <Navbar/>

                    <div className="mt-11">
                        {children}
                    </div>
                </div>
            </div>
    )
}

export default DashboardLayout