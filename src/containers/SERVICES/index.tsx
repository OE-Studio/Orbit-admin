import React, {useState, useContext, createContext} from "react"
import Tab from "@/components/TAB"
import AirtimeTable from "./components/AIRTIME_TABLE"
import DataTable from "./components/DATA_TABLE"
import ElectricityTable from "./components/ELECTRICITY_TABLE"
import CableTable from "./components/CABLE_TABLE"
import Drawer from "@/components/DRAWER"
import NewProduct from "./components/NEW_PRODUCT"

interface product {
    name:string,
    description:string,
    provider_name:string,
    status:string,
    cost_price:number,
    selling_price:number,
    createdAt:Date,
    updatedAt:Date,
    provider_id:string, 
    validity:string, 
    cable_type:string, 
    product_id:string,
    state:string, 
    meter_type:string,
    plan_type:string,
    airtime_type:string
}

export const ProductContext = createContext({
    mode:'',
    product:{
        name:"",
        description:"",
        provider_name:"",
        status:"",
        cost_price:0,
        selling_price:0,
        createdAt:new Date,
        updatedAt:new Date,
        plan_type:"", 
        provider_id:"", 
        validity:"", 
        cable_type:"", 
        product_id:"",
        state:"", 
        meter_type:"",
        airtime_type:""
    },
    onChange(a:string,b:any,c:string){},
    product_type:''
})

export const ServicesContainer = () =>{
    const [showNew, setShowNew] = useState(false)
    const [edit, setEdit] = useState({
        mode:'',
        product:{
            name:"",
            description:"",
            provider_name:"",
            status:"",
            cost_price:0,
            selling_price:0,
            createdAt:new Date,
            updatedAt:new Date,
            provider_id:"", 
            validity:"", 
            cable_type:"", 
            product_id:"",
            plan_type:"",
            state:"", 
            meter_type:"",
            airtime_type:""
        },
        product_type:""
    })

    const onChange=(mode:string, product:product, product_type:string)=>{
        setShowNew(true)
        setEdit({
            mode,
            product,
            product_type
        })
    }

    const toggleCreateHandler = () =>{
        setShowNew(true)
        setEdit({
            mode:'',
            product:{
                name:"",
                description:"",
                provider_name:"",
                status:"",
                cost_price:0,
                selling_price:0,
                createdAt:new Date,
                updatedAt:new Date,
                plan_type:"", 
                provider_id:"", 
                validity:"", 
                cable_type:"", 
                product_id:"",
                state:"", 
                meter_type:"",
                airtime_type:""
            },
            product_type:""
        })
    }

    return (
        <div className="w-full">
            <ProductContext.Provider value={{mode:edit.mode, product:edit.product, product_type:edit.product_type, onChange}}>
                <div className="flex items-center justify-between">
                    <h2 className="font-semibold text-3xl">Services</h2>
                    <button onClick={toggleCreateHandler} className="btn-neutral text-xs px-3 py-2 rounded-lg flex items-center gap-2 font-semibold">
                        {/* <GoPlus/> */}
                        Add New Product
                    </button>
                </div>

                <div className="w-full mt-5">
                    <Tab currentTab={1}>
                        <Tab.HeadsContainer>
                            <Tab.Item label="Airtime" index={1}></Tab.Item>
                            <Tab.Item label="Data" index={2}></Tab.Item>
                            <Tab.Item label="Electricity" index={3}></Tab.Item>
                            <Tab.Item label="Cable Subscription" index={4}></Tab.Item>
                        </Tab.HeadsContainer>

                        <div className="mt-5">
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
            </ProductContext.Provider>
        </div>
    )
}