import { CoinCard } from "../../../../components";
import { useCoinsList } from "../../queries/useCoinsList";
import styles from "./CoinsList.module.scss";

const CoinsList = () => {
    const { data, error, isLoading } = useCoinsList();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error instanceof Error) {
        return <div>Error: {error.message}</div>;
    }
    return (
        <div className={styles.container}>
            {data?.map((coin) => (
                <CoinCard key={coin._id} title={coin.name} descr={coin.shortDescription} img={coin.obverseImageLink} link={coin._id} />
            ))}
        </div>
    );
};

export default CoinsList;
