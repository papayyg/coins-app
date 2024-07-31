import React from "react";

import { CoinCategory } from "../../../../components";

import { useSearchQueryStore } from "../../../../store/searchQuery";
import { useCoinCategories } from "../../queries/useCoinCategories";

import styles from "./CoinsCategoryList.module.scss";
import { useNavigate } from "react-router-dom";
import { Loader } from "../../../../UI";

const CoinsCategoryList: React.FC = () => {
    const navigate = useNavigate();
    const { data, error, isLoading } = useCoinCategories();
    const { changeCategory, changeCount, changePageNumber } = useSearchQueryStore();

    if (isLoading) {
        return <Loader />;
    }

    if (error instanceof Error) {
        return <div>Error: {error.message}</div>;
    }

    const handleClick = (name: string) => {
        changeCategory(name);
        changeCount(6);
        changePageNumber(1);
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
