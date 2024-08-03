import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { Button, Input, TextArea } from "../../../../UI";
import { saveCoin } from "../../api/saveCoin";

import styles from "./CoinAdd.module.scss";
import { getCoin } from "../../api/getCoin";
import { Coin } from "../../../../types/coin";
import { editCoin } from '../../api/editCoin';

const CoinAddOrEdit: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const state = location.state as { id?: string };
    const [formData, setFormData] = useState<Coin>({
        name: "",
        denomination: "",
        year: 0,
        price: 0,
        country: "",
        metal: "",
        shortDescription: "",
        detailedDescription: "",
        quality: "",
        weight: 0,
        obverseImageLink: "",
        reverseImageLink: "",
    });

    useEffect(() => {
        if (state?.id) {
            const fetchCoin = async () => {
                try {
                    const coinData = await getCoin(state.id);
                    setFormData(coinData);
                } catch (error) {
                    console.error("Error fetching coin data:", error);
                }
            };
            fetchCoin();
        }
    }, [state]);

    const handleChange = (field: keyof Coin, value: string | number) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleSave = async () => {
        try {
			if (state?.id) await editCoin(state?.id, formData);
            else await saveCoin(formData);
            navigate("/admin/coins");
        } catch (error) {
            console.error("Error saving coin:", error);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <Input
                    label="Coin name"
                    value={formData.name}
                    onChange={(value) => handleChange("name", value)}
                />
                <Input
                    label="Face value"
                    value={formData.denomination}
                    onChange={(value) => handleChange("denomination", value)}
                />
                <Input
                    label="Year of issue"
                    value={formData.year}
                    onChange={(value) => handleChange("year", Number(value))}
                    type="number"
                />
                <Input
                    label="Price"
                    value={formData.price}
                    onChange={(value) => handleChange("price", Number(value))}
                    type="number"
                />
                <Input
                    label="Country"
                    value={formData.country}
                    onChange={(value) => handleChange("country", value)}
                />
                <Input
                    label="Metal"
                    value={formData.metal}
                    onChange={(value) => handleChange("metal", value)}
                />
            </div>
            <div className={styles.wrapper}>
                <TextArea
                    label="Short description"
                    value={formData.shortDescription}
                    onChange={(value) => handleChange("shortDescription", value)}
                />
                <TextArea
                    label="Long description"
                    value={formData.detailedDescription}
                    onChange={(value) => handleChange("detailedDescription", value)}
                />
                <Input
                    label="Quality of the coin"
                    value={formData.quality}
                    onChange={(value) => handleChange("quality", value)}
                />
                <Input
                    label="Weight"
                    value={formData.weight}
                    onChange={(value) => handleChange("weight", Number(value))}
                    type="number"
                />
            </div>
            <div className={styles.wrapper}>
                <Input
                    label="Link to obverse image"
                    value={formData.obverseImageLink}
                    onChange={(value) => handleChange("obverseImageLink", value)}
                />
                <Input
                    label="Link to reverse image"
                    value={formData.reverseImageLink}
                    onChange={(value) => handleChange("reverseImageLink", value)}
                />
                <div className={styles.btns}>
                    <Button text="Save" onClick={handleSave} />
                    <Button
                        text="Cancel"
                        second={true}
                        onClick={() => navigate("/admin/coins")}
                    />
                </div>
            </div>
        </div>
    );
};

export default CoinAddOrEdit;
