import React from "react";
import styles from "./TextArea.module.scss";

interface TextAreaProps {
    label: string;
}

const TextArea: React.FC<TextAreaProps> = ({ label }) => {
    return (
        <div className={styles.container}>
            <label>{label}</label>
            <textarea />
        </div>
    );
};

export default TextArea;
