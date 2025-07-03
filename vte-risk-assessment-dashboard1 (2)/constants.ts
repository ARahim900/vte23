
import { SummaryData, TrimesterData, CenterAssessmentData, RiskFactor } from './types';

export const summaryData: SummaryData = {
  totalRegistrations: 3281,
  vteAssessed: 3086,
  assessmentRate: "94.1",
  score3Plus: 373,
  referrals: 294,
  referralRate: "78.8",
  referralGap: 79
};

export const trimesterData: TrimesterData[] = [
  { name: 'First Trimester', value: 1977, percentage: 92.4 },
  { name: 'Second Trimester', value: 126, percentage: 5.9 },
  { name: 'Third Trimester', value: 24, percentage: 1.1 },
  { name: 'Unknown', value: 12, percentage: 0.6 }
];

const totalVTEAssessments = 3086;
// Data is now ordered to match the charts in the PDF for consistency
export const centerAssessmentData: CenterAssessmentData[] = [
  { center: 'AL MULTAQA', total: 435, assessed: 435, rate: 100.0, contributionRate: parseFloat((435/totalVTEAssessments*100).toFixed(1)), score2Plus: 146, score3Plus: 61, score4Plus: 12, referrals: 61 },
  { center: 'AL UWAYNAT', total: 508, assessed: 508, rate: 100.0, contributionRate: parseFloat((508/totalVTEAssessments*100).toFixed(1)), score2Plus: 138, score3Plus: 52, score4Plus: 13, referrals: 52 },
  { center: 'TAREEF', total: 417, assessed: 414, rate: 99.3, contributionRate: parseFloat((414/totalVTEAssessments*100).toFixed(1)), score2Plus: 115, score3Plus: 41, score4Plus: 8, referrals: 41 },
  { center: 'FALAJ', total: 367, assessed: 362, rate: 98.6, contributionRate: parseFloat((362/totalVTEAssessments*100).toFixed(1)), score2Plus: 125, score3Plus: 48, score4Plus: 15, referrals: 48 },
  { center: 'WADI HIBI', total: 256, assessed: 242, rate: 94.5, contributionRate: parseFloat((242/totalVTEAssessments*100).toFixed(1)), score2Plus: 78, score3Plus: 29, score4Plus: 7, referrals: 29 },
  { center: 'SOHAR P.C.', total: 1142, assessed: 996, rate: 87.2, contributionRate: parseFloat((996/totalVTEAssessments*100).toFixed(1)), score2Plus: 400, score3Plus: 124, score4Plus: 25, referrals: 108 },
  { center: 'WADI AHIN', total: 156, assessed: 129, rate: 82.7, contributionRate: parseFloat((129/totalVTEAssessments*100).toFixed(1)), score2Plus: 46, score3Plus: 18, score4Plus: 4, referrals: 18 }
];

export const riskFactorsData: RiskFactor[] = [
  { name: 'Parity ≥3', count: 824, category: 'Pre-existing', percentage: 26.7 },
  { name: 'Age > 35 years', count: 642, category: 'Pre-existing', percentage: 20.8 },
  { name: 'Obesity BMI 30-39', count: 249, category: 'Pre-existing', percentage: 8.1 },
  { name: 'Medical Comorbidities', count: 122, category: 'Pre-existing', percentage: 4.0 },
  { name: 'Obesity BMI ≥40', count: 84, category: 'Pre-existing', percentage: 2.7 },
  { name: 'Multiple Pregnancy', count: 33, category: 'Obstetric', percentage: 1.1 },
  { name: 'Family History of VTE', count: 18, category: 'Pre-existing', percentage: 0.6 },
  { name: 'Hyperemesis Gravidarum', count: 15, category: 'Transient', percentage: 0.5 },
  { name: 'Gross Varicose Veins', count: 14, category: 'Pre-existing', percentage: 0.5 },
  { name: 'Assisted Reproductive Technology', count: 12, category: 'Obstetric', percentage: 0.4 },
  { name: 'Pre-eclampsia', count: 8, category: 'Obstetric', percentage: 0.3 },
  { name: 'Smoking', count: 6, category: 'Pre-existing', percentage: 0.2 },
  { name: 'Previous VTE Single Event', count: 4, category: 'Pre-existing', percentage: 0.1 }
];

export const themeColors = {
  primary: '#2563eb', // blue-600
  secondary: '#059669', // green-600
  warning: '#f59e0b', // amber-500
  danger: '#dc2626', // red-600
  info: '#0891b2',   // cyan-600
  purple: '#7c3aed', // purple-600
  
  text: {
    heading: '#1f2937', // gray-800
    body: '#374151',    // gray-700
    subtle: '#6b7280',  // gray-500
  },
  
  ui: {
    background: '#f9fafb', // gray-50
    panel: '#ffffff',
    border: '#e5e7eb',   // gray-200
    hover: '#f3f4f6',    // gray-100
  }
};

export const chartColors = [
    themeColors.primary,
    themeColors.secondary,
    themeColors.warning,
    themeColors.info,
    themeColors.purple,
    '#be185d' // pink-600
];

export const pieColors = chartColors;
