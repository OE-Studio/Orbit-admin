import { useGetAirtimeQuery, useDeleteProductMutation } from "@/slices/SERVICES_SLICE/servicesApiSlice"
import { PencilIcon, BagIcon } from "@/assets/icons"
import { useContext, useState } from "react"
import { ProductContext } from "../.."
import { dateConverter } from "@/utils"
import { DeleteIcon } from "@/assets/icons"
import { Loader } from "@/assets/icons"

interface airtime {
    name:string,
    description:string,
    provider_name:string,
    status:string,
    cost_price:number,
    selling_price:number,
    createdAt:Date,
    product_id:string
}

const AirtimeTable = () =>{
    const [productToDelete, setProductToDelete] = useState("")

    const tdClass = `px-6 py-2`
    let thClass = `px-6 py-4 text-left font-normal text-xs`

    const {data:allAirtimes, isLoading} = useGetAirtimeQuery(null)
    console.log(allAirtimes)

    const {onChange} = useContext(ProductContext)

    const editAirtime = (airtime:airtime) =>{
        onChange('edit', airtime, 'airtime')
    }

    let [deleteProduct, {isLoading:loadingDelete, isSuccess}] = useDeleteProductMutation()
    const deleteHandler = async (id:any) =>{
        setProductToDelete(id)
        try{
            let deleteResult = deleteProduct({
                model:"airtime",
                product_id:id
            }).unwrap()
            let result = await deleteResult
        }
        catch(err){

        }
    }

    return (
        <div className="w-full">
            <div className="flex items-center justify-between">
                <p>All Airtime Products</p>
                {/* <button>Add new Products</button> */}
            </div>

            <div className="border rounded-lg mt-2">
            <table className="w-full">
                <thead className="bg-gray_50 text-gray_600 rounded-t-lg">
                    <tr>
                        <th className={thClass}>Date</th>
                        <th className={thClass}>Name</th>
                        <th className={thClass}>Provider</th>
                        <th className={thClass}>Status</th>
                        <th className={thClass}>Cost Price</th>
                        <th className={thClass}>Selling Price</th>
                        <th className={thClass}></th>
                    </tr>
                </thead>
                <tbody>
                    {allAirtimes?.map((airtime:airtime)=>{
                        return (
                            <tr  className="border-t border-collapse border-x-0" key={airtime.name}>
                                <td className={tdClass}>
                                    <div>{dateConverter(airtime.createdAt)}</div>
                                </td>
                                <td className={tdClass}>
                                    <div className="flex gap-3 items-center">
                                        <div className="w-10 h-10 rounded flex items-center justify-center border">
                                            <BagIcon/>
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium">{airtime.name}</p>
                                            <p className="text-sm">{airtime.description}</p>
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
                                    <div className="flex gap-4 items-center">
                                        <div className="cursor-pointer" onClick={()=>editAirtime(airtime)}><PencilIcon/></div>
                                        <div className="cursor-pointer" aria-label="Delete" onClick={()=>deleteHandler(airtime.product_id)}>
                                            {loadingDelete && productToDelete===airtime.product_id ? <Loader/> : <DeleteIcon/>}
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default AirtimeTable