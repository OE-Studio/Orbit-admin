import React from 'react'
import styles from './index.module.css'
import {Arrow45} from '../../assets/icons'
import TableCustomers from './components/TABLE/table'
import {useDispatch} from 'react-redux'
import {toggleVerificationDetails} from '@/slices/CUSTOMERS_SLICE/index'

const CustomersTable = () =>{
    const dispatch =  useDispatch()


    return (
        <div>
            <div className="relative">
                <div className="bg-[#F9FAFB] inline-flex p-1 text-xs">
                    <div className={`flex items-center px-3 py-2 gap-2 bg-white rounded-[6px] ${styles.blur3}`}>
                        <div className="font-semibold text-[#667085]">New Signup</div>
                        <div className="bg-gray_100 px-2 py-0.5 rounded-full text-[#344054] text-[10px]">200</div>
                    </div>
                    <div className="flex items-center px-3 py-2 gap-2">
                        <div className="font-semibold text-[#667085]">New Signup</div>
                        <div className="bg-gray_100 px-2 py-0.5 rounded-full text-[#344054] text-[10px]">200</div>
                    </div>
                    <div className="flex items-center px-3 py-2 gap-2">
                        <div className="font-semibold text-[#667085]">New Signup</div>
                        <div className="bg-gray_100 px-2 py-0.5 rounded-full text-[#344054] text-[10px]">200</div>
                    </div>
                </div>

                <div className={`inline-flex float-right w-9 h-9 rounded-5px border border-neutral_200 items-center justify-center ${styles.blur2fade}`}>
                    <Arrow45/>
                </div>
            </div>

            {/* table */}
            <div className="mt-6 rounded-[12px] overflow-hidden border border-neutral_200 border-collapse border-b-0">
                <TableCustomers action={()=>dispatch(toggleVerificationDetails())}/>
            </div>
        </div>
    )
}

export default CustomersTable