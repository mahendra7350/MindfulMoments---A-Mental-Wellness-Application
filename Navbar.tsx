import React from 'react';
import { Brain, Calendar, Heart, Menu, Moon, Sun } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  theme: string;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, theme, toggleTheme }) => {
  return (
    <nav className={`${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white'} shadow-lg`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Brain className="h-8 w-8 text-purple-600" />
            <span className="ml-2 text-xl font-semibold">MindfulMoments</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`${activeTab === 'dashboard' ? 'text-purple-600' : ''} hover:text-purple-600`}
            >
              Dashboard
            </button>
            <button
              onClick={() => setActiveTab('meditation')}
              className={`${activeTab === 'meditation' ? 'text-purple-600' : ''} hover:text-purple-600`}
            >
              Meditation
            </button>
            <button
              onClick={() => setActiveTab('journal')}
              className={`${activeTab === 'journal' ? 'text-purple-600' : ''} hover:text-purple-600`}
            >
              Mood Journal
            </button>
            <button
              onClick={() => setActiveTab('breathing')}
              className={`${activeTab === 'breathing' ? 'text-purple-600' : ''} hover:text-purple-600`}
            >
              Breathing
            </button>
          </div>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;