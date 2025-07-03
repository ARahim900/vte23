
import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className }) => (
    <svg
        className={className}
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M12 2L4 5v6.09c0 4.97 3.58 9.38 8 10.91c4.42-1.53 8-5.94 8-10.91V5l-8-3z"
            fill="#2563eb20"
            stroke="#2563eb"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M12 8v8m-4-4h8"
            stroke="#2563eb"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export default Logo;
