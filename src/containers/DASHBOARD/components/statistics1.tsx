import React from "react";
import { Users, Arrow45 } from "@/assets/icons";

const Statistics1 = () =>{
    return (
        <div className="flex border border-neutral_200 rounded-[12px] divide-x py-6 w-full justify-between">
            {[1,2,3].map(c=>{
                return (
                    <div className="px-6 w-full">
                        <div className="flex items-center justify-between">
                            <div className="flex gap-3 text-gray_400">
                                <Users/>
                                Total signups
                            </div>

                            <div className="w-6 h-6 rounded-5px border border-neutral_200 flex items-center justify-center">
                                <Arrow45/>
                            </div>
                        </div>
                        <div className="font-clash-medium text-4xl mt-6 text-gray_500">300k</div>
                    </div>
                )
            })}
        </div>
    )
}

export default Statistics1