import React from 'react';
import { CheckCircle, AlertCircle, TrendingDown, Award, TrendingUp, AlertTriangle, Hospital, Shield, ChevronRight, Target, Activity, CheckSquare, BarChart } from 'lucide-react';
import { summaryData, centerAssessmentData } from '../../constants';

interface InsightCardProps {
    icon: React.ElementType;
    title: string;
    children: React.ReactNode;
    color: 'green' | 'blue' | 'orange' | 'red' | 'purple' | 'yellow';
}

const InsightCard: React.FC<InsightCardProps> = ({ icon: Icon, title, children, color }) => {
    const colorClasses = {
        green: { border: 'border-green-500', text: 'text-green-500', bg: 'bg-green-50' },
        blue: { border: 'border-blue-500', text: 'text-blue-500', bg: 'bg-blue-50' },
        orange: { border: 'border-orange-500', text: 'text-orange-500', bg: 'bg-orange-50' },
        red: { border: 'border-red-500', text: 'text-red-500', bg: 'bg-red-50' },
        purple: { border: 'border-purple-500', text: 'text-purple-500', bg: 'bg-purple-50' },
        yellow: { border: 'border-yellow-500', text: 'text-yellow-500', bg: 'bg-yellow-50' },
    };

    return (
        <div className={`p-4 rounded-lg border-l-4 shadow-sm ${colorClasses[color].border} ${colorClasses[color].bg}`}>
            <div className="flex items-start space-x-4">
                 <Icon className={`${colorClasses[color].text} mt-1 flex-shrink-0`} size={24} />
                <div>
                    <p className="font-bold text-slate-800">{title}</p>
                    <div className="text-slate-600 text-sm mt-1">{children}</div>
                </div>
            </div>
        </div>
    );
};

const Recommendation: React.FC<{ title: string; children: React.ReactNode; }> = ({ title, children }) => (
    <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg transition-all hover:bg-white hover:shadow-md">
        <details>
            <summary className="flex items-center gap-2 font-semibold text-slate-700 cursor-pointer">
                <ChevronRight size={16} className="text-blue-500 transition-transform duration-200 transform details-open:rotate-90" />
                <span>{title}</span>
            </summary>
            <div className="pt-2 pl-6 text-sm text-slate-600">
                {children}
            </div>
        </details>
    </div>
);


