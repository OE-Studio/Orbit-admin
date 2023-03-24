import React from "react";
import {FiArrowDown, FiArrowUp} from 'react-icons/fi'

export const InsightCard = ({title, value, percent}:{title:string, value:number, percent:number}) =>{
    return (
        <div className="w-full border border-neutral_200 rounded-lg p-6">
            <p className="text-sm text-[#475467]">{title}</p>

            <div className="flex items-center justify-between w-full mt-8">
                <p className="font-clash-medium text-2xl">&#8358; {value.toLocaleString()}.00</p>
                <div className={`${percent < 0 ? "text-red_500" : "text-new_green_700"} flex gap-1 items-center`}>
                    {percent > 0 ? <FiArrowUp/> : <FiArrowDown/>}
                    <p className="text-xs">{percent} %</p>
                </div>
            </div>
        </div>
    )
}