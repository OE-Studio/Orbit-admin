import React, {ReactNode, FunctionComponent} from "react";
import Sidebar from "./components/SIDEBAR";
import Navbar from "./components/NAVBAR";
import styles from './index.module.css'

interface props{
    children:ReactNode
}

const DashboardLayout:FunctionComponent<props> = ({children}) =>{
    return (
        <div>
            <div className="flex">
                <Sidebar/>
                <div className={`${styles.cont} py-8 px-9 relative`}>
                    <Navbar/>

                    <div className="mt-11">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout