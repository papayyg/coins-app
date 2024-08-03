import React from "react";
import { PageHeader } from "../../UI";
import { Authorize } from "../../modules/Authorize";

const AuthorizePage: React.FC = () => {
    return (
        <>
            <PageHeader title="Admin panel" />
            <Authorize />
        </>
    );
};

export default AuthorizePage;
