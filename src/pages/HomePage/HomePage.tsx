import { CoinsCategoryList } from '../../modules/CoinsCategoryList'
import { SearchAndFilter } from '../../modules/SearchAndFilter'
import { PageHeader } from '../../UI'

const HomePage = () => {
  return (
    <>
        <PageHeader title="Home page"/>
        <SearchAndFilter />
        <CoinsCategoryList />
    </>
  )
}

export default HomePage;