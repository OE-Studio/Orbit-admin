import React from "react";
import {SuccessIcon} from "../../assets/icons";
import {FailedIcon} from "../../assets/icons";


const Notification = ({title, text, status}:{title:string, text:string, status:string}) =>{
    if(status === "success"){
        return (
            <div className="fixed alert top-8 left-0 right-0 flex items-center justify-center z-40 ">
                <div className="bg-white rounded-lg mx-auto text-gray_300 border border-new_green_600 inline-flex  items-center p-6 bg-lightGreen gap-4 h-full shadow-lg w-[580px]">
                    <SuccessIcon/>
                    <div>
                        <p className="text-black">{title}</p>
                        <p className="text-text_100 mt-2">{text}</p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="fixed alert top-8 left-0 right-0 flex items-center justify-center z-40">
                <div className="bg-white rounded-lg mx-auto text-gray_300  border border-red_500 inline-flex  items-center p-6 bg-lightOrange gap-4 h-full shadow-lg  w-[580px]">
                    <FailedIcon/>
                    <div>
                        <p className="text-black">{title}</p>
                        <p className="text-text_100 mt-2">{text}</p>
                    </div>
                </div>
            </div>
    )
}

export default Notification