import React, {MouseEventHandler, FunctionComponent} from "react";
import { useRouter } from "next/router";
import { CalendarOutline, SmartPhone, Envelope, BlackArrowRight } from "@/assets/icons";
import Image from "next/image";
import {RiAndroidLine, RiAppleLine} from 'react-icons/ri'
import {TbDeviceLaptop} from 'react-icons/tb'
import { useAllCustomersQuery } from "@/slices/CUSTOMERS_SLICE/customersApiSlice";
import {dateConverter} from '@/utils'


interface tableProps{
    action:MouseEventHandler
}

const arr = 'android,ios,web,web,ios,ios,android'.split(",")

const TableCustomers:FunctionComponent<tableProps> = ({action}) =>{
    const {data:allCustomers} = useAllCustomersQuery({ count: 5 },{ refetchOnMountOrArgChange: true })
    // console.log(allCustomers)

    let thClass = `px-6 py-4 text-left font-normal text-xs`
    const router = useRouter()

    const tableData=(customer:any) =>{
        const tdClass = `px-6 py-4`

        // let colors = n==='android' ? "bg-purple_5 text-purple_400" : n==="ios" ? "bg-teal_green_50 text-teal_green_500" : "bg-orange_50 text-orange_500"

        // const icons = n==='android' ? <RiAndroidLine/> : n==="ios" ? <RiAppleLine/> : <TbDeviceLaptop/>

        const routeToCustomer = () =>{
            router.push(`/customers/${customer.userId}`)
        }

        return (
            <tr className="border border-collapse border-x-0" onClick={routeToCustomer}>
                <td className={tdClass}>
                    <div className="flex gap-3 items-center">
                        <div className="inline-flex w-10 h-10 rounded-full  items-center justify-center border-2">
                            {customer.firstName.charAt(0)}{customer.lastName.charAt(0)}
                        </div>
                        <div className="text-sm font-normal">
                            <div className="text-[#101828]">{customer.lastName} {customer.firstName}</div>
                            <div className="text-[#475467]">@{customer.username}</div>
                        </div>
                    </div>
                </td>
                <td className={tdClass}>
                    <div className="flex items-center gap-3 text-gray_500">
                        <Envelope/>
                        {customer.email}
                    </div>
                </td>
                <td className={tdClass}>
                    <div className="flex items-center gap-3 text-gray_500">
                        <SmartPhone/>
                        {customer.phoneNumber || 'Not Provided'}
                    </div>
                </td>
                {/* <td className={`${tdClass}`}>
                &#8358; 50,000,000
                </td> */}
                <td className={tdClass}>
                    <div className="flex items-center gap-3 text-gray_500">
                        <CalendarOutline/>
                        {dateConverter(customer.createdAt)}
                    </div>
                </td>
                <td onClick={action} className={tdClass}>
                    <BlackArrowRight/>
                </td>
            </tr>
        )
    }


    return (
        <table className="w-full">
            <thead className="bg-gray_50 text-gray_600">
                <tr>
                    <th className={thClass}>Name</th>
                    <th className={thClass}>Email</th>
                    <th className={thClass}>Phone number</th>
                    {/* <th className={thClass}>Balance</th> */}
                    <th className={thClass}>Date joined</th>
                    <th className={thClass}></th>
                </tr>
            </thead>

            <tbody className="w-full">
                {allCustomers?.allUsers.map((customer:any)=>{
                    return tableData(customer)
                })}
            </tbody>
        </table>
    )
}

export default TableCustomers