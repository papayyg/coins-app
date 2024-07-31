import { useEffect, useState } from "react";
import { useSearchQueryStore } from "../stores/searchQueryStore";
import { useFilterState } from "../stores/filterStore";
import { NavigateFunction, Location } from "react-router-dom";

export const useSearchAndFilter = (navigate: NavigateFunction, location: Location) => {
    const {
        storeQuery,
        country,
        metal,
        quality,
        yearFrom,
        yearTo,
        priceFrom,
        priceTo,
        changeQuery,
        changeCountry,
        changeMetal,
        changeQuality,
        changePriceFrom,
        changePriceTo,
        changeYearFrom,
        changeYearTo,
    } = useSearchQueryStore((state: any) => ({
        storeQuery: state.storeQuery,
        country: state.country,
        metal: state.metal,
        quality: state.quality,
        yearFrom: state.yearFrom,
        yearTo: state.yearTo,
        priceFrom: state.priceFrom,
        priceTo: state.priceTo,
        changeQuery: state.changeQuery,
        changeCountry: state.changeCountry,
        changeMetal: state.changeMetal,
        changeQuality: state.changeQuality,
        changePriceFrom: state.changePriceFrom,
        changePriceTo: state.changePriceTo,
        changeYearFrom: state.changeYearFrom,
        changeYearTo: state.changeYearTo,
    }));

    const [query, setQuery] = useState(storeQuery);
    const filterProps = useFilterState();

    const handleSearch = () => {
        changeQuery(query);
        changeCountry(filterProps.country);
        changeMetal(filterProps.metal);
        changeQuality(filterProps.quality);
        changePriceFrom(filterProps.priceFrom);
        changePriceTo(filterProps.priceTo);
        changeYearFrom(filterProps.yearFrom);
        changeYearTo(filterProps.yearTo);
        if (location.pathname !== "/coins") navigate("/coins");
    };

    useEffect(() => {
        setQuery(storeQuery);
        filterProps.setCountry(country);
        filterProps.setMetal(metal);
        filterProps.setQuality(quality);
        filterProps.setYearFrom(yearFrom);
        filterProps.setYearTo(yearTo);
        filterProps.setPriceFrom(priceFrom);
        filterProps.setPriceTo(priceTo);
    }, [storeQuery, country, metal, quality, yearFrom, yearTo, priceFrom, priceTo, filterProps]);

    return { query, setQuery, filterProps, handleSearch };
};
