import React from "react";
import CustomersTable2 from "./components/CUSTOMERSTABLE";
import {GoPlus} from "react-icons/go"
import SemiPieChart from "./components/SEMI_PIECHART";
import PieChartCont from "./components/PIECHART";

const CustomersContainer = () =>{
    return (
        <div>
            <div className="flex items-center justify-between">
                <h2 className="font-semibold text-3xl">Customers</h2>
                <button className="btn-neutral text-xs px-3 py-2 rounded-lg flex items-center gap-2 font-semibold">
                    <GoPlus/>
                    Add customer
                </button>
            </div>

            <div className="grid grid-cols-5 gap-3 mt-8">
                <div className="col-span-3 rounded-[12px] border border-neutral_200 divide-y">
                    <div className="flex items-center divide-x divide-neutral_200 p-6">
                        <div className="w-full">
                            <p className="text-sm text-cool_gray_1">Total number of users</p>
                            <p className="font-clash-medium text-4xl mt-12">600k</p>
                        </div>
                        <div className="w-full pl-6">
                            <p className="text-sm text-cool_gray_1">Total active users</p>
                            <p className="font-clash-medium text-4xl mt-12">350k</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 p-6 divide-x divide-neutral_200">
                        <div className="">
                            <SemiPieChart/>
                        </div>
                        <div className="px-6 flex gap-3">
                            <div className="inline-flex w-2 h-2 rounded-full bg-brand_blue_150 mt-1.5"></div>
                            <div className="w-full">
                                <div className="text-sm">Verified users</div>
                                <div className="flex items-center justify-between w-full mt-4">
                                    <div className="font-clash-medium text-2xl inline-block">550k</div>
                                    <div className="inline-block text-xs text-new_green_700">3.5%</div>
                                </div>
                            </div>
                        </div>
                        <div className="px-6 flex gap-3">
                            <div className="inline-flex w-2 h-2 rounded-full bg-brand_blue_150 mt-1.5"></div>
                            <div className="w-full">
                                <div className="text-sm">Unverified users</div>
                                <div className="flex items-center justify-between w-full mt-4">
                                    <div className="font-clash-medium text-2xl inline-block">550k</div>
                                    <div className="inline-block text-xs text-new_green_700">3.5%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-span-2 rounded-[12px] border border-neutral_200 p-6">
                    <PieChartCont/>
                </div>
            </div>

            <CustomersTable2/>
        </div>
    )
}

export default CustomersContainer