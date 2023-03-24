import React from "react";

export const ActivityTable = () =>{
    return (
        <div className="border border-collapse border-neutral_200 mt-6 text-sm w-full rounded-lg">
            <table className="w-full">
                <thead className="">
                    <tr className="text-gray_400">
                        <th className="font-medium px-3 py-4 bg-[#F9FAFB] text-left rounded-tl-lg">Date</th>
                        <th className="font-medium px-3 py-4 bg-[#F9FAFB] text-left">Location</th>
                        <th className="font-medium px-3 py-4 bg-[#F9FAFB] text-left">Device</th>
                        <th className="font-medium px-3 py-4 bg-[#F9FAFB] text-left rounded-tr-lg">Update</th>
                    </tr>
                </thead>

                <tbody>
                    <tr className="border-t border-neutral_200 border-x-0">
                        <td className="py-4 px-3 text-left text-gray_200">March 07, 2022</td>
                        <td className="py-4 px-3 text-left text-gray_200">Ikeja, Lagos, Nigeria, </td>
                        <td className="py-4 px-3 text-left text-gray_200">iPhone 13 mini</td>
                        <td className="py-4 px-3 text-left text-gray_200">Password</td>
                    </tr>
                    <tr className="border-t border-neutral_200 border-x-0">
                        <td className="py-4 px-3 text-left text-gray_200">March 07, 2022</td>
                        <td className="py-4 px-3 text-left text-gray_200">Ikeja, Lagos, Nigeria, </td>
                        <td className="py-4 px-3 text-left text-gray_200">iPhone 13 mini</td>
                        <td className="py-4 px-3 text-left text-gray_200">Password</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}