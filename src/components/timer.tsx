import { useState, useEffect } from 'react';

const CountdownTimer = ({ dateTime }) => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const calculateCountdown = () => {
    const targetDate = new Date(dateTime).getTime();
    const now = new Date().getTime();
    const timeDifference = targetDate - now;

    if (timeDifference > 0) {
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60),
      );
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    }
  };

  useEffect(() => {
    const intervalId = setInterval(calculateCountdown, 1000);
    return () => clearInterval(intervalId);
  }, [calculateCountdown]);

  return (
    <div>
      <div className='mt-3 flex items-center space-x-3 font-content'>
        <div className='flex flex-col items-center justify-center text-sm'>
          <div className='flex h-14 w-14 items-center justify-center rounded-md border font-lexend text-3xl text-gg-500 shadow-md shadow-white'>
            {countdown.days}
          </div>{' '}
          Days
        </div>
        <div className='-mt-7 flex flex-col items-center justify-center font-mono text-3xl'>
          :
        </div>
        <div className='flex flex-col items-center justify-center text-sm'>
          <div className='flex h-14 w-14 items-center justify-center rounded-md border font-lexend text-3xl text-gg-500 shadow-md shadow-white'>
            {countdown.hours}
          </div>{' '}
          Hours
        </div>
        <div className='-mt-7 flex flex-col items-center justify-center font-mono text-3xl'>
          :
        </div>
        <div className='flex flex-col items-center justify-center text-sm'>
          <div className='flex h-14 w-14 items-center justify-center rounded-md border font-lexend text-3xl text-gg-500 shadow-md shadow-white'>
            {countdown.minutes}
          </div>{' '}
          Minutes
        </div>
        <div className='-mt-7 flex flex-col items-center justify-center font-mono text-3xl'>
          :
        </div>
        <div className='flex flex-col items-center justify-center text-sm'>
          <div className='flex h-14 w-14 items-center justify-center rounded-md border font-lexend text-3xl text-gg-500 shadow-md shadow-white'>
            {countdown.seconds}
          </div>{' '}
          Seconds
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
