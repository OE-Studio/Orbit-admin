import React, {ReactNode} from "react"

import { HomeFilled, UsersFilled } from "@/assets/icons"

import {RiHome6Fill, RiTeamFill, RiBankFill} from "react-icons/ri"

interface sidebar {
    activeIcon:JSX.Element,
    text:string,
    url:string,
    count?:number
}

export const sidebarArray:Array<sidebar> = [
    {
        activeIcon:<RiHome6Fill/>,
        text:"Home",
        url:"/overview",
        count:400
    },
    {
        activeIcon:<RiTeamFill/>,
        text:"Customers",
        url:"/customers"
    },
    {
        activeIcon:<RiBankFill/>,
        text:"Finance",
        url:"/finance"
    }
]