import React from "react";
import {RiGroupLine, RiWalletLine, RiArrowRightUpLine} from 'react-icons/ri'
import Link from "next/link";

const Statistics1 = () =>{
    return (
        <div className="flex border border-neutral_200 rounded-[12px] divide-x py-6 w-full justify-between">

            <Link href="/customers" className="px-6 w-full">
                <div className="flex items-center justify-between">
                    <div className="flex gap-3 text-gray_400 items-center text-sm">
                        <RiGroupLine className="text-lg"/>
                        Total Users
                    </div>

                    <div className="w-6 h-6 rounded-5px border border-neutral_200 flex items-center justify-center">
                        <RiArrowRightUpLine className="text-gray_400 text-xs"/>
                    </div>
                </div>
                <div className="font-clash-medium text-4xl mt-6 text-gray_500">300k</div>
            </Link>

            <Link href="/customers" className="px-6 w-full">
                <div className="flex items-center justify-between">
                    <div className="flex gap-3 text-gray_400 items-center text-sm">
                        <RiGroupLine className="text-lg"/>
                        Total Active Users
                    </div>

                    <div className="w-6 h-6 rounded-5px border border-neutral_200 flex items-center justify-center">
                        <RiArrowRightUpLine className="text-gray_400 text-xs"/>
                    </div>
                </div>
                <div className="font-clash-medium text-4xl mt-6 text-gray_500">300k</div>
            </Link>

            <Link href="/customers" className="px-6 w-full">
                <div className="flex items-center justify-between">
                    <div className="flex gap-3 text-gray_400 items-center text-sm">
                        <RiWalletLine className="text-lg"/>
                        Wallet Balance
                    </div>

                    <div className="w-6 h-6 rounded-5px border border-neutral_200 flex items-center justify-center">
                        <RiArrowRightUpLine className="text-gray_400 text-xs"/>
                    </div>
                </div>
                <div className="font-clash-medium text-4xl mt-6 text-gray_500">&#8358;30m</div>
            </Link>

        </div>
    )
}

export default Statistics1