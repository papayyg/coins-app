import React from "react";
import { CoinAddOrEdit } from "../../modules/CoinAddOrEdit";
import { PageHeader } from "../../UI";

const AddOrEditPage: React.FC = () => {
    return (
        <>
            <PageHeader title="Admin panel" />
            <CoinAddOrEdit />
        </>
    );
};

export default AddOrEditPage;
