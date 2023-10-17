import { useGetDataQuery } from "@/slices/SERVICES_SLICE/servicesApiSlice"
import { PencilIcon, BagIcon } from "@/assets/icons"
import { useContext } from "react"
import { ProductContext } from "../.."

interface airtime {
    name:string,
    description:string,
    provider_name:string,
    status:string,
    selling_price:number,
    cost_price:number
}

const DataTable = () =>{
    const tdClass = `px-6 py-4`
    let thClass = `px-6 py-4 text-left font-normal text-xs`

    const {data:allDatas, isLoading} = useGetDataQuery(null)
    console.log(allDatas)

    const {onChange} = useContext(ProductContext)

    const editData = (airtime:airtime) =>{
        onChange('edit', airtime, 'data')
    }

    return (
        <div className="w-full">
            <div className="flex items-center justify-between">
                <p>All Airtime Products</p>
                {/* <button>Add new Products</button> */}
            </div>

            <table className="w-full">
                <thead>
                    <tr>
                        <th className={thClass}>Name</th>
                        <th className={thClass}>Provider</th>
                        <th className={thClass}>Status</th>
                        <th className={thClass}>Cost Price</th>
                        <th className={thClass}>Selling Price</th>
                        <th className={thClass}></th>
                    </tr>
                </thead>
                <tbody>
                    {allDatas?.dataProducts?.map((airtime:airtime)=>{
                        return (
                            <tr key={airtime.name}>
                                <td className={tdClass}>
                                    <div className="flex gap-3 items-center">
                                        <div className="w-10 h-10 rounded flex items-center justify-center border">
                                            <BagIcon/>
                                        </div>
                                        <div>
                                            <p>{airtime.name}</p>
                                            <p>{airtime.description}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className={tdClass}>
                                    <div>{airtime.provider_name}</div>
                                </td>
                                <td className={tdClass}>
                                <div className={`inline-flex items-center px-2 py-1 rounded-full gap-1.5 capitalize text-xs font-medium ${airtime.status === 'active' ? 'bg-green_50' : 'bg-orange_50'}`}>
                                        <div className={`w-1.5 h-1.5 rounded-full ${airtime.status === 'active' ? 'bg-[#027A48]' : 'bg-[#B93815]'}`}></div>
                                        <div className={airtime.status === 'active' ? 'text-[#027A48]' : 'text-[#B93815]'}>{airtime.status}</div>
                                    </div>
                                </td>
                                <td className={tdClass}>
                                    <div>&#8358; {airtime.cost_price}</div>
                                </td>
                                <td className={tdClass}>
                                    <div>&#8358; {airtime.selling_price}</div>
                                </td>
                                <td className={tdClass}>
                                    <div onClick={()=>editData(airtime)}><PencilIcon/></div>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default DataTable