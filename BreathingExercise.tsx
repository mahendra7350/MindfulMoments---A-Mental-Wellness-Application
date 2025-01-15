import React, { useState, useEffect } from 'react';
import { Wind } from 'lucide-react';

const BreathingExercise = () => {
  const [phase, setPhase] = useState('ready');
  const [counter, setCounter] = useState(4);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: number;

    if (isActive) {
      interval = setInterval(() => {
        setCounter((prev) => {
          if (prev === 1) {
            switch (phase) {
              case 'inhale':
                setPhase('hold');
                return 7;
              case 'hold':
                setPhase('exhale');
                return 8;
              case 'exhale':
                setPhase('inhale');
                return 4;
              default:
                return prev;
            }
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive, phase]);

  const startExercise = () => {
    setIsActive(true);
    setPhase('inhale');
    setCounter(4);
  };

  const stopExercise = () => {
    setIsActive(false);
    setPhase('ready');
    setCounter(4);
  };

  return (
    <div className="max-w-md mx-auto text-center space-y-8">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white">4-7-8 Breathing Exercise</h2>

      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
        <div className={`w-48 h-48 mx-auto rounded-full flex items-center justify-center transition-all duration-1000 ${
          phase === 'inhale'
            ? 'bg-blue-100 scale-110'
            : phase === 'hold'
            ? 'bg-purple-100 scale-100'
            : phase === 'exhale'
            ? 'bg-green-100 scale-90'
            : 'bg-gray-100'
        }`}>
          <div className="text-center">
            <Wind className={`h-12 w-12 mx-auto mb-2 ${
              phase === 'inhale'
                ? 'text-blue-500'
                : phase === 'hold'
                ? 'text-purple-500'
                : 'text-green-500'
            }`} />
            <div className="text-2xl font-bold text-gray-800">
              {phase === 'ready' ? 'Ready?' : counter}
            </div>
            <div className="text-sm text-gray-600 capitalize">{phase}</div>
          </div>
        </div>

        <div className="mt-8">
          {!isActive ? (
            <button
              onClick={startExercise}
              className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-colors"
            >
              Start Breathing
            </button>
          ) : (
            <button
              onClick={stopExercise}
              className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-8 py-3 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              Stop
            </button>
          )}
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-left">
        <h3 className="text-xl font-semibold mb-4 dark:text-white">How it works:</h3>
        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
          <li>1. Inhale quietly through your nose for 4 seconds</li>
          <li>2. Hold your breath for 7 seconds</li>
          <li>3. Exhale completely through your mouth for 8 seconds</li>
          <li>4. Repeat the cycle 4 times</li>
        </ul>
      </div>
    </div>
  );
};

export default BreathingExercise;