import React from "react";
import {RiCalendarLine, RiCoinLine} from "react-icons/ri"

const Filter = ()=>{
    const btnClass = `items-center justify-center gap-2 inline-flex px-3 py-2 btn-neutral text-xs font-semibold rounded-lg`
    return (
        <div className="border border-neutral_200 rounded-[12px] p-4 space-y-6">
            <div className="flex items-center justify-between">
                <div className="inline-block">
                    <input placeholder="search" className="w-96 rounded-lg h-9 border border-neutral_200 text-gray_400 pl-3 text-xs font-semibold"/>
                </div>
                <div className="flex items-center gap-3">
                    <div className={btnClass}>Today <RiCalendarLine size={16}/></div>
                    <div className={btnClass}>Amount range <RiCoinLine size={16}/></div>
                </div>
            </div>

            <div className="flex items-center justify-between">
                <div className={btnClass}>All transactions</div>

                <div className="inline-flex gap-3">
                    <div className={btnClass}>Today</div>
                    <div className={btnClass}>Amount range</div>
                    <div className={btnClass}>Today</div>
                    <div className={btnClass}>Amount range</div>
                    <div className={btnClass}>Today</div>
                    <div className={btnClass}>Amount range</div>
                </div>
            </div>
        </div>
    )
}

export default Filter