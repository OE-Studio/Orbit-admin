import React, {useState, useEffect} from "react";
import { RiMore2Fill, RiLockLine, RiFlagLine, RiDeleteBin5Line } from "react-icons/ri";
import { toggleFlagDrawer, toggleSuspendDrawer } from "@/slices/CUSTOMER_SLICE";
import {  useDispatch } from "react-redux";

export const Actions = () =>{
    const itemClass = `border border-neutral_200 w-full flex items-center justify-between text-gray_400 px-3 py-2 rounded-lg text-xs font-semibold cursor-pointer`

    const dispatch = useDispatch()

    const [showOptions, setShowOptions] = useState(false)

    const toggleOptions = () =>{
        setShowOptions(!showOptions)
    }

    useEffect(()=>{
        if(typeof window !== "undefined"){
            let options = document.querySelector('.actionoptions')
            window.addEventListener('click', (e:MouseEvent)=>{
                let target= e.target as HTMLElement
                if(!options?.contains(target)){
                    setShowOptions(false)
                }
            })
        }
    }, [])

    const flagUser = () =>{
        dispatch(toggleFlagDrawer())
        setShowOptions(false)
    }

    const suspendUser = () =>{
        dispatch(toggleSuspendDrawer())
        setShowOptions(false)
    }

    return (
        <div onClick={toggleOptions} className="w-9 h-9 rounded-lg flex items-center justify-center border border-neutral_200 relative actionoptions">
            <RiMore2Fill/>

            {showOptions && <div className="absolute top-full mt-4 right-0 w-60 p-2 rounded-[12px] border border-neutral_200 bg-white space-y-2 shadow">
                <div onClick={suspendUser} className={`${itemClass}`}>
                    Suspend Account
                    <RiLockLine size={16}/>
                </div>
                <div onClick={flagUser} className={`${itemClass}`}>
                    Flag User
                    <RiFlagLine size={16}/>
                </div>
                <div className={`${itemClass} text-red_400 border-red_200 bg-red_50`}>
                    Disable Account
                    <RiDeleteBin5Line size={16}/>
                </div>
            </div>}
        </div>
    )
}