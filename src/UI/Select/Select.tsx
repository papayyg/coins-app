import React from "react";
import styles from "./Select.module.scss";

interface Option {
    value: string;
    label: string;
}

interface SelectProps {
    label: string;
    options: Option[];
    value: string;
    onChange: (value: string) => void;
}

const Select: React.FC<SelectProps> = ({ label, options, value, onChange }) => {
    return (
        <div className={styles.container}>
            <label className={styles.label}>{label}</label>
            <select
                className={styles.select}
                onChange={(event) => onChange(event.target.value)}
                value={value}
            >
                {options.map((option: Option) => (
                    <option key={option.value} value={option.value} className={styles.option}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Select;
