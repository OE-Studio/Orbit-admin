import React, {useState, useEffect} from "react";
import NewData from "./components/DATA"
import NewAirtime from "./components/AIRTIME"
import NewElectricity from "./components/ELECTRICITY"
import NewCable from "./components/CABLE"
import { MdOutlineClose } from "react-icons/md";
import Select from "@/components/SELECT";
import { useContext } from "react";
import { ProductContext } from "../..";
import { dateConverter } from "@/utils";

const NewProduct = ({closeHandler}:any) =>{
    const [productType, setProductType] = useState("airtime")
    const {mode, product_type, product} = useContext(ProductContext)

    useEffect(()=>{
        if(mode === 'edit'){
            setProductType(product_type)
        }
    }, [product_type, mode])

    return (
        <div>
            <div className="flex justify-between items-center font-semibold">
                <div>
                    <p>{mode === 'edit' ? `Edit ${product_type.toUpperCase()}` : 'Create Product'}</p>
                    {mode === 'edit' && <p>Last modified on {dateConverter(product.updatedAt)}</p>}
                </div>
                <div className="inline-flex justify-center items-center rounded-5px border border-neutral_200 w-9 h-9" onClick={closeHandler}>
                        <MdOutlineClose size={16} className="text-gray_400"/>
                </div>
            </div>
            <div className="mt-4">
                <div className="flex items-center justify-between mb-4">
                    <div>Select product Type</div>
                    <select className="disabled:cursor-not-allowed" disabled={mode==='edit'} value={productType} onChange={(e)=>setProductType(e.target.value)}>
                        <option value="airtime">Airtime</option>
                        <option value="data">Data</option>
                        <option value="electricity">Electricity</option>
                        <option value="cable">Cable Subscription</option>
                    </select>
                </div>

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
            {productType === "cable" && <NewCable/>}
        </div>
    )
}

export default NewProduct