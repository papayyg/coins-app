import React from "react";
import styles from "./Table.module.scss";
import { Coin } from "../../types/coin";

const Table: React.FC<Coin | undefined> = (props) => {
    return (
        <table className={styles.table}>
            <tbody>
                <tr>
                    <td>Issuing Country</td>
                    <td>{props?.country}</td>
                </tr>
                <tr>
                    <td>Composition</td>
                    <td>{props?.metal}</td>
                </tr>
                <tr>
                    <td>Quality</td>
                    <td>{props?.quality}</td>
                </tr>
                <tr>
                    <td>Denomination</td>
                    <td>{props?.denomination}</td>
                </tr>
                <tr>
                    <td>Year</td>
                    <td>{props?.year}</td>
                </tr>
                <tr>
                    <td>Weight</td>
                    <td>{props?.weight} g</td>
                </tr>
                <tr>
                    <td>Price</td>
                    <td>{props?.price}$</td>
                </tr>
            </tbody>
        </table>
    );
};

export default Table;
