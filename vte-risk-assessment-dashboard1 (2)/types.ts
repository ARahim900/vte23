import { LucideProps } from 'lucide-react';
import React from 'react';

export interface SummaryData {
  totalRegistrations: number;
  vteAssessed: number;
  assessmentRate: string;
  score3Plus: number;
  referrals: number;
  referralRate: string;
  referralGap: number;
}

export interface TrimesterData {
  name: string;
  value: number;
  percentage: number;
}

export interface CenterAssessmentData {
  center: string;
  total: number;
  assessed: number;
  rate: number;
  contributionRate: number;
  score2Plus: number;
  score3Plus: number;
  score4Plus: number;
  referrals: number;
}

export interface RiskFactor {
  name: string;
  count: number;
  category: 'Pre-existing' | 'Obstetric' | 'Transient';
  percentage: number;
}

export interface KPICardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
  color: string;
  trend?: string;
  highlight?: boolean;
}

export interface TabButtonProps {
    id: string;
    label: string;
    isActive: boolean;
    onClick: (id: string) => void;
}

export interface CustomTooltipProps {
    active?: boolean;
    payload?: any[];
    label?: string;
}