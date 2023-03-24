import React from "react";
import { InsightCard } from "./components/CARD";
import InsightLineChart from './components/LINE_CHART/index'
import InsightPieChart from "./components/PIE_CHART";

const cardsArr = [
    {
        title:"Average funding",
        value:300000000,
        percent:3.4
    },
    {
        title:"Average funding",
        value:300000000,
        percent:-3.4
    }
]

const Insights = () =>{
    return (
        <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2">
                <div className="flex gap-6">
                    {cardsArr.map(a=>{
                        return <InsightCard title={a.title} value={a.value} percent={a.percent}/>
                    })}
                </div>

                <div>
                    <InsightLineChart/>
                </div>
            </div> 

            <div className="col-span-1">
                    <div className="border border-neutral_200 rounded-[12px] p-6">
                        <InsightPieChart/>
                    </div>
            </div>     
        </div>
    )
}

export default Insights