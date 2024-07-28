import React from "react";
import styles from "./FromTo.module.scss";

interface FromToProps {
    label: string;
    from: string;
    to: string;
    onChangeFrom: (value: string) => void;
    onChangeTo: (value: string) => void;
}
const FromTo: React.FC<FromToProps> = ({ label, from, to, onChangeFrom, onChangeTo }) => {
    const handleFromChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChangeFrom(e.target.value);
    };

    const handleToChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChangeTo(e.target.value);
    };

    return (
        <div className={styles.container}>
            <label className={styles.label}>{label}</label>
            <div className={styles.wrapper}>
                <div className={styles.inputBox}>
                    <p className={styles.text}>from</p>
                    <input
                        className={styles.input}
                        type="text"
                        value={from}
                        onChange={handleFromChange}
                    />
                </div>
                <div className={styles.inputBox}>
                    <p className={styles.text}>to</p>
                    <input
                        className={styles.input}
                        type="text"
                        value={to}
                        onChange={handleToChange}
                    />
                </div>
            </div>
        </div>
    );
};

export default FromTo;
