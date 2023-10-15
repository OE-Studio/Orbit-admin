import React, {createContext, useContext, ReactNode, MouseEventHandler, useState} from "react";

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
const Tab = (props:Tab) =>{
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
        <div className={`inline-flex gap-4 text-xs border-b border-neutral_200`}>{children}</div>
    )
}

const Item=({label, index}:{label:string, index:number})=>{
    const {currentTab, onChange} = useContext(TabContext)

    const handleChange = () =>{
        onChange(index)
    }

    const checkActive = currentTab === index ? "border-b-2 border-new_green_700 text-new_green_700":"text-[#667085]"

    return (
        <div className={`pb-3 font-semibold cursor-pointer ${checkActive}`} onClick={handleChange}>
            {label}
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

Tab.displayName = "Tab"
Tab.ContentContainer = ContentContainer
Tab.Item = Item
Tab.ContentItem = ContentItem
Tab.HeadsContainer = HeadsContainer

export default Tab
