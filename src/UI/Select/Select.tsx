import React from "react";
import styles from "./Select.module.scss";

interface SelectProps {
    label: string;
    options?: string[];
    value: string;
    onChange: (value: string) => void;
}

const Select: React.FC<SelectProps> = ({ label, options, value, onChange }) => {
    return (
        <div className={styles.container}>
            <label className={styles.label}>{label}</label>
            <select className={styles.select} onChange={(event) => onChange(event.target.value)} value={value}>
                <option value="" className={styles.option}></option>
                {options?.map((option: string) => (
                    <option key={option} value={option} className={styles.option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Select;
