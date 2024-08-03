import { useLocation, useNavigate } from "react-router-dom";
import { FilterSection, SearchField } from "../../../../components";
import { useFilterStore } from "../../store/useFilterStore";

import styles from "./SearchAndFilter.module.scss";
import { useSearchQueryStore } from "../../../../store/searchQuery";
import { useQueryClient } from "@tanstack/react-query";

const SearchAndFilter = () => {
    const { storeQuery, changeQuery, changeCategory, ...changeFilters } = useSearchQueryStore((state) => state);

    const navigate = useNavigate();
    const location = useLocation();
    const { filterIsOpen } = useFilterStore();
    const queryClient = useQueryClient();

    const handleSearch = () => {
        changeCategory("");
        if (location.pathname === "/") navigate("/coins");
        queryClient.invalidateQueries({ queryKey: ["coinList"] });
    };

    return (
        <div className={styles.container}>
            <SearchField query={storeQuery} setQuery={changeQuery} onSearch={handleSearch} />
            <div className={`${styles["filter-container"]} ${filterIsOpen ? styles.open : ""}`}>
                <FilterSection {...changeFilters} />
            </div>
        </div>
    );
};

export default SearchAndFilter;
