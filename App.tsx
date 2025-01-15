import React, { useState } from 'react';
import { Brain, Calendar, Heart, Menu, Moon, Sun } from 'lucide-react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import MeditationTimer from './components/MeditationTimer';
import MoodJournal from './components/MoodJournal';
import BreathingExercise from './components/BreathingExercise';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [theme, setTheme] = useState('light');
  const [meditationStreak, setMeditationStreak] = useState(0);
  const [focusTime, setFocusTime] = useState(0); // in minutes

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleMeditationComplete = (duration: number) => {
    setMeditationStreak(prev => prev + 1);
    setFocusTime(prev => prev + Math.floor(duration / 60));
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} theme={theme} toggleTheme={toggleTheme} />
      
      <main className="container mx-auto px-4 py-8">
        {activeTab === 'dashboard' && (
          <Dashboard meditationStreak={meditationStreak} focusTime={focusTime} />
        )}
        {activeTab === 'meditation' && (
          <MeditationTimer onComplete={handleMeditationComplete} />
        )}
        {activeTab === 'journal' && <MoodJournal />}
        {activeTab === 'breathing' && <BreathingExercise />}
      </main>
    </div>
  );
}

export default App;