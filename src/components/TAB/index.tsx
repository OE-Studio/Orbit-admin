import React, {createContext, useContext} from "react";

const TabContext = createContext(null)

const Tab = ({currentTab, onChange, children}) =>{
    return (
        <div>
            <TabContext.Provider value={{onChange, currentTab}}>
                {children}
            </TabContext.Provider>
        </div>
    )
}

Tab.HeadsContainer = ({children})=>{
    return (
        <div className={`inline-flex gap-4 text-xs border-b border-neutral_200`}>{children}</div>
    )
}

Tab.Item=({label, index})=>{
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

Tab.ContentContainer = ({children})=>{
    return (
        <div>
            {children}
        </div>
    )
}

Tab.ContentItem = ({index, children})=>{
    const {currentTab} = useContext(TabContext)
    return index === currentTab ? <div>{children}</div> : null 
    
}

export default Tab
