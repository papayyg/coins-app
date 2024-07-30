import { useFilterStore } from "../../modules/SearchAndFilter";
import { Button, FilterExpand, Input } from "../../UI";

import styles from "./SearchField.module.scss";

interface SearchFieldProps {
    query: string;
    setQuery: (value: string) => void;
    onSearch: () => void;
}

const SearchField: React.FC<SearchFieldProps> = ({query, setQuery, onSearch}) => {
    const { filterIsOpen, toggleFilter } = useFilterStore();

    return (
        <div className={styles.container}>
            <div className={styles.search}>
                <Input label="Input field" value={query} onChange={setQuery} />
                <Button text="Search"  onClick={onSearch} />
            </div>
            <FilterExpand isOpen={filterIsOpen} handleClick={toggleFilter}/>
        </div>
    );
};

export default SearchField;
