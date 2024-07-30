import React from "react";
import styles from "./CoinCategory.module.scss";

interface CoinCategoryProps {
    name: string;
    img: string;
    handleClick: (name: string) => void;
}

const CoinCategory: React.FC<CoinCategoryProps> = ({ name, img, handleClick }) => {
    return (
        <div className={styles.category}>
            <h3 className={styles.categoryTitle}>{name}</h3>
            <p className={styles.categoryMore} onClick={() => handleClick(name)}>
                Show all
            </p>
            <div className={styles.categoryImg}>
                <img src={img} alt="coin" />
            </div>
        </div>
    );
};

export default CoinCategory;
