import React from "react";
import Detail from "@/components/DETAIL";
import { Compare } from "@/assets/icons";
import Image from "next/image";
import { toggleImageDetails } from "@/slices/CUSTOMER_SLICE";
import { useDispatch } from "react-redux";
import { DrawerImages } from "./component/IMAGES_POPUP";
import { useSelector } from "react-redux";
import {Popup} from '@/components/POPUP/index'

const BioData = () =>{
    const dispatch = useDispatch()

    const {showImage} = useSelector(state=>state.customer)

    const toggleImagesHandler = () =>{
        dispatch(toggleImageDetails({
            action:"compare",
            source:{img1:"/NIN.png", img2:"/passport.png"}
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
                <Detail width="col-span-1" title="Legal first name" value="Emeka"/>
                <Detail width="col-span-1" title="Legal last name" value="Emeka"/>
                <Detail width="col-span-2" title="Username" value="Emeka" verified={true}/>
                <Detail width="col-span-2" title="Email" value="Emeka" verified={true}/>
                <Detail width="col-span-2" title="Phone number" value="Emeka" verified={true}/>
                <Detail width="col-span-2" title="vNIN" value="Emeka" verified={true}/>
            </div>

            <div className="border border-neutral_200 rounded border-b-0 mt-4">
                <div className="flex gap-4 p-3">
                    <div onClick={()=>toggleImageHandler('/passport.png')} className="flex items-center justify-center bg-neutral_100">
                        <Image src="/passport.png" height={100} width={200} alt=""/>
                    </div>
                    <div onClick={()=>toggleImageHandler('/NIN.png')} className="flex items-center justify-center bg-neutral_100">
                        <Image src="/NIN.png" height={100} width={200} alt=""/>
                    </div>
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