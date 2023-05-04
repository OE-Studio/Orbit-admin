import React from "react";
import Statistics1 from "./components/statistics1";
import Stats from "./components/stats";
import LineChart from "./components/chart";
import RecentSignups from "./components/RECENT_SIGNUPS/index";

const Dashboard = () =>{
    return (
        <div>
            <div className="">
                <div className="font-semibold text-3xl text-[#101828]">Hi, Anthony</div>
                <div className="text-[#475467] mt-1">Your current app summary and activity</div>
            </div>

            <div className="grid grid-cols-12 gap-7 mt-10">
                <div className="col-span-8">
                    <Statistics1/>
                    <LineChart/>
                </div>
                <div className="col-span-4">
                    <Stats/>
                </div>
            </div>

            <div>
                <RecentSignups/>
            </div>
        </div>
    )
}

export default Dashboard