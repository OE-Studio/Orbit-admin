import React, {createContext, FunctionComponent, ReactNode, MouseEventHandler, useContext, useState} from "react";
import { CalendarOutline, ArrowRight } from "@/assets/icons";

const SelectContext = createContext({
    showOption:false,
    value:""
})

interface childrenType {
    children:ReactNode,
    currentOption:string,
    onChange:MouseEventHandler,
}

const Select:FunctionComponent<childrenType> = ({children}) =>{
    const [showOption, setShowOption] = useState(false)
    const [value, setValue] = useState("Today")

    const toggleOption = (isShown:boolean)=>{
        setShowOption(!isShown)
    }

    const changeValue = (value:string)=>{
        setValue(value)
    }

    return (
        <div>
            <SelectContext.Provider value={{showOption, value, toggleOption, changeValue}}>
                {children}
            </SelectContext.Provider>
        </div>
    )
}

interface ContainerProps {
    children: ReactNode;
}

const Container:FunctionComponent<ContainerProps> = ({children}) =>{
    const {value, showOption, toggleOption} = useContext(SelectContext)
    return (
        <div className="relative">
            <div className="h-9 inline-flex border border-neutral_200 rounded-lg px-3 items-center gap-2 bg-neutral_100 text-gray_400 cursor-pointer" onClick={()=>toggleOption(showOption)}>
                <CalendarOutline/>
                {value}
            </div>
            {showOption && <div className="bg-white rounded-[12px] p-2 inline-block space-y-2 drop-shadow-md absolute top-12 right-0">
                {children}
            </div>}
        </div>
    )
}

interface OptionProps {
    label: string;
    index:number,
    children?:ReactNode
}
const Option:FunctionComponent<OptionProps> = ({label, index})=>{
    const {changeValue, toggleOption, showOption} = useContext(SelectContext)
    return (
        <div 
            className="border border-neutral_200 rounded-lg px-3 py-2 w-40 cursor-pointer hover:bg-neutral_100" 
            onClick={()=>{
                changeValue(label)
                toggleOption(showOption)
            }}>
                {label}
        </div>
    )
}

const ComplexOption:FunctionComponent<OptionProps> = ({label, index, children})=>{
    const {changeValue, toggleOption, showOption} = useContext(SelectContext)

    const [showChildren, setShowChildren] = useState(false)
    return (
        <div 
            className="border border-neutral_200 rounded-lg px-3 py-2 w-40 cursor-pointer hover:bg-neutral_100 flex items-center justify-between" 
            onClick={()=>{
                // changeValue(label)
                setShowChildren(!showChildren)
                // toggleOption(showOption)
            }}>
                {label}
                <ArrowRight/>

                {showChildren && <div className="absolute top-0 -left-full bg-white">
                    {children}
                </div>}
        </div>
    )
}

Select.Container = Container
Select.Option = Option
Select.ComplexOption = ComplexOption

export default Select