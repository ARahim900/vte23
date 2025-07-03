
import React from 'react';
import { LucideProps } from 'lucide-react';

interface InfoBannerProps {
    icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
    title: string;
    children: React.ReactNode;
}

const InfoBanner: React.FC<InfoBannerProps> = ({ icon: Icon, title, children }) => (
    <div className="bg-blue-600 text-white rounded-xl p-5 shadow-lg flex items-start gap-4 animate-fadeIn">
        <Icon size={24} className="flex-shrink-0 mt-0.5" />
        <div>
            <h3 className="font-bold text-lg">{title}</h3>
            <p className="text-blue-100 text-sm mt-1">{children}</p>
        </div>
    </div>
);

export default InfoBanner;
