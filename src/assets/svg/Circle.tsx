import React from "react";

interface CircleProps {
    style?: React.CSSProperties;
}

const Circle: React.FC<CircleProps> = ({ style }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="120"
            height="120"
            viewBox="0 0 120 120"
            fill="none"
			style={style}
        >
            <circle cx="60" cy="60" r="59.5" fill="white" stroke="black" />
            <path d="M63.8709 59.8617H55.1613M59.3917 55.1613V64.8387" stroke="black" />
        </svg>
    );
};

export default Circle;
