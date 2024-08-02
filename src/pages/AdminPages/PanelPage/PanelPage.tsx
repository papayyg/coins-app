import React from "react";
import { PageHeader } from "../../../UI";
import { SearchAndFilter } from "../../../modules/SearchAndFilter";

const PanelPage: React.FC = () => {
    return (
        <>
            <PageHeader title="Admin panel" />
            <SearchAndFilter />
        </>
    );
};

export default PanelPage;
