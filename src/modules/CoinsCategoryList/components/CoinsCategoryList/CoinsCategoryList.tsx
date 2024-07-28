import React from "react";
import styles from "./CoinsCategoryList.module.scss";

import { CoinCategory } from "../../../../components";

import Bullion from "../../../../assets/images/bullion.png";
import Exclusive from "../../../../assets/images/exclusive.png";
import Commemorative from "../../../../assets/images/commemorative.png";

const CoinsCategoryList: React.FC = () => {
    return (
        <div className={styles.container}>
            <CoinCategory title="Bullion coins" img={Bullion} link="" />
            <CoinCategory title="Exclusive coins" img={Exclusive} link="" />
            <CoinCategory title="Commemorative coins" img={Commemorative} link="" />
        </div>
    );
};

export default CoinsCategoryList;
