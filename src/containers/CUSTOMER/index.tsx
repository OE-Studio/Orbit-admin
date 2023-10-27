import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import Tab from "@/components/TAB";
import Account from "./components/ACCOUNT";
import PersonalInformation from "./components/PERSONAL_INFORMATION";
import Transactions from "./components/TRANSACTIONS";
import {RiStarSmileFill, RiMore2Fill, RiLock2Line, RiFlagLine} from 'react-icons/ri'
import Referrals from "./components/REFERRALS";
import Insights from "./components/INSIGHTS";
import { SecurityInformation } from "./components/SECURITY_INFORMATION";
import { Actions } from "./components/ACTIONS";
import Drawer from "@/components/DRAWER";
import { FlagUser } from "./components/DRAWER_FLAG_USER";
import {SuspendUser} from './components/DRAWER_SUSPEND_USER'
import { toggleFlagDrawer, toggleSuspendDrawer, toggleFlagHistoryDrawer, toggleSuspendHistoryDrawer } from "@/slices/CUSTOMER_SLICE";
import {FlagHistory} from './components/DRAWER_FLAG_HISTORY'
import { SuspendHistory } from "./components/DRAWER_SUSPEND_HISTORY";
import { RootState } from "@/store";
import { useSearchParams } from 'next/navigation'
import {useGetCustomerQuery} from "@/slices/CUSTOMER_SLICE/customerApiSlice"

const CustomerContainer = () =>{
    const [currTab, setCurrTab] = useState(1)
    const {showFlag, showSuspend, showFlagHistory, showSuspendHistory} = useSelector((state:RootState)=>state.customer)

    const searchParams = useSearchParams()
    const userId = searchParams.get('id')
    console.log(userId)

    // const handleTabChange = (newIndex:number) =>{
    //     setCurrTab(newIndex)
    // }

    // const {getCustomer} = useGetCustomerQuery({userId})
    // console.log(getCustomer)

    const dispatch = useDispatch()

    const closeFlagHandler = () =>{
        dispatch(toggleFlagDrawer())
    }

    const closeSuspendHandler = () =>{
        dispatch(toggleSuspendDrawer())
    }

    const closeFlagHistory = () =>{
        dispatch(toggleFlagHistoryDrawer())
    }

    const closeSuspendHistory = () =>{
        dispatch(toggleSuspendHistoryDrawer())
    }


    
    return (
        <div>
            <div className="flex items-center justify-between">
                <div className="flex gap-3 items-center">
                    <div className="inline-block">
                        <Image src="/avatar.png" width={40} height={40} alt="avatar" className="block"/>
                    </div>
                    <div className="text-sm font-normal">
                        <div className="text-[#101828]">Last-name First-name</div>
                        <div className="text-[#475467]">@username</div>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div onClick={()=>dispatch(toggleSuspendHistoryDrawer())} className="flex items-center justify-center w-9 h-9 rounded-full bg-white shadow">
                        <RiLock2Line/>
                    </div>
                    <div onClick={()=>dispatch(toggleFlagHistoryDrawer())} className="flex items-center justify-center w-9 h-9 rounded-full bg-white shadow">
                        <RiFlagLine/>
                    </div>
                </div>
            </div>

            <hr className="mt-4"/>

            <div className="mt-11">
                <div>
                    <Tab currentTab={currTab}>
                        <div className="flex items-center justify-between">
                            <Tab.HeadsContainer>
                                <Tab.Item label="Account" index={1}/>
                                <Tab.Item label="Personal information" index={2}/>
                                <Tab.Item label="Transactions" index={3}/>
                                <Tab.Item label="Security information" index={4}/>
                                <Tab.Item label="Referrals" index={5}/>
                                <Tab.Item label="Insights" index={6}/>
                            </Tab.HeadsContainer>

                            <div className="flex items-center gap-3">
                                <button className="btn-neutral py-2 px-3 rounded-lg flex items-center gap-2 text-xs">
                                    Super user
                                    <RiStarSmileFill/>
                                </button>

                                <Actions/>
                            </div>
                        </div>

                        <div className="mt-7">
                            <Tab.ContentContainer>
                                <Tab.ContentItem index={1}>
                                    <Account/>
                                </Tab.ContentItem>
                                <Tab.ContentItem index={2}>
                                    <PersonalInformation/>
                                </Tab.ContentItem>
                                <Tab.ContentItem index={3}>
                                    <Transactions/>
                                </Tab.ContentItem>
                                <Tab.ContentItem index={4}>
                                    <SecurityInformation/>
                                </Tab.ContentItem>
                                <Tab.ContentItem index={5}>
                                    <Referrals/>
                                </Tab.ContentItem>
                                <Tab.ContentItem index={6}>
                                    <Insights/>
                                </Tab.ContentItem>
                            </Tab.ContentContainer>
                        </div>
                    </Tab>
                </div>
            </div>

            <Drawer 
                closeHandler={closeFlagHandler} 
                visible={showFlag}
            >
                <FlagUser close={closeFlagHandler}/>
            </Drawer>

            <Drawer 
                closeHandler={closeSuspendHandler} 
                visible={showSuspend}
            >
                <SuspendUser close={closeSuspendHandler}/>
            </Drawer>

            <Drawer 
                closeHandler={closeFlagHistory}
                visible={showFlagHistory}
            >
                <FlagHistory close={closeFlagHistory}/>
            </Drawer>

            <Drawer 
                closeHandler={closeSuspendHistory} 
                visible={showSuspendHistory}
            >
                <SuspendHistory close={closeSuspendHistory}/>
            </Drawer>
        </div>
    )
}

export default CustomerContainer