import React from "react";
import { PhoneLinkRing, RouterIcon, PurpleBank } from "@/assets/icons";
import {MdBolt} from 'react-icons/md'
import {RiArrowRightSLine} from 'react-icons/ri'
import { array } from "prop-types";
import { useDispatch } from "react-redux";
import { toggleTransactionDetails } from "@/slices/CUSTOMER_SLICE";

const transactionsArr = [
    {
        date:"25/04/23",
        data:[
            {type:"airtime", recipient:"Airtime purchase"},
            {type:"data", recipient:"Data purchase"},
            {type:"electricity", recipient:"IBDEC Prepaid"},
            {type:"bill", recipient:"DSTV"},
            {type:"transfer", recipient:"Daodu Muyiwa"},
            {type:"funding", recipient:"Wallet funding"},
        ]
    },
    {
        date:"25/04/23",
        data:[
            {type:"airtime", recipient:"Airtime purchase"},
            {type:"data", recipient:"Data purchase"},
            {type:"electricity", recipient:"IBDEC Prepaid"},
            {type:"bill", recipient:"DSTV"},
            {type:"transfer", recipient:"Daodu Muyiwa"},
            {type:"funding", recipient:"Wallet funding"},
        ]
    }
]

const IconComponent = ({type, customerName}:{type:string, customerName?:string}) =>{
    let colour
    let Icon

    const Initials = ()=>{
        return <div className="font-medium inline-block">LP</div>
    }

    switch(type){
        case "airtime":
            colour="text-teal_green_500 bg-teal_green_50"
            Icon=<PhoneLinkRing color="#45B6A8"/>
            break;
        case "data":
            colour="text-green_500 bg-green_50"
            Icon=<PhoneLinkRing color="#73B051"/>
            break;
        case "electricity":
            colour="text-blue_500 bg-blue_50"
            Icon=<MdBolt size={20}/>
            break;
        case "bill":
            colour="text-orange_500 bg-orange_50"
            Icon=<RouterIcon/>
            break;
        case "transfer":
            colour="text-teal_green_500 bg-teal_green_50"
            Icon=<Initials/>
            break;
        case "funding":
            colour="text-purple_300 bg-purple_25"
            Icon=<PurpleBank/>
            break;
    }
    
    return (
        <div className={`w-11 h-11 rounded-full flex items-center justify-center ${colour} text-base`}>
            {Icon}
        </div>
    )
}

const TableData = (data:{type:string, recipient?:string})=>{
    const dispatch = useDispatch()
    const toggleDetails = () =>dispatch(toggleTransactionDetails(null))
    return (
        <tr onClick={toggleDetails} className="w-full border border-collapse border-neutral_200 border-x-0">
            <td className="py-4">
                <div className="flex gap-2 items-center font-medium text-[15px] text-gray_400">
                    <IconComponent type={data.type}/>
                    {data.recipient}
                </div>
            </td>
            <td className="text-[15px]">MTN 1.0GB N239.0 DATA topup topup with 08039343682</td>
            <td className="text-[15px] text-gray_300">₦7,150.00</td>
            <td>
                <RiArrowRightSLine/>
            </td>
        </tr>
    )
}

const Table = (data:{date:string, data:{type:string, recipient:string}[]}) =>{
    return (
        <div>
            <div className="pt-6 pb-4 text-sm text-neutral_300">{data.date}</div>

            <div className="w-full">
                <table className="w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.data.map(a=>{
                            return TableData(a)
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

const TransactionTable = () =>{
    return (
        <>
            {transactionsArr.map(a=>{
                return Table(a)
            })}
        </>
    )
}

export default TransactionTable