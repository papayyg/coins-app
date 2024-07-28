import React from "react";
import styles from "./CoinCard.module.scss";

interface CoinCardProps {
    title: string;
    descr: string;
    img: string;
}

const CoindCard: React.FC<CoinCardProps> = ({ title, descr, img }) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardImg}>
                <img src={img} alt="coin" />
            </div>
            <div className={styles.cardInfo}>
                <h4 className={styles.cardTitle}>{title}</h4>
                <p className={styles.cardDescr}>{descr}</p>
            </div>
        </div>
    );
};

export default CoindCard;
