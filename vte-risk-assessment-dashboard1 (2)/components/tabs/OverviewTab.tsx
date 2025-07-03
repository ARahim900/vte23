import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, LabelList, Label } from 'recharts';
import { Activity, Users, AlertTriangle, Target, BarChart3, Heart, Shield, Award, AlertCircle, MapPin, BriefcaseMedical, TrendingUp, TrendingDown } from 'lucide-react';
import { summaryData, trimesterData, centerAssessmentData, themeColors, pieColors } from '../../constants';
import KPICard from '../KPICard';
import CustomTooltip from '../charts/CustomTooltip';
import InfoBanner from '../InfoBanner';

const StatCard: React.FC<{ icon: React.FC<any>, title: string, value: string, details: string, color: string, width: string }> = ({ icon: Icon, title, value, details, color, width }) => (
    <div className={`bg-white rounded-xl shadow-sm p-6 border border-slate-200`}>
        <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-bold text-slate-800">{title}</h3>
            <div className="p-2.5 rounded-lg shadow-inner" style={{ backgroundColor: `${color}20`}}>
                <Icon className="text-white" size={20} style={{color}} />
            </div>
        </div>
        <div className="text-4xl font-black" style={{color}}>{value}</div>
        <p className="text-sm text-slate-600 mt-2 font-medium">{details}</p>
        <div className="mt-4 h-2 bg-slate-200 rounded-full overflow-hidden">
            <div className="h-full rounded-full" style={{ width: width, backgroundColor: color }}></div>
        </div>
    </div>
);

