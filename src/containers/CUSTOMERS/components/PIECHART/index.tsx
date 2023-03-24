import React from "react";
import PieChart from "./components/PIECHART";
import ChartData from "./components/DATA";

const PieChartCont = () =>{
    return (
        <div>
            <h3>User section</h3>
            <div className="flex mt-6 items-center gap-6">
                <div>
                    <PieChart/>
                </div>

                <div className="space-y-4 inline-block w-full">
                    <ChartData text="Flagged" value={2} color="bg-[#77B4FA]"/>
                    <ChartData text="Active" value={2} color="bg-[#05CE91]"/>
                    <ChartData text="Inactive" value={2} color="bg-[#B72AB9]"/>
                    <ChartData text="Disabled" value={2} color="bg-[#FD9900]"/>
                </div>
            </div>
        </div>
    )
}

export default PieChartCont