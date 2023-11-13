import React, {ChangeEvent} from "react";
import styles from './switch.module.css'


export const SwitchToggle = (props:{
    defaultChecked:boolean,
    onChange(e:ChangeEvent):void,
    name:string
}) =>{
    return (
        <label className={styles.switch}>
            <input onChange={props.onChange} type="checkbox" checked={props.defaultChecked} name={props.name}/>
            <span className={`${styles.slider} ${styles.round}`}></span>
        </label>
    )
}