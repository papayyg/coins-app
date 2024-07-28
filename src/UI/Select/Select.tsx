import React, { useState } from "react";
import styles from "./Select.module.scss";

interface Option {
    value: string;
    label: string;
}

interface SelectProps {
    label: string;
    options: Option[];
}

const Select: React.FC<SelectProps> = ({ label, options }) => {
    const [selectedValue, setSelectedValue] = useState<string>("");

    return (
        <div className={styles.container}>
            <label className={styles.label}>{label}</label>
            <select
                className={styles.select}
                onChange={(event) => setSelectedValue(event.target.value)}
                value={selectedValue}
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
