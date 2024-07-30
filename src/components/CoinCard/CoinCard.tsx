import React from "react";
import styles from "./CoinCard.module.scss";
import { Link } from "react-router-dom";

interface CoinCardProps {
    title: string;
    descr: string;
    img: string;
    link: string;
}

const CoindCard: React.FC<CoinCardProps> = ({ title, descr, img, link }) => {
    return (
        <Link to={link} className={styles.card}>
            <div className={styles.cardImg}>
                <img src={img} alt="coin" />
            </div>
            <div className={styles.cardInfo}>
                <h4 className={styles.cardTitle}>{title}</h4>
                <p className={styles.cardDescr}>{descr}</p>
            </div>
        </Link>
    );
};

export default CoindCard;
