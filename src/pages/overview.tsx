import React from "react";
import DashboardLayout from "@/layouts/DASHBOARD_LAYOUT";
import Dashboard from "@/containers/DASHBOARD";

const DashboardView = () =>{
    return (
        <div>
            <DashboardLayout>
                <Dashboard/>
            </DashboardLayout>
        </div>
    )
}

export default DashboardView