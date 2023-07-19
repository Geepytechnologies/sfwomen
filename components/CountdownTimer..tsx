import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeRemaining, setTimeRemaining] = useState(
    targetDate.getTime() - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const remaining = targetDate.getTime() - now;
      setTimeRemaining(remaining);

      if (remaining < 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [targetDate]);

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  return (
    <div className="flex items-center justify-center gap-9">
      <div className="w-12 h-12 animate-bounce border-[rgba(255,255,255,0.3)] flex items-center justify-center font-rob font-[500] rounded-lg border-2">
        {days}d
      </div>
      <div className="w-12 h-12 animate-bounce border-[rgba(255,255,255,0.3)] flex items-center justify-center font-rob font-[500] rounded-lg border-2">
        {hours}h
      </div>
      <div className="w-12 h-12 animate-bounce border-[rgba(255,255,255,0.3)] flex items-center justify-center font-rob font-[500] rounded-lg border-2">
        {minutes}m
      </div>
      <div className="w-12 h-12 animate-bounce border-[rgba(255,255,255,0.3)] flex items-center justify-center font-rob font-[500] rounded-lg border-2">
        {seconds}s
      </div>
    </div>
  );
};

export default CountdownTimer;
