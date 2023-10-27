import React, {ReactNode, FunctionComponent, useEffect, useState, createContext} from "react";
import Sidebar from "./components/SIDEBAR";
import Navbar from "./components/NAVBAR";
import styles from './index.module.css'
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { getToken, getUser, getShowSignInPopup } from "@/slices/AUTH/authSlice";
import Image from "next/image";
import Notification from "@/components/NOTIFICATION"
import {ResignIn} from "@/components/RE_SIGNIN"


interface props{
    children:ReactNode
}

interface notificationInterface{
    showNotification:boolean,
    title:string,
    text:string,
    status:string
}

export const NotificationContext = createContext({
    toggleNotification({}:notificationInterface){}
})

const DashboardLayout:FunctionComponent<props> = ({children}) =>{
    const router = useRouter()
    const token = useSelector(getToken)
    const user = useSelector(getUser)
    const resign = useSelector(getShowSignInPopup)
    const [isMobile, setIsMobile] = useState(false)

    const [notification, setNotification] = useState({
        showNotification:false,
        title:"",
        text:"",
        status:""
    })

    const toggleNotification=(details:notificationInterface)=>{
        setNotification(details)
        setTimeout(()=>{
            setNotification({
                showNotification:false,
                title:"",
                text:"",
                status:""
            })
        }, 3000)
    }

    useEffect(()=>{
        window.addEventListener('resize', ()=>{
            // console.log("changed")
            if(window.innerWidth < 1024){
                setIsMobile(true)
            }
            else {
                setIsMobile(false)
            }
        });
    },[])

    useEffect(()=>{
        console.log(resign)
    }, [resign])

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
                <div className="flex relative">
                    <NotificationContext.Provider value={{toggleNotification}}>
                        <Sidebar user={user}/>
                        <div className={`${styles.cont} pb-8 px-9 relative`}>
                            <Navbar/>

                            <div className="mt-11">
                                {children}
                            </div>
                        </div>
                    </NotificationContext.Provider>

                    {resign && <ResignIn/>}
                </div>

                {notification.showNotification && <Notification title={notification.title} text={notification.text} status={notification.status}/>}
            </div>
    )
}

export default DashboardLayout