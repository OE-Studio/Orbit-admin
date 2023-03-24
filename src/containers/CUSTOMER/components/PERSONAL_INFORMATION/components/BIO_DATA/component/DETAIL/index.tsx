import React, {FunctionComponent, ReactNode} from "react";
import { Verified } from "@/assets/icons";

interface detailProps{
    width:string,
    title:string,
    value:string,
    verified?:ReactNode
}

const Detail:FunctionComponent<detailProps> = ({width, title, value, verified}) =>{
    return (
        <div className={`border border-neutral_200 rounded-lg p-[10px] space-y-2 flex items-center justify-between ${width}`}>
            <div>
                <p className="text-xs text-text_100">{title}</p>
                <p className="text-gray_500 mt-2">{value}</p>
            </div>

            {verified && <div>
                <Verified/>
            </div>}
        </div>
    )
}

export default Detail