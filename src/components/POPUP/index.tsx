import React from "react";

export const Popup = ({visible, children}:{visible:boolean, children:React.ReactNode}) =>{
    if(!visible) return null

    return <div className="fixed top-0 left-0 w-screen min-h-screen flex items-center justify-center bg-[#001428] bg-opacity-30">
        {children}
    </div>
}