function AnalysisTab() {
    return (
        <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
                <h3 className="text-xl font-bold text-slate-800 mb-6">Comprehensive Performance Analysis</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                        <h4 className="text-lg font-semibold text-slate-700 mb-4">Assessment Coverage Insights</h4>
                        <div className="space-y-4">
                            <InsightCard icon={CheckCircle} title="Strong Overall Performance" color="green"><p><strong>94.1%</strong> VTE assessment coverage across 3,281 pregnancies.</p></InsightCard>
                            <InsightCard icon={Award} title="Top Performers" color="blue"><p><strong>AL MULTAQA</strong> and <strong>AL UWAYNAT</strong> maintain 100% assessment rates.</p></InsightCard>
                            <InsightCard icon={AlertCircle} title="Improvement Opportunities" color="orange"><p><strong>Sohar P.C.</strong> (87.2%) and <strong>Wadi Ahin</strong> (82.7%) need support.</p></InsightCard>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-slate-700 mb-4">High-Risk Management</h4>
                        <div className="space-y-4">
                            <InsightCard icon={AlertTriangle} title="Scale of High-Risk Cases" color="red"><p><strong>373 women</strong> with VTE score ≥3 requiring specialist intervention.</p></InsightCard>
                            <InsightCard icon={TrendingUp} title="Treatment Progress" color="purple"><p><strong>78.8%</strong> referral/prescription rate (improved from previous analysis).</p></InsightCard>
                            <InsightCard icon={TrendingDown} title="Remaining Gap" color="yellow"><p><strong>79 high-risk patients</strong> still need follow-up care.</p></InsightCard>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
                <h3 className="text-xl font-bold text-slate-800 mb-6">Sohar P.C. - Detailed Analysis & Recommendations</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="p-5 bg-blue-50 rounded-xl border-l-4 border-blue-500"><h4 className="font-bold text-lg text-blue-800 mb-3 flex items-center"><Hospital className="mr-2" size={20} />Service Scale</h4><ul className="space-y-2 text-sm text-slate-700 list-disc list-inside"><li className="">35% of all Suhar Wilayat pregnancies</li><li className="">Largest single health facility</li><li className="">1,142 total ANC registrations</li><li className="">Critical regional healthcare hub</li></ul></div>
                    <div className="p-5 bg-orange-50 rounded-xl border-l-4 border-orange-500"><h4 className="font-bold text-lg text-orange-800 mb-3 flex items-center"><AlertTriangle className="mr-2" size={20} />Performance Gaps</h4><ul className="space-y-2 text-sm text-slate-700 list-disc list-inside"><li className="">Assessment rate: 87.2% (vs 94.1% average)</li><li className="">146 unassessed pregnancies</li><li className="">16 high-risk patients untreated</li><li className="">Requires targeted intervention</li></ul></div>
                    <div className="p-5 bg-green-50 rounded-xl border-l-4 border-green-500"><h4 className="font-bold text-lg text-green-800 mb-3 flex items-center"><CheckSquare className="mr-2" size={20} />Quality Indicators</h4><ul className="space-y-2 text-sm text-slate-700 list-disc list-inside"><li className="">High-risk identification: 124 cases</li><li className="">Treatment initiation: 108 patients</li><li className="">87% treatment rate for high-risk</li><li className="">Good clinical decision-making</li></ul></div>
                </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
                <h3 className="text-xl font-bold text-slate-800 mb-6">Strategic Recommendations for 2024</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    <div>
                        <h4 className="text-lg font-semibold text-slate-700 mb-4">Priority Actions</h4>
                        <div className="space-y-3">
                           <Recommendation title="Close Treatment Gaps">Implement systematic follow-up for 79 high-risk patients without thromboprophylaxis.</Recommendation>
                           <Recommendation title="Support Sohar P.C.">Provide training and resources to improve 87.2% assessment rate.</Recommendation>
                           <Recommendation title="Standardize Protocols">Share best practices from 100% performing centers.</Recommendation>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-slate-700 mb-4">Long-term Strategies</h4>
                         <div className="space-y-3">
                            <Recommendation title="Prevention Programs">Address obesity (10.8% prevalence) and advanced maternal age (20.8%).</Recommendation>
                            <Recommendation title="Quality Monitoring">Establish regular audits of VTE assessment completion and treatment outcomes.</Recommendation>
                            <Recommendation title="Data Integration">Develop unified tracking system across all 7 health centers.</Recommendation>
                        </div>
                    </div>
                </div>
            </div>

             <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl shadow-xl p-8 text-white">
                <h3 className="text-2xl font-bold text-center mb-6">2023 Program Achievements</h3>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                    <div>
                        <p className="text-5xl font-extrabold">{summaryData.totalRegistrations.toLocaleString()}</p>
                        <p className="text-sm text-blue-200 mt-1">Total Pregnancies Registered</p>
                    </div>
                    <div>
                        <p className="text-5xl font-extrabold">{summaryData.assessmentRate}%</p>
                        <p className="text-sm text-blue-200 mt-1">VTE Assessment Coverage</p>
                    </div>
                    <div>
                        <p className="text-5xl font-extrabold">{summaryData.score3Plus.toLocaleString()}</p>
                        <p className="text-sm text-blue-200 mt-1">High-Risk Cases Identified</p>
                    </div>
                    <div>
                        <p className="text-5xl font-extrabold">{summaryData.referralRate}%</p>
                        <p className="text-sm text-blue-200 mt-1">Treatment Initiation Rate</p>
                    </div>
                </div>
            </div>

            <div className="mt-8 text-center text-xs text-slate-500 font-medium">
                 {centerAssessmentData.map(c => c.center).join('  •  ')}
            </div>
        </div>
    );
}

export default AnalysisTab;