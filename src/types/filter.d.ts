export interface FilterSectionProps {
    country: string;
    changeCountry: (value: string) => void;
    metal: string;
    changeMetal: (value: string) => void;
    quality: string;
    changeQuality: (value: string) => void;
    priceFrom: string;
    changePriceFrom: (value: string) => void;
    priceTo: string;
    changePriceTo: (value: string) => void;
    yearFrom: string;
    changeYearFrom: (value: string) => void;
    yearTo: string;
    changeYearTo: (value: string) => void;
}
