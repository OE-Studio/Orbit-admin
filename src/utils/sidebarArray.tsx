import React, {ReactNode} from "react"

import { HomeFilled, UsersFilled } from "@/assets/icons"

interface sidebar {
    activeIcon:JSX.Element,
    inActiveIcon:JSX.Element,
    text:string,
    url:string,
    count?:number
}

export const sidebarArray:Array<sidebar> = [
    {
        activeIcon:<HomeFilled/>,
        inActiveIcon:<HomeFilled/>,
        text:"Home",
        url:"/overview",
        count:400
    },
    {
        activeIcon:<UsersFilled/>,
        inActiveIcon:<HomeFilled/>,
        text:"Customers",
        url:"/customers"
    },
    {
        activeIcon:<HomeFilled/>,
        inActiveIcon:<HomeFilled/>,
        text:"Customers",
        url:"/dashboard"
    }
]