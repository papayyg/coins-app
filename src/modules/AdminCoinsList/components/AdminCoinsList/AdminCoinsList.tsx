import React, { useEffect, useMemo } from "react";
import styles from "./AdminCoinsList.module.scss";
import { AddCoin, CoinCard, ItemCountSelect, PaginationComponent } from "../../../../components";
import { useCoinsList } from "../../../CoinsList/queries/useCoinsList";
import { useSearchQueryStore } from "../../../../store/searchQuery";
import { Button, Loader } from "../../../../UI";
import { deleteCoin } from '../../api/deleteApi';
import { useNavigate } from 'react-router-dom';

const AdminCoinsList: React.FC = () => {
    const navigate = useNavigate();
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

	const handleEdit = (id: string) => {
		navigate("/admin/coins/edit", { state: { id: id } });
	}

	const handleDelete = async (id: string) => {
		await deleteCoin(id)
		refetch();
	}

    return (
        <>
            <div className={styles.container}>
				<AddCoin />
                {data?.data && data?.data.length > 0 ? (
                    data?.data.map((coin) => (
                        <div className={styles.coinContaioner}>
                            <CoinCard
                                key={coin._id}
                                title={coin.name}
                                descr={coin.shortDescription}
                                img={coin.obverseImageLink}
                                link={coin._id}
                            />
							<Button text="Edit" second={true} onClick={() => handleEdit(coin._id)}/>
							<Button text="Delete" second={true} onClick={() => handleDelete(coin._id)}/>
                        </div>
                    ))
                ) : (
                    <p className={styles.null}>Nothing found</p>
                )}
            </div>
            {data?.data ? (
                <div className={styles.pagination}>
                    <PaginationComponent
                        count={Math.ceil(data?.count / count)}
                        page={pageNumber}
                        onPageChange={(_e, page) => changePageNumber(page)}
                    />
                    <ItemCountSelect
                        count={count}
                        availableCounts={availableCounts}
                        onCountChange={(event) => {
                            changeCount(+event.target.value);
                            changePageNumber(1);
                        }}
                    />
                </div>
            ) : (
                <></>
            )}
        </>
    );
};

export default AdminCoinsList;
