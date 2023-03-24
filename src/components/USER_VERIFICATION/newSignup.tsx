import React from "react";
import {MdKeyboardArrowLeft, MdKeyboardArrowRight, MdOutlineClose} from "react-icons/md"
import {RiArrowRightUpLine} from "react-icons/ri"
import Image from "next/image";
import Detail from "@/components/DETAIL";
import { Compare, Eraser, Flag, Thumb } from "@/assets/icons";

const NewSignupDrawer = () =>{
    return (
        <>
            {/* nav */}
            <div className="flex items-center justify-between">
                <div className="border border-neutral_200 rounded-lg h-9 flex items-center divide-x divide-neutral_200">
                    <div className="h-9 w-9 flex items-center justify-center">
                        <MdKeyboardArrowLeft/>
                    </div>

                    <div className="h-9 flex items-center px-3 gap-2 text-sm font-semibold">
                        New Signup 
                        <span className="px-1 bg-gray_100 rounded-full py-0.5 text-xs font-normal text-[#344054]">400</span>
                    </div>

                    <div className="h-9 w-9 flex items-center justify-center">
                        <MdKeyboardArrowRight/>
                    </div>
                </div>

                <div className="inline-flex justify-center items-center rounded-5px border border-neutral_200 w-9 h-9">
                    <MdOutlineClose size={16} className="text-gray_400"/>
                </div>
            </div>

            {/* Custoemr name and image */}
            <div className="flex items-center justify-between mt-9">
                <div className="flex gap-3 items-center">
                    <div className="inline-block">
                        <Image src="/avatar.png" width={40} height={40} alt="avatar" className="block"/>
                    </div>
                    <div className="text-sm font-normal">
                        <div className="text-[#101828]">Last-name First-name</div>
                        <div className="text-[#475467]">@username</div>
                    </div>
                </div>

                <div className="inline-flex justify-center items-center rounded-5px border border-neutral_200 w-9 h-9">
                    <RiArrowRightUpLine/>
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

            {/* Bio-data */}
            <div className="mt-8">
                <h5>Bio-data</h5>

                <div className="grid grid-cols-2 gap-4 mt-4">
                    <Detail width="col-span-1" title="Legal first name" value="Emeka"/>
                    <Detail width="col-span-1" title="Legal last name" value="Emeka"/>
                    <Detail width="col-span-2" title="Username" value="Emeka" verified={true}/>
                    <Detail width="col-span-2" title="Email" value="Emeka" verified={true}/>
                    <Detail width="col-span-2" title="Phone number" value="Emeka" verified={true}/>
                    <Detail width="col-span-2" title="vNIN" value="Emeka" verified={true}/>
                </div>
            </div>

            {/* <div className="border border-neutral_200 rounded border-b-0 mt-4">
                <div className="flex gap-4 p-3">
                    <div className="flex items-center justify-center bg-neutral_100">
                        <Image src="/passport.png" height={100} width={200} alt=""/>
                    </div>
                    <div className="flex items-center justify-center bg-neutral_100">
                        <Image src="/NIN.png" height={100} width={200} alt=""/>
                    </div>
                </div>

                <button className="rounded border border-neutral_200 mt-2 w-full h-9 flex items-center justify-center gap-3 text-sm">
                    <Compare/>
                    Compare field view
                </button>
            </div> */}

            {/* actions */}
            <div className="grid grid-cols-3 gap-4 mt-6 text-xs">
                <button className="btn-red rounded-lg h-9 flex items-center justify-center gap-2">
                    <Eraser/>
                    Deny
                </button>
                <button className="btn-neutral rounded-lg h-9 flex items-center justify-center gap-2">
                    <Flag/>
                    Flag
                </button>
                <button className="btn-black rounded-lg h-9 flex items-center justify-center gap-2">
                    <Thumb/>
                    Approve
                </button>
            </div>
        </>
    )
}

export default NewSignupDrawer