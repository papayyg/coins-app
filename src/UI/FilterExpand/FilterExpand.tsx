import React, { useState } from "react";
import Arrow from "../../assets/svg/Arrow";
import styles from "./FilterExpand.module.scss";

interface FilterExpandProps {
    opened: boolean;
}

const FilterExpand: React.FC<FilterExpandProps> = ({ opened }) => {
    const [isOpen, setIsOpen] = useState<boolean>(opened);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.container} onClick={handleClick}>
            <p className={styles.text}>Advanced filter</p>
            <Arrow style={isOpen ? { transform: "rotate(180deg)" } : {}} />
        </div>
    );
};

export default FilterExpand;
