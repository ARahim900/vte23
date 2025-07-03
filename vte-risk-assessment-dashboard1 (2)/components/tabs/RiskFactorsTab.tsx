import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList } from 'recharts';
import { Shield, Hospital, Calendar, FileText, Activity } from 'lucide-react';
import { riskFactorsData, themeColors, chartColors, summaryData } from '../../constants';
import { RiskFactor } from '../../types';
import KPICard from '../KPICard';
import CustomTooltip from '../charts/CustomTooltip';

const FactorChart: React.FC<{ data: RiskFactor[], title: string, color: string, icon: React.FC<any> }> = ({ data, title, color, icon: Icon }) => (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200 h-full">
        <div className="flex items-start justify-between mb-6">
            <div>
                <h3 className="text-xl font-bold text-slate-800">{title}</h3>
                <p className="text-sm text-slate-500 mt-1">Breakdown by specific factors</p>
            </div>
            <Icon className="text-slate-400" size={24} />
        </div>
        <ResponsiveContainer width="100%" height={data.length * 45 + 50}>
            <BarChart data={data} layout="vertical" margin={{ top: 5, right: 40, left: 10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" horizontal={false} />
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" width={140} tick={{ fontSize: 12, fill: themeColors.text.body }} interval={0} />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: '#f3f4f6' }}/>
                <Bar dataKey="count" fill={color} radius={[0, 4, 4, 0]} barSize={20}>
                    <LabelList dataKey="count" position="right" style={{ fill: themeColors.text.heading, fontSize: '12px', fontWeight: '500' }} />
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    </div>
);

const VerticalFactorChart: React.FC<{ data: RiskFactor[], color: string }> = ({ data, color }) => (
    <div className="mt-6">
         <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data} margin={{ top: 5, right: 5, left: 5, bottom: 30 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                <XAxis dataKey="name" interval={0} tick={{ fontSize: 12, fill: themeColors.text.body }} dy={10} />
                <YAxis tick={{ fontSize: 12, fill: themeColors.text.subtle }} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="count" fill={color} radius={[4, 4, 0, 0]}>
                    <LabelList dataKey="count" position="top" style={{ fill: themeColors.text.heading, fontSize: '12px', fontWeight: '500' }} />
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    </div>
);


function RiskFactorsTab() {
    const preExistingFactors = riskFactorsData.filter(f => f.category === 'Pre-existing').sort((a,b) => b.count - a.count);
    const obstetricFactors = riskFactorsData.filter(f => f.category === 'Obstetric').sort((a,b) => b.count - a.count);
    const transientFactors = riskFactorsData.filter(f => f.category === 'Transient').sort((a,b) => b.count - a.count);
    
    const top5Factors = [...riskFactorsData].sort((a,b) => b.count - a.count).slice(0, 5);

    const obesityBmi30_39 = riskFactorsData.find(f => f.name === 'Obesity BMI 30-39');
    const obesityBmi40plus = riskFactorsData.find(f => f.name === 'Obesity BMI ≥40');
    const totalObese = (obesityBmi30_39?.count || 0) + (obesityBmi40plus?.count || 0);
    const totalObesePerc = ((totalObese / summaryData.vteAssessed) * 100).toFixed(1);

    return (
        <div className="space-y-8">
             <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                <h3 className="text-xl font-bold text-slate-800 mb-1 flex items-center gap-2"><Activity className="text-red-500"/>Top 5 Risk Factors Impact Summary</h3>
                <p className="text-sm text-slate-500 mb-6">Most prevalent factors identified in the assessed population.</p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {top5Factors.map((factor, index) => (
                        <div key={index} className="text-center bg-slate-50 rounded-lg p-4 border border-slate-200 transition-all hover:shadow-md hover:-translate-y-px">
                            <div className="text-4xl font-extrabold mb-1" style={{ color: chartColors[index % chartColors.length] }}>{factor.count}</div>
                            <div className="text-xs font-semibold mb-2 text-slate-700 h-8 flex items-center justify-center">{factor.name}</div>
                            <div className="text-sm font-bold text-slate-500 bg-slate-200 rounded-full px-2 py-0.5 inline-block">{((factor.count / summaryData.vteAssessed) * 100).toFixed(1)}%</div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <KPICard title="Pre-existing Factors" value={preExistingFactors.length} subtitle={`${preExistingFactors.reduce((acc, f) => acc + f.count, 0)} occurrences`} icon={Shield} color={themeColors.primary} />
                <KPICard title="Obstetric Factors" value={obstetricFactors.length} subtitle={`${obstetricFactors.reduce((acc, f) => acc + f.count, 0)} occurrences`} icon={Hospital} color={themeColors.secondary} />
                <KPICard title="Transient Factors" value={transientFactors.length} subtitle={`${transientFactors.reduce((acc, f) => acc + f.count, 0)} occurrences`} icon={Calendar} color={themeColors.warning} />
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Obesity Impact Analysis</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                        <p className="text-sm font-semibold text-yellow-800">BMI 30-39 kg/m²</p>
                        <p className="text-2xl font-bold text-yellow-900">{obesityBmi30_39?.count} patients ({obesityBmi30_39?.percentage}%)</p>
                    </div>
                     <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <p className="text-sm font-semibold text-red-800">BMI ≥40 kg/m²</p>
                        <p className="text-2xl font-bold text-red-900">{obesityBmi40plus?.count} patients ({obesityBmi40plus?.percentage}%)</p>
                    </div>
                     <div className="bg-slate-800 text-white rounded-lg p-4">
                        <p className="text-sm font-semibold">Total Obesity Impact</p>
                        <p className="text-2xl font-bold">{totalObese} patients ({totalObesePerc}%)</p>
                    </div>
                </div>
                 <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <h4 className="font-bold text-blue-800">Center-Specific Insights</h4>
                    <ul className="list-disc list-inside text-sm text-blue-700 mt-2 space-y-1">
                        <li><strong>Sohar P.C.:</strong> 132 obese patients (13.3% of their screened population).</li>
                        <li><strong>Regional Average:</strong> 10.8% across all centers.</li>
                        <li><strong>Clinical Impact:</strong> Obesity is the 3rd most common VTE risk factor.</li>
                        <li><strong>Prevention Focus:</strong> Weight management programs may reduce future VTE risk.</li>
                    </ul>
                 </div>
            </div>

            <FactorChart data={preExistingFactors} title="Pre-existing Risk Factors" color={themeColors.primary} icon={Shield} />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
                    <div className="flex items-start justify-between mb-6">
                        <div>
                            <h3 className="text-xl font-bold text-slate-800">Obstetric Risk Factors</h3>
                            <p className="text-sm text-slate-500 mt-1">Breakdown by specific factors</p>
                        </div>
                        <Hospital className="text-slate-400" size={24} />
                    </div>
                    <VerticalFactorChart data={obstetricFactors} color={themeColors.secondary} />
                </div>
                <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
                     <div className="flex items-start justify-between mb-6">
                        <div>
                            <h3 className="text-xl font-bold text-slate-800">New Onset/Transient Risk Factors</h3>
                            <p className="text-sm text-slate-500 mt-1">Breakdown by specific factors</p>
                        </div>
                        <Calendar className="text-slate-400" size={24} />
                    </div>
                    <VerticalFactorChart data={transientFactors} color={themeColors.warning} />
                </div>
            </div>
        </div>
    );
}
export default RiskFactorsTab;