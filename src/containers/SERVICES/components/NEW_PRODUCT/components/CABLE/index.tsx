import React, {useState, ChangeEvent} from "react";
import Input from "../../../../../../components/INPUT";
import {useNewCableMutation} from "@/slices/SERVICES_SLICE/servicesApiSlice"
import { useDispatch } from "react-redux";

const NewCable = () =>{
    const [values, setValues] = useState({
        name:"",
        description:"",
        plan_type:"",
        provider_name:"",
        provider_id:"",
        validity:"",
        cost_price:0,
        selling_price:0,
        cable_type:"",
        product_id:""
    })
    const changeHandler = (e:ChangeEvent<HTMLInputElement>) =>{
        setValues(prev=>{
            return {...prev, [e.target.name]:e.target.value}
        })
    }

    let [newCable, {isLoading, isSuccess}] = useNewCableMutation()

    const createCable = async (e:any)=>{
        e.preventDefault()
        try{
            let cable =  await newCable(values).unwrap()
            let result = await cable
            console.log(result)
        }
        catch(err){

        }
    }
    return (
        <div>
            <form action="">
            <Input 
                label="Name" 
                required={true} 
                name="name"
                className="mt-4"
                value={values.name}
                onChange={changeHandler}
            />
            <Input 
                label="Description" 
                required={true} 
                name="description"
                className="mt-4"
                value={values.description}
                onChange={changeHandler}
            />
            <Input 
                label="Product ID" 
                required={true} 
                name="product_id"
                className="mt-4"
                value={values.product_id}
                onChange={changeHandler}
            />
            <Input 
                label="Plan type" 
                required={true} 
                name="plan_type"
                className="mt-4"
                value={values.plan_type}
                onChange={changeHandler}
            />
            <Input 
                label="Cable type" 
                required={true} 
                name="cable_type"
                className="mt-4"
                value={values.cable_type}
                onChange={changeHandler}
            />
            <Input 
                label="Provider Name" 
                required={true} 
                name="provider_name"
                className="mt-4"
                value={values.provider_name}
                onChange={changeHandler}
            />
            <Input 
                label="Provider ID" 
                required={true} 
                name="provider_id"
                className="mt-4"
                value={values.provider_id}
                onChange={changeHandler}
            />
            <Input 
                label="Validity" 
                required={true} 
                name="validity"
                className="mt-4"
                value={values.validity}
                onChange={changeHandler}
            />

            <div className="flex items-center justify-between gap-4">
                <Input 
                    label="Cost Price" 
                    required={true} 
                    name="cost_price"
                    className="mt-4"
                    value={values.cost_price}
                    onChange={changeHandler}
                />
                <Input 
                    label="Selling Price" 
                    required={true} 
                    name="selling_price"
                    className="mt-4"
                    value={values.selling_price}
                    onChange={changeHandler}
                />
            </div>

            <button className="btn-black rounded-lg h-11 flex items-center justify-center gap-2 w-full mt-6 font-semibold text-base" onClick={createCable}>Create</button>
            </form>
        </div>
    )
}

export default NewCable

// product_id: DataTypes.STRING,
//     name: DataTypes.STRING,
//     description: DataTypes.STRING,
//     cost_price: DataTypes.DOUBLE,
//     selling_price: DataTypes.DOUBLE,
//     validity: DataTypes.STRING,
//     plan_type: DataTypes.STRING,
//     provider_id: DataTypes.STRING,
//     provider_name: DataTypes.STRING,
//     status: {
//       type: DataTypes.ENUM('active', 'inactive'),
//       defaultValue: 'active'
//     },
//     value: DataTypes.STRING