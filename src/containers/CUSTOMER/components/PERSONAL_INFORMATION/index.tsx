import React from "react";
import BioData from "./components/BIO_DATA";
import MetaData from "./components/META_DATA";
import { Loader } from "@/assets/icons";
import { useGetCustomerQuery } from "@/slices/CUSTOMER_SLICE/customerApiSlice";
import { useSearchParams } from "next/navigation";

const PersonalInformation = () =>{
    const searchParams = useSearchParams()
    const userId = searchParams.get('id')

    const {data:customer, isLoading:loadingCustomer} = useGetCustomerQuery(userId)

    if(loadingCustomer) {
        return <div>
            <Loader/>
        </div>
    }

    return (
        <div className="grid grid-cols-3 gap-8">
            <BioData customer={customer}/>
            <MetaData/>
        </div>
    )
}

export default PersonalInformation