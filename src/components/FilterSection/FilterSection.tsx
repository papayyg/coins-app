import { FromTo, Select } from "../../UI";
import { FilterSectionProps } from "../../types/filter";

import styles from "./FilterSection.module.scss";

const FilterSection: React.FC<FilterSectionProps> = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <Select label="Issuing country" options={[]} value={props.country} onChange={props.setCountry} />
                <Select label="Metal" options={[]} value={props.metal} onChange={props.setMetal} />
                <Select label="Quality of the coin" options={[]} value={props.quality} onChange={props.setQuality} />
            </div>
            <div className={styles.wrapper}>
                <FromTo
                    label="Price"
                    from={props.priceFrom}
                    to={props.priceTo}
                    onChangeFrom={props.setPriceFrom}
                    onChangeTo={props.setPriceTo}
                />
                <FromTo
                    label="Year of issue"
                    from={props.yearFrom}
                    to={props.yearTo}
                    onChangeFrom={props.setYearFrom}
                    onChangeTo={props.setYearTo}
                />
            </div>
        </div>
    );
};

export default FilterSection;
