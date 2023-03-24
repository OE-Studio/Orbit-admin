import React, {FunctionComponent, ReactNode} from "react";
import {RiDeleteBin7Line} from 'react-icons/ri'

interface cardType{
    bankName:string,
    icon:ReactNode,
    userName:string,
    userAccount:string | number
}

const Card:FunctionComponent<cardType> = ({bankName, icon, userName, userAccount}) =>{
    return (
        <div className="w-full rounded-lg border border-neutral_200 p-3 text-sm">
            <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2">
                    <div className="w-9 h-9 rounded-full border border-neutral_200 text-gray_400 flex items-center justify-center">
                        {icon}
                    </div>
                    <div className="text-[#64748B]">{bankName}</div>
                </div>
                <div className="inline-flex w-9 h-9 rounded-full items-center justify-center text-gray_400 shadow">
                    <RiDeleteBin7Line/>
                </div>
            </div>

            <div className="mt-6">
                <div className="text-[#64748B] uppercase">{userName}</div>
                <div className="mt-3 text-[#A0ABBB]">{userAccount}</div>
            </div>
        </div>
    )
}

export default Card