import React from "react";
import SecurityMetaData from './components/META_DATA'
import { ActivityTable } from "./components/ACTIVITY_TABLE";

export const SecurityInformation = () =>{
    return (
        <div className="xl:w-3/4">
            <SecurityMetaData/>
            <ActivityTable/>
        </div>
    )
}