const SoharPCSpotlight: React.FC = () => {
    const soharData = centerAssessmentData.find(c => c.center === 'SOHAR P.C.');
    if (!soharData) return null;

    const notTreated = soharData.score3Plus - soharData.referrals;
    const notTreatedPerc = soharData.score3Plus > 0 ? ((notTreated / soharData.score3Plus) * 100).toFixed(0) : 0;

    return (
        <div className="bg-slate-100 rounded-xl p-6 border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-white rounded-full shadow-sm border border-slate-200">
                     <Target className="text-orange-500" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Sohar P.C. Performance Spotlight</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-5 space-y-3 border border-slate-200">
                    <div className="flex items-center gap-2"><BriefcaseMedical className="text-blue-500" size={18} /><h4 className="font-bold text-slate-700">Coverage & Scale</h4></div>
                    <ul className="text-sm text-slate-600 space-y-1 list-disc list-inside">
                        <li><strong>{soharData.total.toLocaleString()}</strong> total registrations (35% of all)</li>
                        <li><strong>{soharData.assessed.toLocaleString()}</strong> VTE assessments ({soharData.rate}% rate)</li>
                        <li>Largest health center in analysis</li>
                    </ul>
                </div>
                <div className="bg-white rounded-lg p-5 space-y-3 border border-slate-200">
                     <div className="flex items-center gap-2"><AlertTriangle className="text-red-500" size={18} /><h4 className="font-bold text-slate-700">Risk Profile</h4></div>
                    <ul className="text-sm text-slate-600 space-y-1 list-disc list-inside">
                        <li><strong>{soharData.score3Plus}</strong> high-risk patients (Score ≥3)</li>
                        <li><strong>28%</strong> have parity ≥3</li>
                        <li><strong>26%</strong> are age >35 years</li>
                    </ul>
                </div>
                <div className="bg-white rounded-lg p-5 space-y-3 border border-slate-200">
                     <div className="flex items-center gap-2"><TrendingDown className="text-yellow-500" size={18} /><h4 className="font-bold text-slate-700">Treatment Gap</h4></div>
                    <ul className="text-sm text-slate-600 space-y-1 list-disc list-inside">
                        <li><strong>{soharData.referrals}</strong> prescribed thromboprophylaxis</li>
                        <li><strong>{notTreated}</strong> high-risk not treated ({notTreatedPerc}%)</li>
                        <li>Room for improvement in follow-up</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};


const OverviewTab: React.FC = () => {
    const totalRegistrationsForPie = trimesterData.reduce((acc, entry) => acc + entry.value, 0);

    return (
        <div className="space-y-8">
            <InfoBanner icon={MapPin} title="Comprehensive Analysis: All 7 Health Centers">
                Complete VTE risk assessment data from Sohar P.C. and all regional health centers for 2023, covering 3,281 pregnancy registrations.
            </InfoBanner>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <KPICard title="Total Registrations" value={summaryData.totalRegistrations.toLocaleString()} subtitle="Across 7 health centers" icon={Users} color={themeColors.primary} highlight={true} />
                <KPICard title="VTE Assessments" value={summaryData.vteAssessed.toLocaleString()} subtitle={`${summaryData.assessmentRate}% coverage`} icon={Activity} color={themeColors.secondary} />
                <KPICard title="High Risk (Score ≥3)" value={summaryData.score3Plus.toLocaleString()} subtitle="Requiring specialist care" icon={AlertTriangle} color={themeColors.warning} />
                <KPICard title="Referrals/Prescriptions" value={summaryData.referrals.toLocaleString()} subtitle={`${summaryData.referralRate}% of high-risk patients`} icon={Target} color={themeColors.danger} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 <StatCard icon={Award} title="Assessment Coverage" value={`${summaryData.assessmentRate}%`} details="Excellent coverage across all registered pregnancies" color={themeColors.secondary} width={`${summaryData.assessmentRate}%`} />
                 <StatCard icon={Shield} title="Treatment Rate" value={`${summaryData.referralRate}%`} details="High-risk patients receiving appropriate care" color={themeColors.primary} width={`${summaryData.referralRate}%`} />
                 <StatCard icon={AlertCircle} title="Care Gap" value={`${summaryData.referralGap}`} details="High-risk patients requiring immediate follow-up" color={themeColors.warning} width={`${(summaryData.referralGap/summaryData.score3Plus)*100}%`} />
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
                <div className="flex items-start justify-between mb-6">
                    <div>
                        <h3 className="text-xl font-bold text-slate-800">VTE Assessment Contribution by Health Center</h3>
                        <p className="text-sm text-slate-500 mt-1">Percentage of total {summaryData.vteAssessed.toLocaleString()} VTE assessments performed by each center</p>
                    </div>
                    <BarChart3 className="text-blue-500" size={28} />
                </div>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={centerAssessmentData} layout="vertical" margin={{ top: 5, right: 100, left: 10, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" horizontal={false} />
                        <XAxis type="number" tick={{ fontSize: 12, fill: themeColors.text.subtle }} />
                        <YAxis dataKey="center" type="category" width={100} tick={{ fontSize: 12, fontWeight: 500, fill: themeColors.text.body }} interval={0} />
                        <Tooltip content={<CustomTooltip />} cursor={{ fill: '#f3f4f6' }} />
                        <Bar dataKey="assessed" name="Assessments" fill={themeColors.primary} barSize={18} radius={[0, 4, 4, 0]}>
                            <LabelList dataKey="assessed" position="right" style={{ fill: themeColors.text.heading, fontSize: '12px', fontWeight: '500' }} formatter={(value: number) => value.toLocaleString()} />
                            <LabelList dataKey="contributionRate" position="right" style={{ fill: themeColors.text.subtle, fontSize: '11px', fontWeight: '500' }} formatter={(value: number) => `(${value}%)`} offset={40}/>
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
                <ResponsiveContainer width="100%" height={300} className="mt-8">
                    <BarChart data={centerAssessmentData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false}/>
                        <XAxis dataKey="center" tick={{ fontSize: 12, fill: themeColors.text.body }} interval={0} />
                        <YAxis tick={{ fontSize: 12, fill: themeColors.text.subtle }}/>
                        <Tooltip content={<CustomTooltip />}/>
                        <Bar dataKey="contributionRate" name="Contribution" fill={themeColors.primary} barSize={40} radius={[4, 4, 0, 0]}>
                             <LabelList dataKey="contributionRate" position="top" formatter={(value: number) => `${value}%`} style={{ fill: themeColors.text.heading, fontSize: '12px', fontWeight: '500' }} />
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>


            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                <div className="lg:col-span-3 bg-white rounded-xl shadow-sm p-6 border border-slate-200">
                    <div className="flex items-start justify-between mb-6">
                        <div>
                            <h3 className="text-xl font-bold text-slate-800">Assessment Coverage by Center</h3>
                            <p className="text-sm text-slate-500 mt-1">Percentage of pregnant women assessed at each center</p>
                        </div>
                        <TrendingUp className="text-green-500" size={28} />
                    </div>
                     <ResponsiveContainer width="100%" height={350}>
                        <BarChart data={centerAssessmentData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                            <XAxis dataKey="center" interval={0} tick={{ fontSize: 12, fill: themeColors.text.body }} />
                            <YAxis domain={[0, 110]} unit="%" tick={{ fontSize: 12, fill: themeColors.text.subtle }} />
                            <Tooltip content={<CustomTooltip />} />
                            <Bar dataKey="rate" name="Assessment Rate" fill={themeColors.secondary} barSize={50} radius={[4, 4, 0, 0]}>
                                <LabelList dataKey="rate" position="top" formatter={(value: number) => `${value}%`} style={{ fill: themeColors.text.heading, fontSize: '12px', fontWeight: '500' }}/>
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6 border border-slate-200 flex flex-col">
                    <div className="flex items-start justify-between mb-2">
                        <div>
                            <h3 className="text-xl font-bold text-slate-800">Registration by Trimester</h3>
                            <p className="text-sm text-slate-500 mt-1">Distribution of {totalRegistrationsForPie.toLocaleString()} registrations</p>
                        </div>
                        <Heart className="text-purple-500" size={28} />
                    </div>
                    <div className="relative flex-grow h-[280px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie data={trimesterData} cx="50%" cy="50%" innerRadius="65%" outerRadius="85%" dataKey="value" startAngle={90} endAngle={450} paddingAngle={2}>
                                    {trimesterData.map((entry, index) => <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} stroke={themeColors.ui.panel} strokeWidth={2}/>)}
                                </Pie>
                                <Tooltip formatter={(value, name, props) => [`${value.toLocaleString()} (${props.payload.percentage}%)`, props.payload.name]} content={<CustomTooltip />} />
                            </PieChart>
                        </ResponsiveContainer>
                        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                            <div className="text-4xl font-black text-slate-800">{totalRegistrationsForPie.toLocaleString()}</div>
                            <div className="text-sm font-semibold text-slate-600">Registrations</div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-4 text-xs">
                        {trimesterData.map((item, index) => (
                            <div key={item.name} className="flex items-center">
                                <div className="w-2.5 h-2.5 rounded-full mr-2" style={{ backgroundColor: pieColors[index % pieColors.length] }}></div>
                                <div className="font-medium text-slate-600">{item.name}: <span className="font-bold text-slate-800">{item.percentage}%</span></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
                <div className="flex items-start justify-between mb-6">
                    <div>
                        <h3 className="text-xl font-bold text-slate-800">VTE Risk Score Distribution by Health Center</h3>
                        <p className="text-sm text-slate-500 mt-1">Patient counts by minimum risk score</p>
                    </div>
                    <Shield className="text-purple-500" size={28} />
                </div>
                <ResponsiveContainer width="100%" height={500}>
                    <BarChart data={centerAssessmentData} layout="vertical" margin={{ top: 20, right: 20, left: 0, bottom: 20 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" horizontal={false} />
                        <XAxis type="number" tick={{ fontSize: 12, fontWeight: 500, fill: themeColors.text.subtle }} />
                        <YAxis type="category" dataKey="center" width={100} tick={{ fontSize: 12, fontWeight: 500, fill: themeColors.text.body }} interval={0} />
                        <Tooltip content={<CustomTooltip />} cursor={{fill: '#f3f4f6'}} />
                        <Legend verticalAlign="top" wrapperStyle={{ paddingBottom: '20px' }} iconType="circle" iconSize={10} formatter={(value) => <span className="font-medium text-slate-700 text-sm">{value}</span>} />
                        <Bar dataKey="score2Plus" fill={themeColors.warning} name="Score ≥2" barSize={12} radius={[0, 4, 4, 0]} />
                        <Bar dataKey="score3Plus" fill={themeColors.danger} name="Score ≥3" barSize={12} radius={[0, 4, 4, 0]} />
                        <Bar dataKey="score4Plus" fill={themeColors.purple} name="Score ≥4" barSize={12} radius={[0, 4, 4, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            
            <SoharPCSpotlight />
        </div>
    );
};

export default OverviewTab;