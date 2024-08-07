import { CoinsList } from "../modules/CoinsList";
import { PageHeader } from "../UI";
import { SearchAndFilter } from "../modules/SearchAndFilter";

const ListCoinsPage: React.FC = () => {
    return (
        <>
            <PageHeader title="List of the coins" descr={true} />
            <SearchAndFilter />
            <CoinsList />
        </>
    );
};

export default ListCoinsPage;
