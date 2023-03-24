import React from "react";
import CustomerContainer from "@/containers/CUSTOMER";
import DashboardLayout from "@/layouts/DASHBOARD_LAYOUT";

const Customer = () =>{
    return (
        <DashboardLayout>
            <CustomerContainer/>
        </DashboardLayout>
    )
}

export default Customer