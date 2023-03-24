import React from "react";
import { CalendarOutline, GreenArrowUp } from "@/assets/icons";
import Select from "@/components/SELECT";

const Stats = () =>{
    return (
        <div className="py-5 px-6 border border-neutral_200 rounded-[12px]">
            <div>
                <div className="flex items-center justify-between">
                    <div className="inline-block">Stats</div>

                    <div className="inline-flex">
                        <Select>
                            <Select.Container>
                                <Select.Option label="Today" index={1}/>
                                <Select.Option label="Last 30 days" index={2}/>
                                <Select.Option label="Last 90 days" index={2}/>
                                <Select.Option label="Last Year" index={2}/>
                                <Select.Option label="All time" index={2}/>
                                <Select.Option label="Custom period" index={2}/>

                                <Select.ComplexOption label="Custom period" index={2}>
                                    <p>Money</p>
                                </Select.ComplexOption>
                            </Select.Container>
                        </Select>
                    </div>
                </div>

                <div className="mt-3 divide-y divide-neutral_200">
                    {[1,2,3,4,5,6].map(num=>{
                        return (
                            <div className="py-4">
                                <div className="text-sm text-gray_400">Total Users</div>
                                <div className="flex items-center justify-between mt-1">
                                    <div className="font-clash-medium text-3xl">20000</div>
                                    <div className="inline-flex items-center gap-1 text-sm">
                                        <GreenArrowUp/>
                                        3.4%
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Stats