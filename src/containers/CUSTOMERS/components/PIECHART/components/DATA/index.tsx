import React, {FunctionComponent} from "react";

interface propTypes {
    text:string,
    value:number,
    color:string
}

const ChartData:FunctionComponent<propTypes> = ({text, value, color}) =>{
    return (
        <div className="flex items-center justify-between w-full">
            <div className="inline-flex gap-3 items-center">
                <div className={`w-2 h-2 rounded-full inline-block ${color}`}></div>
                <div>{text}</div>
            </div>

            <div className="inline-block">{value}%</div>
        </div>
    )
}

export default ChartData