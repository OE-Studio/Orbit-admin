import React, {FunctionComponent} from "react";
import { HomeOutline, ArrowRight } from "@/assets/icons";
import styles from './index.module.css'



const Navbar:FunctionComponent= () =>{
    const colors = "new_green_700,new_green_700,new_green_700".split(",")

    
    return (
        <nav className="flex items-center w-full justify-between pt-8">
            <div className="flex items-center gap-3">
                <HomeOutline/>
                <ArrowRight/>
                <p className="py-1 px-2">Home</p>
                <ArrowRight/>
                <p className="py-1 px-2">Overview</p>
            </div>

            <div className="flex items-center divide-x divide-neutral_200">
                <div className="flex items-center gap-3 pr-6">
                    {colors.map(c=>{
                        return (
                            <div key={c} className={`w-8 h-8 rounded-full flex items-center justify-center text-${c} bg-red-50`}>
                                OR
                            </div>
                        )
                    })}
                </div>

                <div className="pl-6">
                    {/* <label className={`${styles.label} block h-11 relative`}> */}
                        <input className="w-80 border border-neutral_200 h-11 rounded-lg pl-3" placeholder="Search"/>
                    {/* </label> */}
                </div>
            </div>
        </nav>
    )
}

export default Navbar