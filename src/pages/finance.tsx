import React from "react";
import DashboardLayout from "@/layouts/DASHBOARD_LAYOUT";
import { Finance } from "@/containers/FINANCE";

const FinanceView = () =>{
    return (
        <DashboardLayout>
            <Finance/>
        </DashboardLayout>
    )
}

export default FinanceView