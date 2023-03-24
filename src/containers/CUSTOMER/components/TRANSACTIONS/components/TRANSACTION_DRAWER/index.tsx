import React from "react";
import { MdOutlineClose } from "react-icons/md";
import {RiFlagLine, RiDownloadLine} from 'react-icons/ri'
import { SuccessfulIcon } from "@/assets/icons";
import Image from "next/image";
import { MouseEventHandler } from "react";

const Detail=({title, children}:{title:string, children:React.ReactNode})=>{
    return (
        <div className="flex items-center justify-between py-5 border-b border-dashed border-neutral_200">
            <div className="text-gray_200 font-medium">{title}</div>
            <div className="inline-block text-right">
                {children}
            </div>
        </div>
    )
}

const TransactionDrawer = ({closeDrawer}:{closeDrawer:MouseEventHandler}) =>{
    return (
        <div>
             <div className="flex items-center justify-between">
                <div className="h-9 px-3 gap-2 font-semibold text-2xl text-brand_blue_500">
                    Transaction 
                </div>

                <div onClick={closeDrawer} className="inline-flex justify-center items-center rounded-5px border border-neutral_200 w-9 h-9">
                    <MdOutlineClose size={16} className="text-gray_400"/>
                </div>
            </div>

            {/* meta-data */}
            <div className="mt-9">
                <h5>Meta-data</h5>
                
                <div className="p-[10px] border border-neutral_200 rounded-lg mt-4">
                    <table className="text-text_100 text-xs">
                        <tbody>
                            <tr className="">
                                <td className="py-1">Date</td>
                                <td className="py-1 font-semibold">March 07, 2022</td>
                            </tr>
                            <tr className="">
                                <td className="py-1">Device</td>
                                <td className="py-1 font-semibold">iPhone 13 mini</td>
                            </tr>
                            <tr className="">
                                <td className="py-1 pr-8">Location</td>
                                <td className="py-1 font-semibold">Ikeja, Lagos, Nigeria, view on map.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <hr className="my-8 border-neutral_200"/>

            {/* amount and recipient */}
            <div className="relative">
                <Image src="/card.png" alt="card" width={500} height={100}/>
            </div>

            {/* Transaction details */}
            <div >
                <Detail title="Account">
                    <div>
                        <p className="text-sm font-semibold text-gray_300">Wallet</p>
                        <p className="font-medium text-xs text-gray_200 mt-1">01234555-GTB</p>
                    </div>
                </Detail>
                <Detail title="Transaction reference">
                    <div className="font-semibold text-sm text-gray_300">
                        <p>#018070782671703</p>
                        <p>08917032309</p>
                    </div>
                </Detail>
                <Detail title="Status">
                    <div className="flex items-center justify-end gap-2 text-new_green_700 border border-new_green_600 rounded-full bg-new_green_50 text-sm font-medium py-[6px] px-3">
                        <p>Successful</p>
                        <SuccessfulIcon/>
                    </div>
                </Detail>
                <Detail title="Date">
                    <div>
                        <p className="text-sm font-semibold text-gray_300">29th Nov, 2022</p>
                        <p className="font-medium text-xs text-gray_200 mt-1">12:45pm</p>
                    </div>
                </Detail>
            </div>

            {/* Actions */}
            <div className="grid grid-cols-3 gap-4 mt-8">
                <button className="btn-red rounded-lg flex items-center justify-center gap-2 font-semibold text-xs py-2">
                    <RiFlagLine/>
                    Flag
                </button>
                <button className="btn-neutral rounded-lg flex items-center justify-center gap-2 font-semibold text-xs py-2">
                    <RiDownloadLine/>
                    Image
                </button>
                <button className="btn-black rounded-lg flex items-center justify-center gap-2 font-semibold text-xs py-2">
                    <RiDownloadLine/>
                    PDF
                </button>
            </div>
        </div>
    )
}

export default TransactionDrawer