import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleImageDetails } from "@/slices/CUSTOMER_SLICE/customerSlice";
import Image from "next/image";
import { RiCloseLine } from "react-icons/ri";
import { Compare } from "@/assets/icons";
import { Contact } from "@/assets/icons";

const BothImages = ()=>{
    const dispatch = useDispatch()
    const closeImage = () =>{
        dispatch(toggleImageDetails(null))
    }
    return (
        <div className="rounded-[12px] overflow-hidden w-7/12">
            <div className="flex items-center justify-between bg-neutral_100 p-6">
                <div className="flex items-center gap-2 text-sm text-gray_500">
                    <Compare/>
                    Compare file view
                </div>

                <div onClick={closeImage} className="w-6 h-6 rounded-5px bg-white flex items-center justify-center">
                    <RiCloseLine/>
                </div>
            </div>

            <div className="p-6 flex gap-6 h-72 relative bg-white rounded-b-[12px]">
                <div className="w-2/3 relative flex items-center">
                    <Image width={1000} height={500}  src="/NIN.png" className="block" alt="NIN"/>
                </div>
                <div className="w-1/3 relative flex items-center justify-end">
                    <Image src="/passport.png" width={200} height={500}  className="block" alt="passport"/>
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

    const {image} = useSelector(state=>state.customer)

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
                <Image width={500} height={500} src={image.source.img1} className="block" alt="NIN"/>
            </div>
        </div>
    )
}

export const DrawerImages = () =>{
    const {image} = useSelector(state=>state.customer)

    return (
        <>
            {image.action === "compare" ? <BothImages/> : image.action === "single" ? <SingleImage/> : ""}
        </>
    )
}

// export const ImagesPopup = () =>{
//     return <div>

//     </div>
// }