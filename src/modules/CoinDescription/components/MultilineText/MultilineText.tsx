import React from 'react';

const MultilineText: React.FC<{ text: string }> = ({ text }) => {
    return (
        <>
            {text.split("\n").map((line, index) => (
                <React.Fragment key={index}>
                    {line}
                    <br />
                </React.Fragment>
            ))}
        </>
    );
};

export default MultilineText;
