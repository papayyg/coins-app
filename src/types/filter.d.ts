export interface FilterSectionProps {
    country: string;
    setCountry: (value: string) => void;
    metal: string;
    setMetal: (value: string) => void;
    quality: string;
    setQuality: (value: string) => void;
    priceFrom: string;
    setPriceFrom: (value: string) => void;
    priceTo: string;
    setPriceTo: (value: string) => void;
    yearFrom: string;
    setYearFrom: (value: string) => void;
    yearTo: string;
    setYearTo: (value: string) => void;
}
