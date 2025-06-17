'use client';
import { useEffect, useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { DateRange } from 'react-day-picker';
import { useProperty } from '@/app/utils/store';
import { generateBlockedPeriods, generateDateRange, generateDisableDates } from '@/app/utils/calendar';
import { useToast } from '@/hooks/use-toast';

export default function BookingCalendar() {
  const currentDate = new Date();
  const defaultSelected: DateRange = {
    from: undefined,
    to: undefined,
  };
  const [range, setRange] = useState<DateRange | undefined>(defaultSelected);
  const bookings = useProperty((state) => state.bookings);
  const blockedPeriods = generateBlockedPeriods({
    bookings,
    today: currentDate,
  });

  const { toast } = useToast();
  const unavailableDates = generateDisableDates(blockedPeriods);

  useEffect(() => {
    const selectedRange = generateDateRange(range);
    const isDisabledDateIncluded = selectedRange.some((date) => {
      if (unavailableDates[date]) {
        setRange(defaultSelected);
        toast({
          description: 'Some dates are booked. Please select again.',
        });
        return true;
      }
      return false;
    });
    useProperty.setState({ range });
  }, [range]);

  return (
    <Calendar
      id='test'
      mode='range'
      defaultMonth={currentDate}
      selected={range}
      onSelect={setRange}
      className='mb-4'
      disabled={blockedPeriods}
    />
  );
}


