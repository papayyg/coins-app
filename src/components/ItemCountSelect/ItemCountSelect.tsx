// src/components/ItemCountSelect.tsx
import React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import styles from "./ItemCountSelect.module.scss";

interface ItemCountSelectProps {
    count: number;
    availableCounts: number[];
    onCountChange: (event: SelectChangeEvent<number>) => void;
}

const ItemCountSelect: React.FC<ItemCountSelectProps> = ({ count, availableCounts, onCountChange }) => {
    return (
        <FormControl className={styles.form}>
            <InputLabel id="select-label">Count</InputLabel>
            <Select
                labelId="select-label"
                value={count}
                label="Count"
                onChange={onCountChange}
                className={styles.select}
            >
                {availableCounts.map((value) => (
                    <MenuItem key={value} value={value}>
                        {value}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default ItemCountSelect;
