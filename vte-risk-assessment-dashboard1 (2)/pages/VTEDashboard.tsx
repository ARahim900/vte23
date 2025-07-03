
import React, { useState } from 'react';
import TabButton from '../components/TabButton';
import OverviewTab from '../components/tabs/OverviewTab';
import RiskFactorsTab from '../components/tabs/RiskFactorsTab';
import AnalysisTab from '../components/tabs/AnalysisTab';
import Logo from '../components/Logo';

const VTEDashboard = () => {
    const [activeTab, setActiveTab] = useState('overview');

    return (
        <div className="container mx-auto px-4 py-8 md:px-6 md:py-12">
            <header className="flex items-center gap-4 mb-12">
                <Logo className="h-12 w-12 flex-shrink-0" />
                <div>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-800">
                        VTE Risk Assessment Dashboard
                    </h1>
                    <p className="text-md text-slate-600">
                        Suhar Wilayat Comprehensive Analysis - 2023
                    </p>
                </div>
            </header>

            <nav className="flex justify-center mb-12">
                <div className="bg-white rounded-xl p-1.5 shadow-sm flex flex-wrap justify-center gap-1 border border-slate-200">
                    <TabButton id="overview" label="Overview & Metrics" isActive={activeTab === 'overview'} onClick={setActiveTab} />
                    <TabButton id="riskfactors" label="Risk Factors" isActive={activeTab === 'riskfactors'} onClick={setActiveTab} />
                    <TabButton id="analysis" label="Insights & Analysis" isActive={activeTab === 'analysis'} onClick={setActiveTab} />
                </div>
            </nav>

            <main className="animate-fadeIn">
                {activeTab === 'overview' && <OverviewTab />}
                {activeTab === 'riskfactors' && <RiskFactorsTab />}
                {activeTab === 'analysis' && <AnalysisTab />}
            </main>

            <footer className="mt-16 text-center text-xs text-slate-500">
                <p className='font-semibold'>Comprehensive VTE Risk Assessment Analysis for Suhar Wilayat Health Network</p>
                <p className='mt-1'>Data Period: January - December 2023 • All 7 Health Centers Included</p>
            </footer>
        </div>
    );
};

export default VTEDashboard;
