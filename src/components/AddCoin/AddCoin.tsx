import React from "react";
import styles from "./AddCoin.module.scss";
import Circle from "../../assets/svg/Circle";
import { Link } from "react-router-dom";

const AddCoin: React.FC = () => {
    return (
        <div className={styles.container}>
            <Link to="/admin/coins/edit" className={styles.img}>
                <Circle />
            </Link>
            <Link to="/admin/coins/edit" className={styles.link}>Add a new coin</Link>
        </div>
    );
};

export default AddCoin;
