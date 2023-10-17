import React, {useEffect, useState, useImperativeHandle, useRef, ChangeEvent} from "react"

type InputProps = {
    touched?:Record<string, unknown>,
    label:string,
    errors?:Record<string, unknown>,
    name:string,
    className?:string,
    onChange:(e:ChangeEvent<HTMLInputElement>)=>void
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "placeholder">

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({type, label, errors, name, required, className, onChange, value, ...props}, ref)=>{
        const inputRef = useRef<HTMLInputElement>(null)
        const [inputType, setInputType] = useState(type)
        const [showPassword, setShowPassword] = useState(false)
        const [focused, setFocused] = useState(false)

        const checkValue=(e:any)=>{
            if(!e.target.value){
                setFocused(false)
            }
            else{
                setFocused(true)
            }
        }

        useEffect(()=>{
            if(value){
                setFocused(true)
            }

            if (type === "password" && showPassword){
                setInputType("text")
            }
            else if(type === "password" && !showPassword) {
                setInputType("password")
            }
            
        }, [type, showPassword, value])

        useImperativeHandle(ref, ()=> inputRef.current!)


        return (
            <div>
                <div className={`relative z-0 w-full pt-4 border border-neutral_200 rounded-lg ${className}`}>
                    <input 
                        type={inputType} 
                        name={name}
                        placeholder=" "
                        className={`h-11 pb-1 block w-full px-2 bg-transparent appearance-none focus:outline-none focus:ring-0 text-gray_500`}
                        ref={inputRef}
                        onFocus={()=>setFocused(true)}
                        onBlur={checkValue}
                        onChange={onChange}
                        value={value}
                        {...props}
                    />
                    <label 
                        className={`ml-2 transition-all absolute duration-300 -z-1 origin-0 text-text_100 ${focused ? "top-1" : "top-4"}`}   
                        htmlFor={name}
                        onClick={() => inputRef.current?.focus()}
                    >
                        {label}
                    </label>
                </div>
            </div>
        )
    }
)

Input.displayName = "Input"

export default Input