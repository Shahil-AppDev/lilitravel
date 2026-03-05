import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

interface CalendarBlock {
  start_date: string;
  end_date: string;
  block_type: string;
  source?: string;
}

interface PropertyCalendarProps {
  propertyId: number;
  selectedCheckIn?: Date;
  selectedCheckOut?: Date;
  onDateSelect: (checkIn: Date, checkOut: Date) => void;
}

export default function PropertyCalendar({ propertyId, selectedCheckIn, selectedCheckOut, onDateSelect }: PropertyCalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [blocks, setBlocks] = useState<CalendarBlock[]>([]);
  const [selectingCheckIn, setSelectingCheckIn] = useState(true);
  const [tempCheckIn, setTempCheckIn] = useState<Date | null>(selectedCheckIn || null);

  useEffect(() => {
    fetchAvailability();
  }, [propertyId, currentMonth]);

  const fetchAvailability = async () => {
    const startDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
    const endDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 2, 0);

    const response = await fetch(
      `/api/properties/${propertyId}/availability?startDate=${startDate.toISOString().split('T')[0]}&endDate=${endDate.toISOString().split('T')[0]}`
    );
    const data = await response.json();
    setBlocks(data);
  };

  const isDateBlocked = (date: Date): boolean => {
    const dateStr = date.toISOString().split('T')[0];
    return blocks.some(block => {
      return dateStr >= block.start_date && dateStr <= block.end_date;
    });
  };

  const handleDateClick = (date: Date) => {
    if (isDateBlocked(date) || date < new Date(new Date().setHours(0, 0, 0, 0))) {
      return;
    }

    if (selectingCheckIn) {
      setTempCheckIn(date);
      setSelectingCheckIn(false);
    } else {
      if (tempCheckIn && date > tempCheckIn) {
        onDateSelect(tempCheckIn, date);
        setSelectingCheckIn(true);
      } else {
        setTempCheckIn(date);
      }
    }
  };

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days: (Date | null)[] = [];
    
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }

    return days;
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const isInRange = (date: Date): boolean => {
    if (!selectedCheckIn || !selectedCheckOut) return false;
    return date >= selectedCheckIn && date <= selectedCheckOut;
  };

  const isCheckInDate = (date: Date): boolean => {
    return selectedCheckIn?.toDateString() === date.toDateString();
  };

  const isCheckOutDate = (date: Date): boolean => {
    return selectedCheckOut?.toDateString() === date.toDateString();
  };

  const days = getDaysInMonth(currentMonth);
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-gray-200 dark:border-slate-700">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={prevMonth}
          aria-label="Previous month"
          className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
          {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
        </h3>
        <button
          onClick={nextMonth}
          aria-label="Next month"
          className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-2 mb-2">
        {weekDays.map(day => (
          <div key={day} className="text-center text-sm font-semibold text-gray-600 dark:text-gray-400 py-2">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2">
        {days.map((date, index) => {
          if (!date) {
            return <div key={`empty-${index}`} className="aspect-square" />;
          }

          const blocked = isDateBlocked(date);
          const past = date < new Date(new Date().setHours(0, 0, 0, 0));
          const inRange = isInRange(date);
          const checkIn = isCheckInDate(date);
          const checkOut = isCheckOutDate(date);

          return (
            <button
              key={date.toISOString()}
              onClick={() => handleDateClick(date)}
              disabled={blocked || past}
              className={`aspect-square rounded-lg text-sm font-medium transition-all ${
                blocked || past
                  ? 'bg-gray-100 dark:bg-slate-700 text-gray-400 cursor-not-allowed line-through'
                  : checkIn || checkOut
                  ? 'bg-blue-600 text-white shadow-md'
                  : inRange
                  ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                  : 'bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 hover:bg-blue-50 dark:hover:bg-blue-900/20 border border-gray-200 dark:border-slate-600'
              }`}
            >
              {date.getDate()}
            </button>
          );
        })}
      </div>

      <div className="mt-6 space-y-2 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-blue-600 rounded"></div>
          <span className="text-gray-600 dark:text-gray-400">Selected dates</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-100 dark:bg-slate-700 rounded line-through"></div>
          <span className="text-gray-600 dark:text-gray-400">Unavailable</span>
        </div>
      </div>

      {selectingCheckIn ? (
        <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">Select check-in date</p>
      ) : (
        <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">Select check-out date</p>
      )}
    </div>
  );
}
