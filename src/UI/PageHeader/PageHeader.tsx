import React from "react";
import styles from "./PageHeader.module.scss";

interface PageHeaderProps {
    title: string;
    descr: boolean;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, descr }) => {
    return (
        <>
            <h1 className={styles.title}>{title}</h1>
            {descr && (
                <p>
                    <span>Homepage</span> — List of the coins
                </p>
            )}
        </>
    );
};

export default PageHeader;
