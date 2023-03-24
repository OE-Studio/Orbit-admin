import React from "react";
import BioData from "./components/BIO_DATA";
import MetaData from "./components/META_DATA";

const PersonalInformation = () =>{
    return (
        <div className="grid grid-cols-3 gap-8">
            <BioData/>
            <MetaData/>
        </div>
    )
}

export default PersonalInformation