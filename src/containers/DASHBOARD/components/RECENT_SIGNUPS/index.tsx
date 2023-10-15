import React from "react";
import CustomersTable from './CUSTOMERSTABLE/index'
import Drawer from "@/components/DRAWER";
import VerificationDrawer from "@/components/USER_VERIFICATION/verification";
import NewSignupDrawer from '@/components/USER_VERIFICATION/newSignup'
import { Compare, Contact } from "@/assets/icons";
import { RiCloseLine } from "react-icons/ri";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { toggleImageDetails } from "@/slices/CUSTOMERS_SLICE/index";
import { RootState } from "@/store";
import { toggleVerificationDetails } from "@/slices/CUSTOMERS_SLICE/index";

const BothImages = ()=>{
    const dispatch = useDispatch()
    const closeImage = () =>{
        dispatch(toggleImageDetails(null))
    }
    const {image} = useSelector((state:RootState)=>state.customers)
    return (
        <div className="rounded-[12px] overflow-hidden w-9/12">
            <div className="flex items-center justify-between bg-neutral_100 p-6">
                <div className="flex items-center gap-2 text-sm text-gray_500">
                    <Compare/>
                    Compare file view
                </div>

                <div onClick={closeImage} className="w-6 h-6 rounded-5px bg-white flex items-center justify-center">
                    <RiCloseLine/>
                </div>
            </div>

            <div className="p-6 flex gap-6 h-auto relative bg-white rounded-b-[12px]">
                <div className="w-2/3 relative flex items-center">
                    {image?.source?.img1 
                    ? <Image width={1000} height={500} src={image.source?.img1} className="block" alt="NIN"/> 
                    : <div></div>}
                </div>
                <div className="w-1/3 relative">
                    {image?.source?.img2 
                    ? <Image width={500} height={1000} src={image.source?.img2} className="block" alt="NIN"/> 
                    : <div></div>}
                </div>
            </div>
        </div>
    )
}

const SingleImage = () =>{
    const dispatch = useDispatch()
    const closeImage = () =>{
        dispatch(toggleImageDetails(null))
    }

    const {image} = useSelector((state:RootState)=>state.customers)

    return (
        <div className="rounded-[12px] overflow-hidden w-[500px]">
            <div className="flex items-center justify-between bg-neutral_100 p-6">
                <div className="flex items-center gap-2 text-sm text-gray_500">
                    <Contact/>
                    File view
                </div>

                <div onClick={closeImage} className="w-6 h-6 rounded-5px bg-white flex items-center justify-center">
                    <RiCloseLine/>
                </div>
            </div>

            <div className="p-6 h-auto relative bg-white rounded-b-[12px] w-full">
                {image?.source?.img1 
                ? <Image width={500} height={500} src={image.source?.img1} className="block" alt="NIN"/> 
                : <div></div>}
            </div>
        </div>
    )
}

const DrawerImages = () =>{
    const {image} = useSelector((state:RootState)=>state.customers)

    if(image.action === "") {
        return <div></div>
    }

    return (
        <>
            {image.action === "compare" ? <BothImages/> : image.action === "single" ? <SingleImage/> : ""}
        </>
    )
}

const RecentSignups = () =>{
    const {showVerificationDetails, showImage, currCustomer} = useSelector((state:RootState)=>state.customers)
    const dispatch = useDispatch()

    return (
        <div>
            <div>Recent Signups</div>

            <div className="mt-6">
                <CustomersTable/>
            </div>

            <Drawer 
                closeHandler={()=>dispatch(toggleVerificationDetails(null))} moreOption={<DrawerImages/>} 
                visible={showVerificationDetails} 
                showDetails={showImage}
            >
                <VerificationDrawer currCustomer={currCustomer}/>
            </Drawer>
        </div>
    )
}

export default RecentSignups