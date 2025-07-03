
import React from 'react';
import { CustomTooltipProps } from '../../types';

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white/95 backdrop-blur-sm p-3 shadow-lg rounded-lg border border-gray-200">
                <p className="font-semibold text-gray-800 mb-2 text-sm">{label}</p>
                {payload.map((entry, index) => (
                    <p key={`item-${index}`} className="text-xs font-medium" style={{ color: entry.color || entry.payload.fill || entry.fill }}>
                        {entry.name}: <span className="font-bold">{entry.value}{entry.unit || ''}</span>
                    </p>
                ))}
            </div>
        );
    }
    return null;
};

export default CustomTooltip;
