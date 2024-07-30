import React, { useState } from "react";
import Arrow from "../../assets/svg/Arrow";
import styles from "./FilterExpand.module.scss";

interface FilterExpandProps {
    isOpen: boolean;
    handleClick: () => void;
}

const FilterExpand: React.FC<FilterExpandProps> = ({ isOpen, handleClick }) => {
    return (
        <div className={styles.container} onClick={handleClick}>
            <p className={styles.text}>Advanced filter</p>
            <Arrow style={!isOpen ? { transform: "rotate(180deg)" } : {}} />
        </div>
    );
};

export default FilterExpand;
