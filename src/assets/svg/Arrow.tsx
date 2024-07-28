import React from "react";

interface ArrowProps {
    style?: React.CSSProperties;
}

const Arrow: React.FC<ArrowProps> = ({ style }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="6"
            viewBox="0 0 14 8"
            fill="none"
            style={style}
        >
            <path d="M13 7L7 0.999999L1 7" stroke="#000" />
        </svg>
    );
};

export default Arrow;
