import React from "react";
import { MdOutlineClose } from "react-icons/md";
import { Pencil } from "@/assets/icons";
import { MouseEventHandler } from "react";
import { RiFlagLine } from "react-icons/ri";

export const FlagUser = ({close}:{close:MouseEventHandler})=>{
    return(
        <div>
            <div className="flex items-center justify-between">
                <div className="h-9 gap-2 font-semibold text-2xl text-brand_blue_500">
                    Flag account 
                </div>

                <div onClick={close} className="inline-flex justify-center items-center rounded-5px border border-neutral_200 w-9 h-9">
                    <MdOutlineClose size={16} className="text-gray_400"/>
                </div>
            </div>

            <div className="mt-8">
                <div className="flex items-center gap-2 font-medium text-xs">
                    <Pencil/>
                    Reason / Comment on flag
                </div>

                <textarea rows={5} className="w-full border border-neutral_200 rounded mt-2 p-[10px] text-xs outline-none bg-[#D9E2E6] bg-opacity-20" placeholder="Type reason..."/>

                <div className="mt-2 flex items-center gap-2">
                    <div className="w-6 h-6 bg-teal_green_50 text-teal_green_500 relative text-[10px] rounded-full flex items-center justify-center font-medium">
                        AN

                        <div className="absolute border border-white bg-[#12B76A] h-2 w-2 rounded-full bottom-0 right-0"></div>
                    </div>

                    <div className="text-xs font-medium">Admin Name</div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs mt-8">
                    <button onClick={close} className="btn-neutral rounded-lg h-9">
                        Cancel
                    </button>
                    <button className="btn-black rounded-lg h-9 flex items-center justify-center gap-2">
                        <RiFlagLine size={16}/>
                        Flag
                    </button>
                </div>
            </div>
        </div>
    )
}