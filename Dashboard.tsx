import React from 'react';
import { Calendar, Heart, Brain, Wind } from 'lucide-react';

interface Props {
  meditationStreak: number;
  focusTime: number;
}

const Dashboard: React.FC<Props> = ({ meditationStreak, focusTime }) => {
  return (
    <div className="space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white">Welcome to MindfulMoments</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">Your daily companion for mental wellness</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Calendar className="h-8 w-8 text-purple-600" />
            <h2 className="ml-2 text-xl font-semibold dark:text-white">Meditation Streak</h2>
          </div>
          <p className="text-3xl font-bold text-gray-800 dark:text-white">{meditationStreak} days</p>
          <p className="text-gray-600 dark:text-gray-300">
            {meditationStreak === 0 
              ? "Start your meditation journey today!"
              : "Keep up the great work!"}
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Heart className="h-8 w-8 text-purple-600" />
            <h2 className="ml-2 text-xl font-semibold dark:text-white">Mood Tracker</h2>
          </div>
          <p className="text-3xl font-bold text-gray-800 dark:text-white">Positive</p>
          <p className="text-gray-600 dark:text-gray-300">Your overall mood this week</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Brain className="h-8 w-8 text-purple-600" />
            <h2 className="ml-2 text-xl font-semibold dark:text-white">Focus Time</h2>
          </div>
          <p className="text-3xl font-bold text-gray-800 dark:text-white">{focusTime} minutes</p>
          <p className="text-gray-600 dark:text-gray-300">Total meditation time</p>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 dark:text-white">Daily Inspiration</h2>
        <blockquote className="text-lg text-gray-600 dark:text-gray-300 italic">
          "Mindfulness isn't difficult. We just need to remember to do it."
          <footer className="mt-2 text-gray-500 dark:text-gray-400">- Sharon Salzberg</footer>
        </blockquote>
      </div>
    </div>
  );
};

export default Dashboard;