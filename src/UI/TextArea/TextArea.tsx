import React from "react";
import styles from "./TextArea.module.scss";

interface TextAreaProps {
    label: string;
	value: string;
    onChange: (value: string) => void;
}

const TextArea: React.FC<TextAreaProps> = ({ label, value, onChange }) => {
    return (
        <div className={styles.container}>
            <label>{label}</label>
            <textarea value={value} onChange={(event) => onChange(event.target.value)} />
        </div>
    );
};

export default TextArea;
