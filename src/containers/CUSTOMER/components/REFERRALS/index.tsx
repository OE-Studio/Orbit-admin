import React from "react";
import {RiFileCopyLine} from "react-icons/ri"
import { Loader } from "@/assets/icons";
import { useGetCustomerQuery } from "@/slices/CUSTOMER_SLICE/customerApiSlice";
import { useSearchParams } from "next/navigation";

const Referrals = () =>{
    const searchParams = useSearchParams()
    const userId = searchParams.get('id')

    const {data:customer, isLoading:loadingCustomer} = useGetCustomerQuery(userId)


    return (
        <div className="w-full xl:w-6/12">
            <div className="grid grid-cols-2 gap-6">
                <div className="w-full rounded-lg border border-neutral_200 p-3">
                    <p className="text-sm text-[#475467]">Number of referrals</p>
                    <p className="mt-11 text-2xl font-clash-medium text-gray_500">24</p>
                </div>
                <div className="w-full rounded-lg border border-neutral_200 p-3">
                    <p className="text-sm text-[#475467]">Referral Bonus</p>
                    <p className="mt-11 text-2xl font-clash-medium text-gray_500">&#8358; 300,000.00</p>
                </div>
            </div>

            <div className="relative w-full py-3 px-5 border border-neutral_200 rounded-lg mt-6">
                {loadingCustomer ? <Loader/> : <div className="flex items-center divide-x divide-neutral_200">
                    <div className="block text-new_green_700 text-sm font-medium pr-4">Referral link</div>

                    <div className="inline-flex justify-between items-center pl-4">
                        <div>www.Orbitfinance.com/ref/{customer.referralCode}</div>
                    </div>
                </div> }

                <RiFileCopyLine className="top-1/2 right-5 absolute -translate-y-1/2"/>
            </div>

            <div className="mt-6 rounded-lg border border-b-0 border-neutral_200 overflow-hidden">
                <table className="w-full">
                    <thead>
                        <tr className="text-gray_400 text-sm bg-[#F9FAFB]">
                            <th className="font-medium text-left pl-3 py-5">Username</th>
                            <th className="font-medium text-left py-5">Date joined</th>
                            <th className="font-medium py-5 text-right pr-3">Bonus</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[1,2,3,4,5,6,7].map(num=>{
                            return(
                                <tr key={num} className="text-gray_200 text-sm font-medium border border-collapse border-neutral_200 border-x-0">
                                    <td className="py-4 pl-3">Oluwafeyikemi</td>
                                    <td className="py-4">4th Novemebr, 2022 / 4:40pm </td>
                                    <td className="py-4 text-right pr-3">N 1,000,000.00</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Referrals