// app/components/CountdownTimer.tsx
'use client';

import { useEffect, useState } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeLeft = (targetDate: Date): TimeLeft => {
  const now = new Date().getTime();
  const diff = targetDate.getTime() - now;
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds };
};

export default function CountdownTimer({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const endDate = new Date(targetDate);
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft(endDate)), 1000);
    setTimeLeft(calculateTimeLeft(endDate));
    return () => clearInterval(timer);
  }, [targetDate]);

  const units = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Min', value: timeLeft.minutes },
    { label: 'Sec', value: timeLeft.seconds },
  ];

  return (
    <div className="mt-8 flex items-center justify-center text-white">
      {units.map((unit, idx) => (
        <div key={unit.label} className="flex items-center">
          <div className="flex min-w-[70px] flex-col items-center justify-center rounded-lg bg-blue-600 bg-opacity-90 p-4">
            <span className="text-2xl font-bold sm:text-3xl">{unit.value.toString().padStart(2, '0')}</span>
            <span className="mt-1 text-xs uppercase">{unit.label}</span>
          </div>
          {idx < units.length - 1 && (
            <span className="mx-2 text-3xl font-bold">:</span>
          )}
        </div>
      ))}
    </div>
  );
}
