import React from "react";
import styles from "./PageHeader.module.scss";

interface PageHeaderProps {
    title: string;
    descr?: boolean;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, descr = false }) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{title}</h1>
            {descr && (
                <p className={styles.descr}>
                    <span>Homepage</span> — List of the coins
                </p>
            )}
        </div>
    );
};

export default PageHeader;
