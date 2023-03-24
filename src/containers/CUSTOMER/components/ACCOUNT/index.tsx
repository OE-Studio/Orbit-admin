import React, {FunctionComponent, ReactNode} from "react";
import WalletBalance from "./components/WALLET_BALANCE";
import Card from "./components/CARD";
import {RiWalletLine, RiBankLine} from 'react-icons/ri'
import {TbPlus} from 'react-icons/tb'
import { MasterCard, VisaCard } from "@/assets/icons";

const Account = () =>{
    const buttonClass="border border-neutral_200 rounded-lg inline-flex items-center justify-center gap-2 font-semibold text-gray_400 w-full h-9 text-xs"
    return (
        <div className="grid grid-cols-3 gap-8">
            {/* left div */}
            <div>
                <div>
                    <WalletBalance/>
                    <div className="flex gap-4 mt-4">
                        <button className={buttonClass}>Fund <RiWalletLine size={16}/></button>
                        <button className={buttonClass}>Withdraw <RiBankLine size={16}/></button>
                    </div>
                </div>

                <div className="mt-8 space-y-4">
                    <p className="text-gray_500 text-sm">App account funding</p>
                    <div className="space-y-4">
                        <Card bankName="Guarantee trust bank" icon={<RiBankLine/>} userName="Money Emeka hassan" userAccount="6109719828"/>

                        <Card bankName="Guarantee trust bank" icon={<RiBankLine/>} userName="Money Emeka hassan" userAccount="6109719828"/>
                    </div>
                </div>
            </div>

            {/* Center div */}
            <div>
                <div className="flex justify-between items-center">
                    <div className="text-gray_500 text-sm">User Bank Details</div>
                    <div className="inline-block">
                        <button className={`${buttonClass} w-auto h-auto px-3 py-2`}>Add Bank <TbPlus size={16}/></button>
                    </div>
                </div>

                <div className="mt-8 space-y-4">
                    <Card bankName="Guarantee trust bank" icon={<RiBankLine/>} userName="Money Emeka hassan" userAccount="6109719828"/>

                    <Card bankName="Guarantee trust bank" icon={<RiBankLine/>} userName="Money Emeka hassan" userAccount="6109719828"/>
                </div>
            </div>

            {/* right div  */}
            <div>
                <div className="flex justify-between items-center">
                    <div className="text-gray_500 text-sm">User Bank Details</div>
                    <div className="inline-block">
                        <button className={`${buttonClass} w-auto h-auto px-3 py-2`}>Add Bank <TbPlus size={16}/></button>
                    </div>
                </div>

                <div className="mt-8 space-y-4">
                    <Card bankName="Guarantee trust bank" icon={<MasterCard/>} userName="Money Emeka hassan" userAccount="6109719828"/>

                    <Card bankName="Guarantee trust bank" icon={<VisaCard/>} userName="Money Emeka hassan" userAccount="6109719828"/>
                </div>
            </div>
        </div>
    )
}

export default Account