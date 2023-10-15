import React, {createContext, useContext, ReactNode, MouseEventHandler, useState} from "react";
import styles from './index.module.css'

interface TabContextValue{
    onChange(event: number): void,
    currentTab:number
}

const TabContext = createContext<TabContextValue>(
    {
        onChange(){},
        currentTab:1
    }
)

interface Tab {
    currentTab:number,
    children:ReactNode
}
const CustomersTab = (props:Tab) =>{
    const [currentTab, setCurrentTab] = useState(1)

    const onChange=(index:number) =>{
        setCurrentTab(index)
    }

    return (
        <div>
            <TabContext.Provider value={{onChange, currentTab}}>
                {props.children}
            </TabContext.Provider>
        </div>
    )
}

const HeadsContainer = ({children}:{children:ReactNode})=>{
    return (
        <div className={`inline-flex gap-2 text-xs`}>{children}</div>
    )
}

const Item=({label, index, number}:{label:string, index:number, number:number})=>{
    const {currentTab, onChange} = useContext(TabContext)

    const handleChange = () =>{
        onChange(index)
    }

    const checkActive = currentTab === index ? styles.blur3 : "text-[#667085]"

    return (
        <div className={`flex items-center px-3 py-2 gap-2 cursor-pointer font-semibold rounded-[6px] ${checkActive}`} onClick={handleChange}>
            {label}
            <div className="bg-gray_100 px-2 py-0.5 rounded-full text-[#344054] text-[10px]">{number}</div>
        </div>
    )
}

const ContentContainer = ({children}:{children:ReactNode})=>{
    return (
        <div>
            {children}
        </div>
    )
}

const ContentItem = ({index, children}:{index:number, children:ReactNode})=>{
    const {currentTab} = useContext(TabContext)
    return index === currentTab ? <div>{children}</div> : null 
}

CustomersTab.ContentItem = ContentItem
CustomersTab.Item = Item
CustomersTab.HeadsContainer = HeadsContainer
CustomersTab.ContentContainer = ContentContainer

CustomersTab.displayName = "CustomersTab"

export default CustomersTab
