import { useState } from "react";

export const useFilterState = () => {
    const [country, setCountry] = useState("");
    const [metal, setMetal] = useState("");
    const [quality, setQuality] = useState("");
    const [priceFrom, setPriceFrom] = useState("");
    const [priceTo, setPriceTo] = useState("");
    const [yearFrom, setYearFrom] = useState("");
    const [yearTo, setYearTo] = useState("");

    return {
        country,
        setCountry,
        metal,
        setMetal,
        quality,
        setQuality,
        priceFrom,
        setPriceFrom,
        priceTo,
        setPriceTo,
        yearFrom,
        setYearFrom,
        yearTo,
        setYearTo,
    };
};
