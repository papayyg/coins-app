import React from "react";
import styles from "./Loader.module.scss";

const Spinner: React.FC = () => {
    return (
        <div className={styles.spinner}>
            <div className={styles.bounce1}></div>
            <div className={styles.bounce2}></div>
        </div>
    );
};

export default Spinner;
