import { Info, DollarSign, FileText, Smartphone, Bus, Calendar, Globe } from 'lucide-react';

interface PracticalInfoProps {
  info: any;
}

export default function PracticalInfo({ info }: PracticalInfoProps) {
  const items = [
    { icon: DollarSign, label: 'Currency', value: info.currency, extra: info.exchangeRate },
    { icon: FileText, label: 'Visa', value: info.visa },
    { icon: Smartphone, label: 'SIM/Internet', value: info.sim },
    { icon: Bus, label: 'Transport', value: info.transport },
    { icon: Calendar, label: 'Best Time', value: info.bestTimeToVisit },
    { icon: Globe, label: 'Language', value: info.language },
  ];

  return (
    <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8 border border-gray-100 dark:border-slate-700">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-green-500 rounded-2xl flex items-center justify-center">
          <Info className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Practical Info</h2>
      </div>

      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="bg-teal-50 dark:bg-teal-900/20 rounded-2xl p-4 border border-teal-100 dark:border-teal-800">
            <div className="flex items-start gap-3">
              <item.icon className="w-5 h-5 text-teal-600 dark:text-teal-400 mt-1 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">{item.label}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.value}</p>
                {item.extra && (
                  <p className="text-xs text-teal-600 dark:text-teal-400 mt-1">{item.extra}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
