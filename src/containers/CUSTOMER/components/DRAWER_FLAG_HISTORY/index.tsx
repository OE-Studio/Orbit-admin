import React from "react";
import { MdOutlineClose } from "react-icons/md";
import { MouseEventHandler } from "react";
import { RiCheckFill } from "react-icons/ri";

export const FlagHistory = ({close}:{close:MouseEventHandler})=>{
    return(
        <div>
            <div className="flex items-center justify-between">
                <div className="h-9 gap-2 font-semibold text-2xl text-brand_blue_500">
                    Flagged History 
                </div>

                <div onClick={close} className="inline-flex justify-center items-center rounded-5px border border-neutral_200 w-9 h-9">
                    <MdOutlineClose size={16} className="text-gray_400"/>
                </div>
            </div>

            <div className="mt-8 space-y-6">
                {Array(5).fill("").map(n=>{
                    return (
                        <div className="">
                            <div className="flex items-center justify-between gap-2 text-xs">
                                <p>19/03/2023</p>
                                <p>Active</p>
                            </div>

                            <textarea rows={5} className="w-full border border-neutral_200 rounded mt-2 p-[10px] text-xs outline-none bg-[#D9E2E6] bg-opacity-20" placeholder="Type reason..."/>

                            <div className="flex items-center justify-between">
                                <div className="mt-2 flex items-center gap-2">
                                    <div className="w-6 h-6 bg-teal_green_50 text-teal_green_500 relative text-[10px] rounded-full flex items-center justify-center font-medium">
                                        AN

                                        <div className="absolute border border-white bg-[#12B76A] h-2 w-2 rounded-full bottom-0 right-0"></div>
                                    </div>

                                    <div className="text-xs font-medium">Admin Name</div>
                                </div>

                                <button onClick={close} className="btn-neutral rounded-lg h-9 flex items-center justify-center gap-2 px-3 text-xs font-semibold">
                                    Resolve
                                    <RiCheckFill size={16}/>
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}