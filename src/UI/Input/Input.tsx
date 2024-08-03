import React from "react";
import styles from "./Input.module.scss";

interface InputProps {
    label: string;
    value: string | number;
    type?: string;
    onChange: (value: string) => void;
}

const Input: React.FC<InputProps> = ({ label, value, type = "text", onChange }) => {
    return (
        <div className={styles.container}>
            <label className={styles.label}>{label}</label>
            <input
                className={styles.input}
                type={type}
                value={value}
                onChange={(event) => onChange(event.target.value)}
            />
        </div>
    );
};

export default Input;
