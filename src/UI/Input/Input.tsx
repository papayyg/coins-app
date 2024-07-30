import React from "react";
import styles from "./Input.module.scss";

interface InputProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
}

const Input: React.FC<InputProps> = ({ label, value, onChange }) => {
    return (
        <div className={styles.container}>
            <label className={styles.label}>{label}</label>
            <input
                className={styles.input}
                type="text"
                value={value}
                onChange={(event) => onChange(event.target.value)}
            />
        </div>
    );
};

export default Input;
