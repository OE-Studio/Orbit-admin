import React from "react";
import styles from './switch.module.css'

export const SwitchToggle = () =>{
    return (
        <label className={styles.switch}>
            <input type="checkbox"/>
            <span className={`${styles.slider} ${styles.round}`}></span>
        </label>
    )
}