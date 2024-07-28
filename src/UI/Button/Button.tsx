import React from "react";
import styles from './Button.module.scss'

interface ButtonProps {
    text: string;
	second?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, second }) => {
    return <button className={`${styles.button} ${second && styles.secondButton}`}>{text}</button>;
};

export default Button;
