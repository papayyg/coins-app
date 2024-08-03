import React from "react";
import { PageHeader } from "../../UI";
import { SearchAndFilter } from "../../modules/SearchAndFilter";
import { AdminCoinsList } from '../../modules/AdminCoinsList';

const PanelPage: React.FC = () => {
    return (
        <>
            <PageHeader title="Admin panel" />
            <SearchAndFilter />
			<AdminCoinsList />
        </>
    );
};

export default PanelPage;
