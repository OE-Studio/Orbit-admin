import React, {useState} from 'react'
import styles from './index.module.css'
import {Arrow45} from '@/assets/icons'
import NewSignup from './components/NEW_SIGNUP/table'
import {useDispatch} from 'react-redux'
import {toggleVerificationDetails} from '@/slices/CUSTOMERS_SLICE/index'
import AwaitVerification from './components/AWAITING_VERIFICATION/table'
import NewlyVerified from './components/NEWLY_VERIFIED/table'

const CustomersTable = () =>{
    const dispatch =  useDispatch()

    const [currentTab, setCurrentTab] = useState('newSignup')

    const tabChangeHandler = (tab:string) =>{
        setCurrentTab(tab)
    }

    return (
        <div>
            <div className="relative">
                <div className="bg-[#F9FAFB] inline-flex p-1 text-xs">
                    <div className={`flex items-center px-3 py-2 gap-2 rounded-[6px] cursor-pointer 
                        ${currentTab === "newSignup" ? styles.blur3 : ""}`} 
                        onClick={()=>tabChangeHandler('newSignup')}
                    >
                        <div className="font-semibold text-[#667085]">New Signup</div>
                        <div className="bg-gray_100 px-2 py-0.5 rounded-full text-[#344054] text-[10px]">200</div>
                    </div>

                    <div className={`flex items-center px-3 py-2 gap-2 cursor-pointer
                        ${currentTab === "awaitVerification" ? styles.blur3 : ""}`} 
                        onClick={()=>tabChangeHandler('awaitVerification')}
                    >
                        <div className="font-semibold text-[#667085]">Awaiting Verification</div>
                        <div className="bg-gray_100 px-2 py-0.5 rounded-full text-[#344054] text-[10px]">200</div>
                    </div>

                    <div className={`flex items-center px-3 py-2 gap-2 cursor-pointer 
                        ${currentTab === "newlyVerified" ? styles.blur3 : ""}`} 
                        onClick={()=>tabChangeHandler("newlyVerified")}
                    >
                        <div className="font-semibold text-[#667085]">Newly Verified</div>
                        <div className="bg-gray_100 px-2 py-0.5 rounded-full text-[#344054] text-[10px]">200</div>
                    </div>
                </div>

                <div className={`inline-flex float-right w-9 h-9 rounded-5px border border-neutral_200 items-center justify-center ${styles.blur2fade}`}>
                    <Arrow45/>
                </div>
            </div>

            {/* table */}
            <div className="mt-6 rounded-[12px] overflow-hidden border border-neutral_200 border-collapse border-b-0">
                {currentTab === "newSignup" ? <NewSignup action={()=>dispatch(toggleVerificationDetails())}/> 
                    : 
                currentTab === "awaitVerification" ? <AwaitVerification action={()=>dispatch(toggleVerificationDetails())}/> 
                    : 
                currentTab === "newlyVerified" ? <NewlyVerified action={()=>dispatch(toggleVerificationDetails())}/> 
                    : 
                <div></div>}
            </div>
        </div>
    )
}

export default CustomersTable