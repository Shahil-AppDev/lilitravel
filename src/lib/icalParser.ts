interface ICalEvent {
  summary: string;
  startDate: Date;
  endDate: Date;
  uid: string;
  description?: string;
}

export function parseICalendar(icalData: string): ICalEvent[] {
  const events: ICalEvent[] = [];
  const lines = icalData.split(/\r?\n/);
  
  let currentEvent: Partial<ICalEvent> | null = null;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    if (line === 'BEGIN:VEVENT') {
      currentEvent = {};
    } else if (line === 'END:VEVENT' && currentEvent) {
      if (currentEvent.startDate && currentEvent.endDate && currentEvent.uid) {
        events.push(currentEvent as ICalEvent);
      }
      currentEvent = null;
    } else if (currentEvent) {
      const [key, ...valueParts] = line.split(':');
      const value = valueParts.join(':');
      
      if (key.startsWith('DTSTART')) {
        currentEvent.startDate = parseICalDate(value);
      } else if (key.startsWith('DTEND')) {
        currentEvent.endDate = parseICalDate(value);
      } else if (key === 'SUMMARY') {
        currentEvent.summary = value;
      } else if (key === 'UID') {
        currentEvent.uid = value;
      } else if (key === 'DESCRIPTION') {
        currentEvent.description = value;
      }
    }
  }
  
  return events;
}

function parseICalDate(dateString: string): Date {
  // Handle both DATE and DATETIME formats
  // YYYYMMDD or YYYYMMDDTHHmmssZ
  const cleaned = dateString.replace(/[^0-9]/g, '');
  
  const year = parseInt(cleaned.substring(0, 4));
  const month = parseInt(cleaned.substring(4, 6)) - 1;
  const day = parseInt(cleaned.substring(6, 8));
  
  if (cleaned.length >= 14) {
    const hour = parseInt(cleaned.substring(8, 10));
    const minute = parseInt(cleaned.substring(10, 12));
    const second = parseInt(cleaned.substring(12, 14));
    return new Date(Date.UTC(year, month, day, hour, minute, second));
  }
  
  return new Date(year, month, day);
}

export function generateICalendar(propertyName: string, bookings: Array<{
  id: number;
  guestName: string;
  checkIn: string;
  checkOut: string;
}>): string {
  const lines: string[] = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Lili Travel//Booking Calendar//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    `X-WR-CALNAME:${propertyName} - Bookings`,
    'X-WR-TIMEZONE:UTC',
  ];
  
  bookings.forEach(booking => {
    const startDate = formatICalDate(new Date(booking.checkIn));
    const endDate = formatICalDate(new Date(booking.checkOut));
    const uid = `booking-${booking.id}@lilitravel.com`;
    const timestamp = formatICalDate(new Date());
    
    lines.push(
      'BEGIN:VEVENT',
      `UID:${uid}`,
      `DTSTAMP:${timestamp}`,
      `DTSTART;VALUE=DATE:${startDate}`,
      `DTEND;VALUE=DATE:${endDate}`,
      `SUMMARY:Booked - ${booking.guestName}`,
      `DESCRIPTION:Property booked by ${booking.guestName}`,
      'STATUS:CONFIRMED',
      'TRANSP:OPAQUE',
      'END:VEVENT'
    );
  });
  
  lines.push('END:VCALENDAR');
  
  return lines.join('\r\n');
}

function formatICalDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}${month}${day}`;
}

export async function fetchAndParseICal(url: string): Promise<ICalEvent[]> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch iCal: ${response.statusText}`);
    }
    const icalData = await response.text();
    return parseICalendar(icalData);
  } catch (error) {
    console.error('Error fetching iCal:', error);
    throw error;
  }
}
