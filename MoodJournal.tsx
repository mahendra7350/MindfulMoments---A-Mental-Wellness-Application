import React, { useState } from 'react';
import { Smile, Frown, Meh, Save } from 'lucide-react';

interface JournalEntry {
  date: string;
  mood: string;
  notes: string;
}

const MoodJournal = () => {
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [currentMood, setCurrentMood] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentMood) return;

    const newEntry = {
      date: new Date().toLocaleDateString(),
      mood: currentMood,
      notes,
    };

    setEntries([newEntry, ...entries]);
    setCurrentMood('');
    setNotes('');
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white">Mood Journal</h2>

      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4 dark:text-white">How are you feeling today?</h3>
          <div className="flex justify-center space-x-8">
            {[
              { icon: <Smile className="h-12 w-12" />, mood: 'happy' },
              { icon: <Meh className="h-12 w-12" />, mood: 'neutral' },
              { icon: <Frown className="h-12 w-12" />, mood: 'sad' },
            ].map(({ icon, mood }) => (
              <button
                key={mood}
                type="button"
                onClick={() => setCurrentMood(mood)}
                className={`p-4 rounded-full transition-colors ${
                  currentMood === mood
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                }`}
              >
                {icon}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 dark:text-gray-300 mb-2">Journal Entry</label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            rows={4}
            placeholder="Write your thoughts here..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center"
          disabled={!currentMood}
        >
          <Save className="h-5 w-5 mr-2" />
          Save Entry
        </button>
      </form>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold dark:text-white">Previous Entries</h3>
        {entries.map((entry, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600 dark:text-gray-300">{entry.date}</span>
              <span className="capitalize text-purple-600">{entry.mood}</span>
            </div>
            <p className="text-gray-700 dark:text-gray-300">{entry.notes}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoodJournal;