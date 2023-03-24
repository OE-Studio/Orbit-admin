import React from "react";
import TransactionsPieChart from './components/CHART'

const TransactionsChart = () =>{
    return (
        <div className="p-6 border border-neutral_200 rounded-lg">
            <div className="w-full flex justify-center">
                <TransactionsPieChart/>
            </div>

            <hr className="my-6"/>

            <div className="w-full flex flex-col items-center space-y-6">
                <div className="inline-block">
                    <div className="flex items-center gap-2" >
                        <div className="w-2 h-2 rounded-full inline-block bg-blue_500"></div>
                        <div className="font-medium inline-block text-neutral_300">Total funding</div>
                    </div>
                    <div className="font-clash-medium text-lg inline-block text-brand_blue">1,020,000,000</div>
                </div>

                <div className="inline-block">
                    <div className="flex items-center gap-2" >
                        <div className="w-2 h-2 rounded-full inline-block bg-orange_500"></div>
                        <div className="font-medium inline-block text-neutral_300">Total spend</div>
                    </div>
                    <div className="font-clash-medium text-lg inline-block text-brand_blue">1,020,000,000</div>
                </div>
            </div>
        </div>
    )
}

export default TransactionsChart