import React, {useState} from "react";
import NewData from "./components/DATA"
import NewAirtime from "./components/AIRTIME"
import NewElectricity from "./components/ELECTRICITY"
import NewCable from "./components/CABLE"
import { MdOutlineClose } from "react-icons/md";
import Select from "@/components/SELECT";

const NewProduct = ({closeHandler}:any) =>{
    const [productType, setProductType] = useState("airtime")
    return (
        <div>
            <div className="inline-flex justify-center items-center rounded-5px border border-neutral_200 w-9 h-9" onClick={closeHandler}>
                    <MdOutlineClose size={16} className="text-gray_400"/>
            </div>
            <div className="mt-4">
                <p>Select product Type</p>
                <select onChange={(e)=>setProductType(e.target.value)}>
                    <option value="airtime">Airtime</option>
                    <option value="data">Data</option>
                    <option value="electricity">Electricity</option>
                    <option value="cable subscription">Cable Subscription</option>
                </select>

                {/* <Select currentOption="" onChange={()=>{}}>
                    <Select.Container>
                        <Select.Option label="Airtime" index={1}/>
                        <Select.Option label="Data" index={1}/>
                        <Select.Option label="Electricity" index={1}/>
                        <Select.Option label="Cable Subscription" index={1}/>
                    </Select.Container>
                </Select> */}
            </div>

            {productType === "airtime" && <NewAirtime/>}
            {productType === "data" && <NewData/>}
            {productType === "electricity" && <NewElectricity/>}
            {productType === "cable subscription" && <NewCable/>}
        </div>
    )
}

export default NewProduct