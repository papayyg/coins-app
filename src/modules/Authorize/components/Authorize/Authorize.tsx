import React, { useEffect, useState } from "react";
import styles from "./Authorize.module.scss";
import { Button, Input } from "../../../../UI";
import { useNavigate } from "react-router-dom";
import { fetchAuthorization } from "../../api/authorizeApi";
import { validateToken } from "../../api/validateToken";

const Authorize: React.FC = () => {
    const navigate = useNavigate();
    const [login, setLogin] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        const checkToken = async () => {
            const token = document.cookie
                .split("; ")
                .find((row) => row.startsWith("jwt="))
                ?.split("=")[1];
            if (token) {
                const isValid = await validateToken();
                if (isValid) {
                    navigate("/admin/coins");
                }
            }
        };

        checkToken();
    }, [navigate]);

    const handleClick = async () => {
        try {
            const { token } = await fetchAuthorization({ login, password });
            document.cookie = `jwt=${token}; path=/;`;
            navigate("/admin/coins");
        } catch (error) {
            setError(true);
        }
    };

    return (
        <div className={styles.container}>
            <Input label="Login" value={login} onChange={(value) => setLogin(value)} />
            <Input label="Password" value={password} onChange={(value) => setPassword(value)} type="password" />
            {error && "Incorrect login or password"}
            <Button text="Sign in" onClick={handleClick} />
        </div>
    );
};

export default Authorize;
