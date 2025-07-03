
import React from 'react';
import { TabButtonProps } from '../types';

const TabButton: React.FC<TabButtonProps> = ({ id, label, isActive, onClick }) => (
    <button
        onClick={() => onClick(id)}
        className={`px-4 sm:px-5 py-2 rounded-lg font-medium text-sm transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${
        isActive
            ? 'bg-blue-600 text-white shadow-sm'
            : 'text-slate-600 hover:bg-slate-100 hover:text-slate-800'
        }`}
    >
        {label}
    </button>
);

export default TabButton;
