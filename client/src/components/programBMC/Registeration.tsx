import React, { useState, useEffect } from 'react';
import BookletIcon from '/images/programpage/bmc/booklet.svg';

const formatTime = (time: number): string =>
  time < 10 ? `0${time}` : String(time);

interface TimeLeft {
  [unit: string]: number;
}

const Registration: React.FC = () => {
  const targetDate = new Date('August 28, 2025 23:59:59');

  const calculateTimeLeft = (): TimeLeft => {
    const diff = +targetDate - +new Date();
    if (diff <= 0) return {}; 
    return {
      days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours:   Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / 1000 / 60) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const timerComponents: React.ReactElement[] = [];

  Object.keys(timeLeft).forEach(interval => {
    const value = timeLeft[interval];
    if (value == null) return; 
    timerComponents.push(
      <div
        key={interval}
        className="flex flex-col items-center justify-center w-24 h-24 md:w-28 md:h-28 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg"
      >
        <span className="text-4xl md:text-5xl font-bold text-white">
          {formatTime(value)}
        </span>
        <span className="text-sm text-white/80 uppercase tracking-widest">
          {interval}
        </span>
      </div>
    );
  });

  return (
    <section className="min-h-200 w-full flex items-center justify-center p-4 font-rubik">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-b from-[#C4EF7B] via-[#9FCB56] to-[#7C9F42] text-transparent bg-clip-text drop-shadow-[0_0_4px_#fff]">
          Business Model Canvas Competition
        </h1>
        <p className="text-lg mb-8 bg-gradient-to-b from-[#C4EF7B] via-[#9FCB56] to-[#7C9F42] text-transparent bg-clip-text drop-shadow-[0_0_2px_#fff] uppercase tracking-widest">
          registration closes in
        </p>
        <div className="flex flex-wrap justify-center gap-3 md:gap-5 mb-10">
          {timerComponents.length ? timerComponents : <span className="text-2xl font-bold">Registration has closed!</span>}
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-8 py-3 rounded-xl bg-[#5EC7ED] text-white font-bold text-lg shadow-lg transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#5EC7ED]/50">
            Register Now
          </button>
          <button className="px-8 py-3 rounded-xl bg-[#98D532] text-white font-bold text-lg shadow-lg flex items-center justify-center gap-2 transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#98D532]/50">
            <img src={BookletIcon} alt="Booklet Icon" className="w-6 h-6" />
            View Booklet
          </button>
        </div>
      </div>
    </section>
  );
};

export default Registration;