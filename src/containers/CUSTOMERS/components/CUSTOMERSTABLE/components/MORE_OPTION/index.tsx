import React, {useState, useEffect} from "react";
import { SwitchToggle } from "@/components/SWITCH";
import { RiMore2Fill, RiDownloadLine } from "react-icons/ri";
// ${styles.blur2fade}

export const MoreOption = () =>{
    const [showOptions, setShowOptions] = useState(false)

    const itemsClass="flex items-center justify-between font-semibold text-xs text-gray_400 border border-neutral_200 px-3 py-2 rounded-lg"

    useEffect(()=>{
        if(typeof window !== "undefined"){
            let elem = document.querySelector('.customers-more') as HTMLElement
        
            window.addEventListener('click', (e:MouseEvent)=>{
                let target = e.target as HTMLElement
                if(!elem?.contains(target)){
                    setShowOptions(false)
                }
            })
        }
    }, [])

    return (
        <div className={`inline-flex float-right w-9 h-9 rounded-5px border border-neutral_200 items-center justify-center relative blur2fade customers-more`}>
            <RiMore2Fill className="text-gray_400" onClick={()=>setShowOptions(!showOptions)}/>

            {showOptions && <div className="absolute top-10 right-0 w-60 p-2 rounded-[12px] border border-neutral_200 bg-white space-y-2 blur2fade">
                <div className={itemsClass}>
                    <p>Show Flagged account</p>
                    <SwitchToggle/>
                </div>

                <div className={itemsClass}>
                    <p>Show Suspended account</p>
                    <SwitchToggle/>
                </div>

                <div className={itemsClass}>
                    <p>Show Disabled account</p>
                    <SwitchToggle/>
                </div>

                <div className={itemsClass}>
                    <p>Download Customers data</p>
                    <RiDownloadLine size={16}/>
                </div>
            </div>}
        </div>
    )
}