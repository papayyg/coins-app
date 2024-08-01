import { useEffect, useMemo } from "react";

import { CoinCard } from "../../../../components";
import { Loader } from "../../../../UI";

import { useCoinsList } from "../../queries/useCoinsList";
import { useSearchQueryStore } from "../../../../store/searchQuery";

import styles from "./CoinsList.module.scss";
import { FormControl, InputLabel, MenuItem, Pagination, Select } from "@mui/material";

const CoinsList = () => {
    const { data, error, isLoading, refetch } = useCoinsList();
    const { pageNumber, count, changePageNumber, changeCount } = useSearchQueryStore();

    useEffect(() => {
        refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pageNumber, count]);

    const availableCounts = useMemo(() => {
        const possibleCounts = [6, 12, 18, 24, 30];
        return possibleCounts.filter((value) => value <= (data?.count || Infinity));
    }, [data?.count]);

    if (isLoading) return <Loader />;
    if (error instanceof Error) return <div>Error: {error.message}</div>;

    return (
        <>
            <div className={styles.container}>
                {data?.data && data?.data.length > 0 ? (
                    data?.data.map((coin) => (
                        <CoinCard
                            key={coin._id}
                            title={coin.name}
                            descr={coin.shortDescription}
                            img={coin.obverseImageLink}
                            link={coin._id}
                        />
                    ))
                ) : (
                    <p className={styles.null}>Nothing found</p>
                )}
            </div>
            {data?.data ? (
                <div className={styles.pagination}>
                    <Pagination
                        count={Math.ceil(data?.count / count)}
                        page={pageNumber}
                        onChange={(_e, page) => changePageNumber(page)}
                        shape="rounded"
                    />
                    <FormControl className={styles.form}>
                        <InputLabel id="select-label">Count</InputLabel>
                        <Select
                            labelId="select-label"
                            value={count}
                            label="Count"
                            onChange={(event) => changeCount(+event.target.value)}
                            className={styles.select}
                        >
                            {availableCounts.map((value) => (
                                <MenuItem key={value} value={value}>
                                    {value}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
            ) : (
                <></>
            )}
        </>
    );
};

export default CoinsList;
