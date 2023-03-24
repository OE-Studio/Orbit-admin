import React from "react";

const MetaData = () =>{
    return (
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
    )
}

export default MetaData