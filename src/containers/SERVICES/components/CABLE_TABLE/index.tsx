import { useGetCableQuery } from "@/slices/SERVICES_SLICE/servicesApiSlice"
import { PencilIcon, BagIcon } from "@/assets/icons"

interface airtime {
    name:string,
    description:string,
    provider_name:string,
    status:string
}

const CableTable = () =>{
    const tdClass = `px-6 py-4`
    let thClass = `px-6 py-4 text-left font-normal text-xs`

    const {data:allCable, isLoading} = useGetCableQuery(null)
    console.log(allCable)

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
                        <th className={thClass}>Tiers</th>
                        <th className={thClass}></th>
                    </tr>
                </thead>
                <tbody>
                    {allCable?.cableProducts?.map((airtime:airtime)=>{
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
                                    <div>{airtime.status}</div>
                                </td>
                                <td className={tdClass}>
                                    <div>T1-500</div>
                                </td>
                                <td className={tdClass}>
                                    <div><PencilIcon/></div>
                                </td>
                            </tr>
                        )
                    })}
                    {/* <tr>
                        <td className={tdClass}>
                            <div>{airtime.name}</div>
                        </td>
                        <td className={tdClass}>
                            <div>{airtime.provider_name}</div>
                        </td>
                        <td className={tdClass}>
                            <div>{airtime.status}</div>
                        </td>
                        <td className={tdClass}>
                            <div>T1-500</div>
                        </td>
                        <td className={tdClass}>
                            <div>Pen</div>
                        </td>
                    </tr> */}
                </tbody>
            </table>
        </div>
    )
}

export default CableTable