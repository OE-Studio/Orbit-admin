import React from "react";
import DashboardLayout from "@/layouts/DASHBOARD_LAYOUT";
import CustomersContainer from "@/containers/CUSTOMERS";

const DashboardView = () =>{
    return (
        <div>
            <DashboardLayout>
                <CustomersContainer/>
            </DashboardLayout>
        </div>
    )
}

export default DashboardView