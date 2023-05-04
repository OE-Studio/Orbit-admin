import React from "react";
import {RiDownloadLine} from "react-icons/ri"
import FinanceLineChart from "./components/LINE_CHART";
import FinancePieChart from "./components/PIE_CHART";

export const Finance = () =>{
    return (
        <div>
            <div className="flex items-center justify-between">
                <div className="font-semibold text-3xl">Finance</div>
                <button className="btn-neutral py-2 px-3 rounded-lg text-xs font-semibold flex items-center gap-2">
                    Download data
                    <RiDownloadLine size={16}/>
                </button>
            </div>

            <div className="grid grid-cols-3 mt-10 gap-4">
                <div className="col-span-2">
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

                    <div>
                        <FinanceLineChart/>
                    </div>
                    
                </div>

                <div className="col-span-1 border border-neutral_200 rounded-[12px] p-6">
                    <FinancePieChart/>
                </div>
            </div>
        </div>
    )
}