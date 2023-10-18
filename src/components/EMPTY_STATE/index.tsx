import {GreenDocument} from "../../assets/icons"

export const EmptyState = ({title}:{title:string})=>{
    return(
        <tr className="w-full">
            <td style={{display: 'table-cell'}} colSpan={7} className="w-full h-60 flex flex-col items-center justify-center gap-4 text-center">
                <div className="mx-auto flex justify-center">
                    <GreenDocument/>
                </div>
                <div className="text-text_100 text-sm mt-4 font-clash-medium">No {title} recorded</div>
            </td>
        </tr>
    )
}