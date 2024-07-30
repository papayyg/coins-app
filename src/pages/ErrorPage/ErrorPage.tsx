import { useRouteError } from "react-router-dom";
import styles from "./ErrorPage.module.scss";

const ErrorPage = () => {
    const error = useRouteError();

    const errorMessage = error as { statusText?: string; message?: string };
    return (
        <div className={styles.container}>
            <h1>Oops!</h1>
            <p className={styles.text}>Sorry, an unexpected error has occurred.</p>
            <p className={styles.text}>
                <i>{errorMessage.statusText || errorMessage.message}</i>
            </p>
        </div>
    );
};

export default ErrorPage;
