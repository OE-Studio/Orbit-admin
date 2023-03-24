import React, {FunctionComponent, ReactNode} from "react";
import {RiDeleteBin7Line} from 'react-icons/ri'

interface cardType{
    bankName:string,
    icon:ReactNode,
    userName:string,
    userAccount:string | number
}

const WalletBalance:FunctionComponent = () =>{
    return (
        <div className="w-full rounded-lg border border-neutral_200 p-3 text-sm">
            
            <div className="text-[#64748B]">Wallet Balance</div>

            <div className="mt-10">
                <div className="text-gray_500 uppercase font-clash-medium text-2xl">
                    #3,000,000
                </div>
                <div className="text-neutral_300 text-xs font-normal">Last funded on 12pm, 1st Mar 2023</div>
            </div>
        </div>
    )
}

export default WalletBalance