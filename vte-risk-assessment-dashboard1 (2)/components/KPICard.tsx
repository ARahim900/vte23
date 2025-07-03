
import React from 'react';
import { KPICardProps } from '../types';

const KPICard: React.FC<KPICardProps> = ({ title, value, subtitle, icon: Icon, color, highlight }) => {
    return (
        <div className={`bg-white rounded-xl shadow-sm p-5 border-l-4 transition-all duration-300 hover:shadow-md hover:-translate-y-px ${highlight ? 'ring-2 ring-offset-2 ring-blue-500' : 'border-transparent'}`} style={{ borderLeftColor: color }}>
            <div className="flex items-start justify-between">
                <div className="flex-1">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{title}</p>
                    <p className="text-3xl font-bold text-slate-800 mt-1">{value}</p>
                    {subtitle && <p className="text-sm text-slate-500 mt-2">{subtitle}</p>}
                </div>
                <div className="p-3 rounded-full" style={{ backgroundColor: `${color}20` }}>
                    <Icon size={22} style={{ color }} strokeWidth={2.5} />
                </div>
            </div>
        </div>
    );
};

export default KPICard;
