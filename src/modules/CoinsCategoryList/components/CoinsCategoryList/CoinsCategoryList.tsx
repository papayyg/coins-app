import React from "react";

import { CoinCategory } from "../../../../components";

import { useSearchQueryStore } from "../../../../store/searchQuery";
import { useCoinCategories } from "../../queries/useCoinCategories";

import styles from "./CoinsCategoryList.module.scss";
import { useNavigate } from "react-router-dom";

const CoinsCategoryList: React.FC = () => {
    const navigate = useNavigate();
    const { data, error, isLoading } = useCoinCategories();
    const { changeCategory } = useSearchQueryStore();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error instanceof Error) {
        return <div>Error: {error.message}</div>;
    }

    const handleClick = (name: string) => {
        changeCategory(name);
        navigate("/coins");
    };

    return (
        <div className={styles.container}>
            {data?.map((category, index) => (
                <CoinCategory
                    key={index}
                    name={category.name}
                    img={category.obverseImageLink}
                    handleClick={handleClick}
                />
            ))}
        </div>
    );
};

export default CoinsCategoryList;
