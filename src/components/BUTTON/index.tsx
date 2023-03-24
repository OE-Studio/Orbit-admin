import React, {useState, useEffect, FunctionComponent,MouseEventHandler} from "react";

interface buttonType {
    text:string,
    icon?: keyof JSX.IntrinsicElements,
    onClick: MouseEventHandler
}

const Button:FunctionComponent<buttonType>=({text, onClick})=> {
    return (
        <button onClick={onClick}>
            {text}
        </button>
    )
}

export default Button