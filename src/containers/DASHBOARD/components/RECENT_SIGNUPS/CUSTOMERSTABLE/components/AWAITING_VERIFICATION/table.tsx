import React, {MouseEventHandler, FunctionComponent, useEffect} from "react";
import { CalendarOutline, SmartPhone, Envelope, BlackArrowRight } from "@/assets/icons";
import Image from "next/image";
import {RiAndroidLine, RiAppleLine} from 'react-icons/ri'
import {TbDeviceLaptop} from 'react-icons/tb'
import { useGetRequestsQuery } from "@/slices/VERIFICATON/verificationApiSlice";

interface tableProps{
    action:MouseEventHandler
}

interface user {
    firstName:string,
    lastName:string,
    utilityDoc:string,
    selfieId:string,
    userId:string,
    username:string,
    email:string,
    nin:string
}

const arr = 'android,ios,web,web,ios,ios,android'.split(",")

const AwaitVerification:FunctionComponent<tableProps> = ({action}:any) =>{
    const {data:requests, isLoading, isError, error} = useGetRequestsQuery({ count: 5 },
        { refetchOnMountOrArgChange: true })

    console.log(requests)

    let thClass = `px-6 py-4 text-left font-normal text-xs`


    const tableData=(n:user) =>{
        const tdClass = `px-6 py-4`

        // let colors = n==='android' ? "bg-purple_5 text-purple_400" : n==="ios" ? "bg-teal_green_50 text-teal_green_500" : "bg-orange_50 text-orange_500"

        // const icons = n==='android' ? <RiAndroidLine/> : n==="ios" ? <RiAppleLine/> : <TbDeviceLaptop/>

        return (
            <tr className="border border-collapse border-x-0">
                <td className={tdClass}>
                    <div className="flex items-center gap-3 text-gray_500">
                        <CalendarOutline/>
                        29/062023
                    </div>
                </td>
                <td className={tdClass}>
                    <div className="flex gap-3 items-center">
                        <div className="inline-block">
                            <Image src="/avatar.png" width={40} height={40} alt="avatar" className="block"/>
                        </div>
                        <div className="text-sm font-normal">
                            <div className="text-[#101828]">{n.firstName} {n.lastName}</div>
                            <div className="text-[#475467]">@{n.username}</div>
                        </div>
                    </div>
                </td>
                {/* <td className={`${tdClass}`}>
                    <div className={`inline-flex ${colors} py-[6px] pl-2 pr-3 rounded-full text-xs items-center gap-[6px] capitalize`}>
                        {icons}
                        {n}
                    </div>
                </td> */}
                <td className={tdClass}>
                    <div className="flex items-center gap-3 text-gray_500">
                        <Envelope/>
                        {n.email}
                    </div>
                </td>
                <td className={tdClass}>
                    <div className="flex items-center gap-3 text-gray_500">
                        <SmartPhone/>
                        0000000000
                    </div>
                </td>
                <td onClick={()=>action(n)} className={tdClass}>
                    <BlackArrowRight/>
                </td>
            </tr>
        )
    }

    if(isLoading){
        return <p>Loading</p>
    }

    return (
        <table className="w-full">
            <thead className="bg-gray_50 text-gray_600">
                <tr>
                    <th className={thClass}>Date</th>
                    <th className={thClass}>Name</th>
                    <th className={thClass}>Platform</th>
                    <th className={thClass}>Email</th>
                    <th className={thClass}>Phone number</th>
                    <th className={thClass}></th>
                </tr>
            </thead>

            <tbody className="w-full">
                {requests?.allKYC.map((n:user)=>{
                    return tableData(n)
                })}
            </tbody>
        </table>
    )
}

export default AwaitVerification