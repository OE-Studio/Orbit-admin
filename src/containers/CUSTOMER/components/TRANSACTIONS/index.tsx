import React from "react";
import Filter from "./components/FILTER";
import TransactionTable from "./components/TRANSACTIONS_TABLE";
import TransactionsChart from "./components/TRANSACTIONS_CHART";
import TransactionDrawer from "./components/TRANSACTION_DRAWER";
import Drawer from "@/components/DRAWER";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleTransactionDetails } from "@/slices/CUSTOMER_SLICE";
import { RootState } from "@/store";

const Transactions = () =>{
    const {showTransaction} =  useSelector((state:RootState)=>state.customer)
    const dispatch = useDispatch()
    return (
        <div className="grid grid-cols-11 gap-12">
            <div className="col-span-8">
                <Filter/>
                <TransactionTable/>
            </div>

            <div className="col-span-3">
                <TransactionsChart/>
            </div>

            <Drawer closeHandler={()=>dispatch(toggleTransactionDetails(null))} visible={showTransaction}>
                <TransactionDrawer closeDrawer={()=>dispatch(toggleTransactionDetails(null))}/>
            </Drawer>
        </div>
    )
}

export default Transactions