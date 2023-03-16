import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const calculateCountdown = () => {
    const targetDate = new Date("March 18, 2023 11:11:00").getTime();
    const now = new Date().getTime();
    const timeDifference = targetDate - now;

    if (timeDifference > 0) {
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    }
  };

  useEffect(() => {
    const intervalId = setInterval(calculateCountdown, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div className="flex items-center mt-3 space-x-3 font-content">
        <div className="flex items-center justify-center flex-col text-sm">
          <div className="text-3xl font-mono w-14 h-14 flex items-center justify-center border shadow-md shadow-white">
            {countdown.days}
          </div>{" "}
          Days
        </div>
        <div className="flex items-center justify-center flex-col text-3xl font-mono -mt-7">
          :
        </div>
        <div className="flex items-center justify-center flex-col text-sm">
          <div className="text-3xl font-mono w-14 h-14 flex items-center justify-center border shadow-md shadow-white">
            {countdown.hours}
          </div>{" "}
          Hours
        </div>
        <div className="flex items-center justify-center flex-col text-3xl font-mono -mt-7">
          :
        </div>
        <div className="flex items-center justify-center flex-col text-sm">
          <div className="text-3xl font-mono w-14 h-14 flex items-center justify-center border shadow-md shadow-white">
            {countdown.minutes}
          </div>{" "}
          Minutes
        </div>
        <div className="flex items-center justify-center flex-col text-3xl font-mono -mt-7">
          :
        </div>
        <div className="flex items-center justify-center flex-col text-sm">
          <div className="text-3xl font-mono w-14 h-14 flex items-center justify-center border shadow-md shadow-white">
            {countdown.seconds}
          </div>{" "}
          Seconds
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
