import React from "react";
import styles from './Button.module.scss'

interface ButtonProps {
    text: string;
	second?: boolean;
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, second, onClick }) => {
    return <button className={`${styles.button} ${second && styles.secondButton}`} onClick={onClick}>{text}</button>;
};

export default Button;
