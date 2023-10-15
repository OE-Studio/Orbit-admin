import React from 'react'
import styles from './index.module.css'
import TableCustomers from './components/TABLE/table'
import {useDispatch} from 'react-redux'
import {toggleVerificationDetails} from '@/slices/CUSTOMERS_SLICE/index'
import {MoreOption} from './components/MORE_OPTION'
import CustomersTab from '@/components/TAB_CUSTOMERS'


const CustomersTable2 = () =>{
    const dispatch =  useDispatch()


    return (
        <div className="mt-11">
            <CustomersTab currentTab={1}>
                <div className="relative">
                    <div className="bg-[#F9FAFB] inline-flex p-1 text-xs">
                        <CustomersTab.HeadsContainer>
                            <CustomersTab.Item label="Customers" number={200} index={1}/>
                            <CustomersTab.Item label="Flagged account" number={200} index={2}/>
                            <CustomersTab.Item label="Suspended account" number={200} index={3}/>
                            <CustomersTab.Item label="Disabled account" number={200} index={4}/>
                        </CustomersTab.HeadsContainer>
                    </div>

                    
                    <MoreOption/>
                </div>

                <div className="mt-6 rounded-[12px] overflow-hidden border border-neutral_200 border-collapse border-b-0">
                    <CustomersTab.ContentContainer>
                        <CustomersTab.ContentItem index={1}>
                            <TableCustomers action={()=>dispatch(toggleVerificationDetails(null))}/>
                        </CustomersTab.ContentItem>
                        <CustomersTab.ContentItem index={2}>
                            <TableCustomers action={()=>dispatch(toggleVerificationDetails(null))}/>
                        </CustomersTab.ContentItem>
                        <CustomersTab.ContentItem index={3}>
                            <TableCustomers action={()=>dispatch(toggleVerificationDetails(null))}/>
                        </CustomersTab.ContentItem>
                        <CustomersTab.ContentItem index={4}>
                            <TableCustomers action={()=>dispatch(toggleVerificationDetails(null))}/>
                        </CustomersTab.ContentItem>
                    </CustomersTab.ContentContainer>
                    
                </div>
            </CustomersTab>
        </div>
    )
}

export default CustomersTable2