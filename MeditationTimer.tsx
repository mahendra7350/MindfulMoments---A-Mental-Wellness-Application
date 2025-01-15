import React, { useState, useEffect } from 'react';
import { Play, Pause, RefreshCw, Check } from 'lucide-react';

interface Props {
  onComplete: (duration: number) => void;
}

const MeditationTimer: React.FC<Props> = ({ onComplete }) => {
  const [time, setTime] = useState(600); // 10 minutes in seconds
  const [isActive, setIsActive] = useState(false);
  const [selectedTime, setSelectedTime] = useState(600);
  const [customMinutes, setCustomMinutes] = useState('');
  const [sessionCompleted, setSessionCompleted] = useState(false);

  useEffect(() => {
    let interval: number;

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((time) => {
          if (time <= 1) {
            setIsActive(false);
            setSessionCompleted(true);
            return 0;
          }
          return time - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive, time]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTime(selectedTime);
    setSessionCompleted(false);
  };

  const handleCustomTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && Number(value) <= 180) {
      setCustomMinutes(value);
    }
  };

  const setCustomTime = () => {
    const minutes = Number(customMinutes);
    if (minutes > 0) {
      const seconds = minutes * 60;
      setSelectedTime(seconds);
      setTime(seconds);
      setCustomMinutes('');
    }
  };

  const completeSession = () => {
    onComplete(selectedTime);
    setSessionCompleted(false);
    resetTimer();
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="max-w-md mx-auto text-center space-y-8">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Meditation Timer</h2>
      
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
        <div className="text-6xl font-bold mb-8 text-purple-600">
          {formatTime(time)}
        </div>

        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={toggleTimer}
            disabled={sessionCompleted}
            className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-colors disabled:opacity-50"
          >
            {isActive ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
          </button>
          <button
            onClick={resetTimer}
            className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-6 py-3 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            <RefreshCw className="h-6 w-6" />
          </button>
        </div>

        {sessionCompleted && (
          <button
            onClick={completeSession}
            className="w-full mb-6 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center"
          >
            <Check className="h-5 w-5 mr-2" />
            Mark Session Complete
          </button>
        )}

        <div className="mb-6">
          <div className="flex space-x-2">
            <input
              type="text"
              value={customMinutes}
              onChange={handleCustomTimeChange}
              placeholder="Enter minutes (max 180)"
              className="flex-1 p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
            <button
              onClick={setCustomTime}
              className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Set Time
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {[5, 10, 15].map((mins) => (
            <button
              key={mins}
              onClick={() => {
                setSelectedTime(mins * 60);
                setTime(mins * 60);
              }}
              className={`p-2 rounded ${
                selectedTime === mins * 60
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white'
              }`}
            >
              {mins} min
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4 dark:text-white">Meditation Tips</h3>
        <ul className="text-left text-gray-600 dark:text-gray-300 space-y-2">
          <li>• Find a quiet, comfortable space</li>
          <li>• Sit in a relaxed, upright position</li>
          <li>• Focus on your breath</li>
          <li>• Let thoughts come and go without judgment</li>
        </ul>
      </div>
    </div>
  );
};

export default MeditationTimer;