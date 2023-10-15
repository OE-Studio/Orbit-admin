import React from "react";
import DashboardLayout from "@/layouts/DASHBOARD_LAYOUT";
import { ServicesContainer } from "../../containers/SERVICES";

const ServicesView = ()=>{
    return (
        <DashboardLayout>
            <ServicesContainer/>
        </DashboardLayout>
    )
}

export default ServicesView