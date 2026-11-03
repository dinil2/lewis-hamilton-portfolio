import { useState, useEffect } from 'react';
import { getActiveNextRace, calculateTimeRemaining, ScheduledRace } from '@/lib/schedule';

export interface CountdownState {
  activeRace: ScheduledRace;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isStarted: boolean;
  isConcluded: boolean;
}

export function useRaceCountdown(): CountdownState {
  const [now, setNow] = useState<Date>(() => new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const activeRace = getActiveNextRace(now);
  const remaining = calculateTimeRemaining(activeRace.raceTimestampUtc, now);

  const raceDurationMs = 3 * 60 * 60 * 1000;
  const isConcluded =
    now.getTime() > new Date(activeRace.raceTimestampUtc).getTime() + raceDurationMs;

  return {
    activeRace,
    days: remaining.days,
    hours: remaining.hours,
    minutes: remaining.minutes,
    seconds: remaining.seconds,
    isStarted: remaining.isStarted,
    isConcluded,
  };
}
