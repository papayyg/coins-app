import React from "react";
import styles from "./Input.module.scss";

interface InputProps {
    label: string;
}

const Input: React.FC<InputProps> = ({ label }) => {
    return (
        <div className={styles.container}>
            <label className={styles.label}>{label}</label>
            <input className={styles.input} type="text" />
        </div>
    );
};

export default Input;
