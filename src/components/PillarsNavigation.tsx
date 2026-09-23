import React from 'react';
import { FileText, Compass, Lightbulb, HeartHandshake, CheckSquare, Paperclip } from 'lucide-react';

export type PillarTab = 'all' | 'pilar1' | 'pilar2' | 'pilar3' | 'pilar4' | 'lampiran';

interface PillarsNavigationProps {
  activeTab: PillarTab;
  onSelectTab: (tab: PillarTab) => void;
}

export const PillarsNavigation: React.FC<PillarsNavigationProps> = ({
  activeTab,
  onSelectTab
}) => {
  const tabs: Array<{ id: PillarTab; label: string; icon: React.ReactNode; badge?: string; desc: string }> = [
    {
      id: 'all',
      label: 'Dokumen Lengkap',
      icon: <FileText className="w-4 h-4" />,
      desc: 'Tampilan siap cetak A4'
    },
    {
      id: 'pilar1',
      label: '1. Identifikasi',
      icon: <Compass className="w-4 h-4" />,
      desc: 'Kesiapan & Karakteristik'
    },
    {
      id: 'pilar2',
      label: '2. Desain',
      icon: <Lightbulb className="w-4 h-4" />,
      desc: 'CP & TP Operasional (KKO)'
    },
    {
      id: 'pilar3',
      label: '3. Pengalaman Belajar',
      icon: <HeartHandshake className="w-4 h-4" />,
      badge: 'Deep Learning',
      desc: 'Mindful, Meaningful, Joyful'
    },
    {
      id: 'pilar4',
      label: '4. Asesmen',
      icon: <CheckSquare className="w-4 h-4" />,
      desc: 'Diagnostik, Formatif & Sumatif'
    },
    {
      id: 'lampiran',
      label: 'Lampiran & LKPD',
      icon: <Paperclip className="w-4 h-4" />,
      desc: 'LKPD, Bahan Ajar & TTD'
    }
  ];

  return (
    <div className="bg-white border-b border-slate-200 shadow-xs no-print sticky top-[61px] z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex overflow-x-auto space-x-1 py-2 scrollbar-none">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => onSelectTab(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <span className={isActive ? 'text-white' : 'text-slate-500'}>
                  {tab.icon}
                </span>
                <span>{tab.label}</span>
                {tab.badge && (
                  <span
                    className={`ml-1 text-[10px] px-1.5 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                      isActive
                        ? 'bg-blue-800 text-blue-100'
                        : 'bg-emerald-100 text-emerald-800'
                    }`}
                  >
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
