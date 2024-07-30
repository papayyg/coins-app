import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFilterState } from "../../hooks/useFilterState";
import { FilterSection, SearchField } from "../../../../components";
import { useFilterStore } from "../../store/useFilterStore";

import styles from "./SearchAndFilter.module.scss";
import { useSearchQueryStore } from "../../../../store/searchQuery";

const SearchAndFilter = () => {
    const {
        storeQuery,
        country,
        changeQuery,
        changeCountry,
        changeMetal,
        changeQuality,
        changePriceFrom,
        changePriceTo,
        changeYearFrom,
        changeYearTo,
    } = useSearchQueryStore((state) => ({
        storeQuery: state.storeQuery,
        country: state.country,
        changeQuery: state.changeQuery,
        changeCategory: state.changeCategory,
        changeCountry: state.changeCountry,
        changeMetal: state.changeMetal,
        changeQuality: state.changeQuality,
        changePriceFrom: state.changePriceFrom,
        changePriceTo: state.changePriceTo,
        changeYearFrom: state.changeYearFrom,
        changeYearTo: state.changeYearTo,
    }));

    const navigate = useNavigate();
    const { filterIsOpen } = useFilterStore();
    const [query, setQuery] = useState("");
    const filterProps = useFilterState();

    const handleSearch = () => {
        changeQuery(query);
        if (filterProps.country) changeCountry(filterProps.country);
        if (filterProps.metal) changeMetal(filterProps.metal);
        if (filterProps.quality) changeQuality(filterProps.quality);
        if (filterProps.priceFrom) changePriceFrom(filterProps.priceFrom);
        if (filterProps.priceTo) changePriceTo(filterProps.priceTo);
        if (filterProps.yearFrom) changeYearFrom(filterProps.yearFrom);
        if (filterProps.yearTo) changeYearTo(filterProps.yearTo);

        navigate("/coins");
        window.location.reload();
    };

    useEffect(() => {
        setQuery(storeQuery);
        filterProps.setCountry(country);
    }, []);

    return (
        <div className={styles.container}>
            <SearchField query={query} setQuery={setQuery} onSearch={handleSearch} />
            <div className={`${styles["filter-container"]} ${filterIsOpen ? styles.open : ""}`}>
                <FilterSection {...filterProps} />
            </div>
        </div>
    );
};

export default SearchAndFilter;
