import React, {useState} from "react";
import {MdKeyboardArrowLeft, MdKeyboardArrowRight, MdOutlineClose} from "react-icons/md"
import {RiArrowRightUpLine} from "react-icons/ri"
import Image from "next/image";
import Detail from "@/components/DETAIL";
import { Compare, Eraser, Flag, Thumb, Pencil, Loader } from "@/assets/icons";
import { toggleVerificationDetails, toggleImageDetails, approveVerification } from "@/slices/CUSTOMERS_SLICE/index";
import { useApproveKYCRequestMutation, useRejectKYCRequestMutation } from "@/slices/VERIFICATON/verificationApiSlice";
import { useDispatch, useSelector } from "react-redux";

type currCustomer = {
    currCustomer:{
        firstName:string,
        lastName:string,
        utilityDoc:string,
        selfieId:string,
        userId:string,
        username:string,
        email:string,
        nin:string
    }
}

const VerificationDrawer = ({currCustomer}:currCustomer) =>{
    const [showFlagDetails, setShowFlagDetails] = useState(false)
    const [approveKYCRequest, {isLoading:loadingApproval, isSuccess}] = useApproveKYCRequestMutation()
    const [rejectKYCRequest, {isLoading:loadingReject}] = useRejectKYCRequestMutation()

    const toggleFlagDetails = () => setShowFlagDetails(!showFlagDetails)

    const dispatch = useDispatch()

    const toggleImagesHandler = () =>{
        dispatch(toggleImageDetails({
            action:"compare",
            source:{img1:currCustomer.utilityDoc, img2:currCustomer.selfieId}
        }))
    }

    const toggleImageHandler = (src:string) =>{
        dispatch(toggleImageDetails({
            action:"single",
            source:{img1:src}
        }))
    }

    const approveKYCHandler = async () =>{
        try{
            let approvalResponse = approveKYCRequest({
                reqId:currCustomer.userId
            }).unwrap()
            let result = await approvalResponse
            // console.log(result)
        }
        catch(err){

        }
    }

    const rejectKYCHandler = async()=>{
        try{
            let rejectResponse = rejectKYCRequest({reqId:currCustomer.userId}).unwrap()
            let result = await rejectResponse
            // console.log(result)
        }
        catch(err){
            console.log(err)
        }
    }

    // const {loadingApprove} = useSelector(state=>state.customers)

    return (
        <>
            {/* nav */}
            <div className="flex items-center justify-between">
                <div className="border border-neutral_200 rounded-lg h-9 flex items-center divide-x divide-neutral_200">
                    <div className="h-9 w-9 flex items-center justify-center">
                        <MdKeyboardArrowLeft/>
                    </div>

                    <div className="h-9 flex items-center px-3 gap-2 text-sm font-semibold">
                        Verification 
                        <span className="px-1 bg-gray_100 rounded-full py-0.5 text-xs font-normal text-[#344054]">400</span>
                    </div>

                    <div className="h-9 w-9 flex items-center justify-center">
                        <MdKeyboardArrowRight/>
                    </div>
                </div>

                <div className="inline-flex justify-center items-center rounded-5px border border-neutral_200 w-9 h-9" onClick={()=>dispatch(toggleVerificationDetails(null))}>
                    <MdOutlineClose size={16} className="text-gray_400"/>
                </div>
            </div>

            {/* Custoemr name and image */}
            <div className="flex items-center justify-between mt-9">
                <div className="flex gap-3 items-center">
                    <div className="inline-block">
                        <Image src="/avatar.png" width={40} height={40} alt="avatar" className="block"/>
                    </div>
                    <div className="text-sm font-normal">
                        <div className="text-[#101828]">{currCustomer.lastName} {currCustomer.firstName}</div>
                        <div className="text-[#475467]">@u{currCustomer.username}</div>
                    </div>
                </div>

                <div className="inline-flex justify-center items-center rounded-5px border border-neutral_200 w-9 h-9">
                    <RiArrowRightUpLine/>
                </div>
            </div>

            {/* meta-data */}
            <div className="mt-9">
                <h5>Meta-data</h5>
                
                <div className="p-[10px] border border-neutral_200 rounded-lg mt-4">
                    <table className="text-text_100 text-xs">
                        <tbody>
                            <tr className="">
                                <td className="py-1">Date</td>
                                <td className="py-1 font-semibold">March 07, 2022</td>
                            </tr>
                            <tr className="">
                                <td className="py-1">Device</td>
                                <td className="py-1 font-semibold">iPhone 13 mini</td>
                            </tr>
                            <tr className="">
                                <td className="py-1 pr-8">Location</td>
                                <td className="py-1 font-semibold">Ikeja, Lagos, Nigeria, view on map.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Bio-data */}
            <div className="mt-8">
                <h5>Bio-data</h5>

                <div className="grid grid-cols-2 gap-4 mt-4">
                    <Detail width="col-span-1" title="Legal first name" value={currCustomer.firstName}/>
                    <Detail width="col-span-1" title="Legal last name" value={currCustomer.lastName}/>
                    <Detail width="col-span-2" title="Username" value={currCustomer.username} verified={true}/>
                    <Detail width="col-span-2" title="Email" value={currCustomer.email} verified={true}/>
                    <Detail width="col-span-2" title="Phone number" value="Emeka" verified={true}/>
                    <Detail width="col-span-2" title="vNIN" value={currCustomer.nin} verified={true}/>
                </div>
            </div>

            <div className="border border-neutral_200 rounded border-b-0 mt-4">
                <div className="flex gap-4 p-3">
                    <div onClick={()=>toggleImageHandler(currCustomer.selfieId)} className="flex items-center justify-center bg-neutral_100">
                        <Image src={currCustomer.selfieId} height={100} width={200} alt=""/>
                    </div>
                    <div onClick={()=>toggleImageHandler(currCustomer.utilityDoc)} className="flex items-center justify-center bg-neutral_100">
                        <Image src={currCustomer.utilityDoc} height={100} width={200} alt=""/>
                    </div>
                </div>

                <button className="rounded border border-neutral_200 mt-2 w-full h-9 flex items-center justify-center gap-3 text-sm" onClick={toggleImagesHandler}>
                    <Compare/>
                    Compare field view
                </button>
            </div>

            {/* actions */}
            <div className="mt-6">
                {showFlagDetails 
                ? 
                <div>
                    <div className="flex items-center gap-2 font-medium text-xs">
                        <Pencil/>
                        Reason / Comment on flag
                    </div>

                    <textarea rows={5} className="w-full border border-neutral_200 rounded mt-2 p-[10px] text-xs outline-none" placeholder="Type reason..."/>

                    <div className="mt-2 flex items-center gap-2">
                        <div className="w-6 h-6 bg-teal_green_50 text-teal_green_500 relative text-[10px] rounded-full flex items-center justify-center font-medium">
                            AN

                            <div className="absolute border border-white bg-[#12B76A] h-2 w-2 rounded-full bottom-0 right-0"></div>
                        </div>

                        <div>Admin Name</div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-xs mt-8">
                        <button className="btn-neutral rounded-lg h-9" onClick={toggleFlagDetails}>
                            Cancel
                        </button>
                        <button className="btn-black rounded-lg h-9 flex items-center justify-center gap-2">
                            <Thumb/>
                            Flag
                        </button>
                    </div>
                </div> 
                : loadingApproval
                ?
                <button className="btn-black rounded-lg h-9 flex items-center justify-center gap-2 w-full">
                        <Loader/>
                        Approving
                </button>
                :loadingReject
                ?
                <button className="btn-red rounded-lg h-9 flex items-center justify-center gap-2 w-full">
                    <Loader/>
                    Denying
                </button>
                : 
                <div className="grid grid-cols-3 gap-4 text-xs">
                    <button onClick={rejectKYCHandler} className="btn-red rounded-lg h-9 flex items-center justify-center gap-2">
                        <Eraser/>
                        Deny
                    </button>
                    <button className="btn-neutral rounded-lg h-9 flex items-center justify-center gap-2" onClick={toggleFlagDetails}>
                        <Flag/>
                        Flag
                    </button>
                    <button onClick={()=>{
                        approveKYCHandler()
                        dispatch(approveVerification())
                    }} className="btn-black rounded-lg h-9 flex items-center justify-center gap-2">
                        <Thumb/>
                        Approve
                    </button>
                </div>}
            </div>
        </>
    )
}

export default VerificationDrawer