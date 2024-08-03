export interface Coin {
    _id?: string;
    name: string;
    denomination: string;
	shortDescription: string;
    detailedDescription: string;
    price: number;
    year: number;
    country: string;
    metal: string;
    quality: string;
    weight: number;
    obverseImageLink: string;
    reverseImageLink: string;
}