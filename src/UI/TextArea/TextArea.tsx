import React from "react";
import styles from "./TextArea.module.scss";

interface TextArea {
    label: string;
}

const TextArea: React.FC<TextArea> = ({ label }) => {
    return (
        <div className={styles.container}>
            <label>{label}</label>
            <textarea />
        </div>
    );
};

export default TextArea;
