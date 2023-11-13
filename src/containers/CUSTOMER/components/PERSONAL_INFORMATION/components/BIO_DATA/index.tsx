import React from "react";
import Detail from "@/components/DETAIL";
import { Compare } from "@/assets/icons";
import Image from "next/image";
import { toggleImageDetails } from "@/slices/CUSTOMER_SLICE";
import { useDispatch } from "react-redux";
import { DrawerImages } from "./component/IMAGES_POPUP";
import { useSelector } from "react-redux";
import {Popup} from '@/components/POPUP/index'
import { RootState } from "@/store";
import { dateConverter } from "@/utils";
import { customer } from "@/utils/types";

interface props {
    customer:customer
}

const BioData = ({customer}:props) =>{
    const dispatch = useDispatch()

    const {showImage} = useSelector((state:RootState)=>state.customer)

    const toggleImagesHandler = () =>{
        dispatch(toggleImageDetails({
            action:"compare",
            source:{img1:customer.utilityDoc, img2:customer.selfieId}
        }))
    }

    const toggleImageHandler = (src:string) =>{
        dispatch(toggleImageDetails({
            action:"single",
            source:{img1:src}
        }))
    }

    return (
        <div>
            <p>Bio-data</p>

            <div className="grid grid-cols-2 gap-4 mt-4">
                <Detail width="col-span-1" title="Legal first name" value={customer.firstName || ""}/>
                <Detail width="col-span-1" title="Legal last name" value={customer.lastName || ""}/>
                <Detail width="col-span-2" title="Username" value={customer.username || ""} verified={true}/>
                <Detail width="col-span-2" title="Email" value={customer.email || ""} verified={true}/>
                <Detail width="col-span-2" title="Phone number" value={customer.phoneNumber || ""} verified={true}/>
                <Detail width="col-span-2" title="vNIN" value={customer.nin || ""} verified={true}/>
            </div>

            <div className="border border-neutral_200 rounded border-b-0 mt-4">
                <div className="flex gap-4 p-3">
                    {customer.selfieId && customer.selfieId !== "not provided" ? <div onClick={()=>toggleImageHandler(customer.selfieId)} className="flex items-center justify-center bg-neutral_100">
                        <Image src={customer.selfieId} height={100} width={200} alt=""/>
                    </div> : ""}
                    {customer.utilityDoc && customer.utilityDoc !==  "not provided" ? <div onClick={()=>toggleImageHandler(customer.utilityDoc)} className="flex items-center justify-center bg-neutral_100">
                        <Image src={customer.utilityDoc} height={100} width={200} alt=""/>
                    </div> : ""}
                </div>

                <button onClick={toggleImagesHandler} className="rounded border border-neutral_200 mt-2 w-full h-9 flex items-center justify-center gap-3 text-sm">
                    <Compare/>
                    Compare field view
                </button>
            </div>

            <Popup visible={showImage}>
                <DrawerImages/>
            </Popup>
        </div>
    )
}

export default BioData