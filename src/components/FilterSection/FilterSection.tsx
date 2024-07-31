import { FromTo, Loader, Select } from "../../UI";
import { useFilterOptions } from "../../hooks/useFilterOptions";
import { FilterSectionProps } from "../../types/filter";

import styles from "./FilterSection.module.scss";

const FilterSection: React.FC<FilterSectionProps> = (props) => {
    const { data, isFetching } = useFilterOptions();

    if (isFetching) return <Loader />;

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <Select
                    label="Issuing country"
                    options={data?.country}
                    value={props.country}
                    onChange={props.changeCountry}
                />
                <Select label="Metal" options={data?.metal} value={props.metal} onChange={props.changeMetal} />
                <Select
                    label="Quality of the coin"
                    options={data?.quality}
                    value={props.quality}
                    onChange={props.changeQuality}
                />
            </div>
            <div className={styles.wrapper}>
                <FromTo
                    label="Price"
                    from={props.priceFrom}
                    to={props.priceTo}
                    onChangeFrom={props.changePriceFrom}
                    onChangeTo={props.changePriceTo}
                />
                <FromTo
                    label="Year of issue"
                    from={props.yearFrom}
                    to={props.yearTo}
                    onChangeFrom={props.changeYearFrom}
                    onChangeTo={props.changeYearTo}
                />
            </div>
        </div>
    );
};

export default FilterSection;
