import React, {ReactNode, FunctionComponent, useEffect} from "react";
import Sidebar from "./components/SIDEBAR";
import Navbar from "./components/NAVBAR";
import styles from './index.module.css'
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { getToken, getUser } from "@/slices/AUTH/authSlice";


interface props{
    children:ReactNode
}

const DashboardLayout:FunctionComponent<props> = ({children}) =>{
    const router = useRouter()
    const token = useSelector(getToken)
    const user = useSelector(getUser)

    // useEffect(()=>{
    //     if(!token) {
    //         router.replace("/")
    //     }
    // }, [token])

    // if(!token) {
    //     return <div></div>
    // }

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