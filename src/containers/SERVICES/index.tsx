import React, {useState} from "react"
import Tab from "@/components/TAB"
import AirtimeTable from "./components/AIRTIME_TABLE"
import DataTable from "./components/DATA_TABLE"
import ElectricityTable from "./components/ELECTRICITY_TABLE"
import CableTable from "./components/CABLE_TABLE"
import Drawer from "@/components/DRAWER"
import NewProduct from "./components/NEW_PRODUCT"

export const ServicesContainer = () =>{
    const [showNew, setShowNew] = useState(false)

    return (
        <div className="w-full">
            <div className="flex items-center justify-between">
                <h2 className="font-semibold text-3xl">Services</h2>
                <button onClick={()=>setShowNew(true)} className="btn-neutral text-xs px-3 py-2 rounded-lg flex items-center gap-2 font-semibold">
                    {/* <GoPlus/> */}
                    Add New Product
                </button>
            </div>

            <div className="w-full">
                <Tab currentTab={1}>
                    <Tab.HeadsContainer>
                        <Tab.Item label="Airtime" index={1}></Tab.Item>
                        <Tab.Item label="Data" index={2}></Tab.Item>
                        <Tab.Item label="Electricity" index={3}></Tab.Item>
                        <Tab.Item label="Cable Subscription" index={4}></Tab.Item>
                    </Tab.HeadsContainer>

                    <div className="mt-7">
                        <Tab.ContentContainer>
                            <Tab.ContentItem index={1}>
                                <AirtimeTable/>
                            </Tab.ContentItem>
                            <Tab.ContentItem index={2}>
                                <DataTable/>
                            </Tab.ContentItem>
                            <Tab.ContentItem index={3}>
                                <ElectricityTable/>
                            </Tab.ContentItem>
                            <Tab.ContentItem index={4}>
                                <CableTable/>
                            </Tab.ContentItem>
                        </Tab.ContentContainer>
                    </div>
                </Tab>
            </div>

            <Drawer 
                visible={showNew}
                closeHandler={()=>setShowNew(false)}
            >
                <NewProduct closeHandler={()=>setShowNew(false)}/>
            </Drawer>
        </div>
    )
}