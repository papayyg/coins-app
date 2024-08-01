import { CoinsCategoryList } from "../modules/CoinsCategoryList";
import { SearchAndFilter } from "../modules/SearchAndFilter";
import { PageHeader } from "../UI";

const HomePage: React.FC = () => {
    return (
        <>
            <PageHeader title="Home page" />
            <SearchAndFilter />
            <CoinsCategoryList />
        </>
    );
};

export default HomePage;
