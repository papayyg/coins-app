import React from "react";
import { Link, useParams } from "react-router-dom";

import { useCoinDescription } from "../../queries/useCoinDescription";
import { Loader, Table } from "../../../../UI";

import styles from "./CoinDescription.module.scss";
import MultilineText from "../MultilineText/MultilineText";

const CoinDescription: React.FC = () => {
    const { coinId } = useParams<{ coinId: string }>();
    const { data, error, isFetching } = useCoinDescription(coinId!);

    if (isFetching) {
        return <Loader />;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!data) {
        return <div>No data found</div>;
    }

    return (
        <div className={styles.container}>
            <div className={styles.photoBlock}>
                <div className={styles.img}>
                    <img src={data.obverseImageLink} alt="ObverseImage" />
                </div>
                <div className={styles.img}>
                    <img src={data.reverseImageLink} alt="ReverseImage" />
                </div>
            </div>
            <div className={styles.infoBlock}>
                <h1 className={styles.title}>{data.name}</h1>
                <p className={styles.description}>
                    <MultilineText text={data.detailedDescription} />
                </p>
                <Table {...data} />
                <Link className={styles.link} to="/coins">
                    Back to the list
                </Link>
            </div>
        </div>
    );
};

export default CoinDescription;
