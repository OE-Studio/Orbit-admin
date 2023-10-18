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
        const contRef = useRef<HTMLDivElement>(null)
        const [inputType, setInputType] = useState(type)
        const [showPassword, setShowPassword] = useState(false)
        const [focused, setFocused] = useState(false)
        const [showError, setShowError] = useState(false)

        const checkValue=(e:any)=>{
            if(!e.target.value){
                contRef.current?.classList.remove('border-neutral_200')
                contRef.current?.classList.add('border-red_500')
                setShowError(true)
                setFocused(false)
            }
            else{
                contRef.current?.classList.remove('border-red_500')
                contRef.current?.classList.add('border-neutral_200')
                setShowError(false)
                setFocused(true)
            }
        }

        useEffect(()=>{
            if(value || value === 0){
                setFocused(true)
            }

            if (type === "password" && showPassword){
                setInputType("text")
            }
            else if(type === "password" && !showPassword) {
                setInputType("password")
            }
            else setInputType(type)
            
        }, [type, showPassword, value])

        useImperativeHandle(ref, ()=> inputRef.current!)


        return (
            <div>
                <div ref={contRef} className={`relative z-0 w-full pt-4 border border-neutral_200 rounded-lg ${className}`}>
                    <input 
                        type={inputType} 
                        name={name}
                        placeholder=" "
                        className={`h-11 pb-1 block w-full px-4 bg-transparent appearance-none focus:outline-none focus:ring-0 text-gray_500 text-sm`}
                        ref={inputRef}
                        onFocus={()=>setFocused(true)}
                        onBlur={checkValue}
                        onChange={onChange}
                        value={value}
                        {...props}
                    />
                    <label 
                        className={`ml-2 transition-all absolute duration-300 -z-1 origin-0 text-sm text-text_100 ${focused ? "top-1" : "top-4 flex items-center"}`}   
                        htmlFor={name}
                        onClick={() => inputRef.current?.focus()}
                    >
                        &nbsp; {label}{" "}<span className="text-red_500 text-xs">{showError && 'Field is required'}</span>
                    </label>
                </div>
            </div>
        )
    }
)

Input.displayName = "Input"

export default Input