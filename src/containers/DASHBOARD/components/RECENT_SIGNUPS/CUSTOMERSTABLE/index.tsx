import React, {useState} from 'react'
import styles from './index.module.css'
import {Arrow45} from '@/assets/icons'
import NewSignup from './components/NEW_SIGNUP/table'
import {useDispatch} from 'react-redux'
import {toggleVerificationDetails} from '@/slices/CUSTOMERS_SLICE/index'
import AwaitVerification from './components/AWAITING_VERIFICATION/table'
import NewlyVerified from './components/NEWLY_VERIFIED/table'
import CustomersTab from '@/components/TAB_CUSTOMERS'

const CustomersTable = () =>{
    const dispatch =  useDispatch()

    return (
        <div>
            <CustomersTab currentTab={1}>
                <div className="relative">
                    <div className="bg-[#F9FAFB] inline-flex p-1 text-xs">
                        <CustomersTab.HeadsContainer>
                            {/* <CustomersTab.Item label="New Signup" number={200} index={1}/> */}
                            <CustomersTab.Item label="Awaiting Verification" number={200} index={1}/>
                            {/* <CustomersTab.Item label="Newly verified" number={200} index={3}/> */}
                        </CustomersTab.HeadsContainer>
                    </div>

                    <div className={`inline-flex float-right w-9 h-9 rounded-5px border border-neutral_200 items-center justify-center ${styles.blur2fade}`}>
                        <Arrow45/>
                    </div>
                </div>

                <div className="mt-6 rounded-[12px] overflow-hidden border border-neutral_200 border-collapse border-b-0">
                    <CustomersTab.ContentContainer>
                        {/* <CustomersTab.ContentItem index={1}>
                            <NewSignup action={()=>dispatch(toggleVerificationDetails(null))}/> 
                        </CustomersTab.ContentItem> */}

                        <CustomersTab.ContentItem index={1}>
                            <AwaitVerification action={(n)=>dispatch(toggleVerificationDetails(n))}/>  
                        </CustomersTab.ContentItem>

                        {/* <CustomersTab.ContentItem index={3}>
                            <NewlyVerified action={()=>dispatch(toggleVerificationDetails(null))}/>  
                        </CustomersTab.ContentItem> */}
                    </CustomersTab.ContentContainer>
                </div>
            </CustomersTab>
        </div>
    )
}

export default CustomersTable