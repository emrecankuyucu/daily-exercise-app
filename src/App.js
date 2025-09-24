import React, { useState, useEffect } from 'react';
import './styles/globals.css';
import './styles/animations.css';
import DaySelector from './components/DaySelector/DaySelector';
import ExercisePlayer from './components/ExercisePlayer/ExercisePlayer';
import { exercisePrograms } from './data/exercises';
import { STORAGE_KEYS } from './utils/constants';

function App() {
  const [selectedDay, setSelectedDay] = useState(null);
  const [currentExercise, setCurrentExercise] = useState(0);

  // Load saved state from localStorage
  useEffect(() => {
    const savedDay = localStorage.getItem(STORAGE_KEYS.SELECTED_DAY);
    const savedExercise = localStorage.getItem(STORAGE_KEYS.CURRENT_EXERCISE);
    
    if (savedDay) {
      setSelectedDay(savedDay);
    }
    if (savedExercise) {
      setCurrentExercise(parseInt(savedExercise, 10));
    }
  }, []);

  // Save state to localStorage
  useEffect(() => {
    if (selectedDay) {
      localStorage.setItem(STORAGE_KEYS.SELECTED_DAY, selectedDay);
    }
  }, [selectedDay]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.CURRENT_EXERCISE, currentExercise.toString());
  }, [currentExercise]);

  const handleDaySelect = (day) => {
    setSelectedDay(day);
    setCurrentExercise(0);
  };

  const handleBackToMenu = () => {
    setSelectedDay(null);
    setCurrentExercise(0);
    localStorage.removeItem(STORAGE_KEYS.SELECTED_DAY);
    localStorage.removeItem(STORAGE_KEYS.CURRENT_EXERCISE);
  };

  const handleExerciseComplete = () => {
    setCurrentExercise(0);
  };

  return (
    <div className="app-container fade-in">
      <header>
        <h1 className="title animate-text-glow">💪 Günlük Egzersiz</h1>
      </header>
      <main>
      
      {!selectedDay ? (
        <DaySelector 
          onDaySelect={handleDaySelect}
          selectedDay={selectedDay}
        />
      ) : (
        <ExercisePlayer
          day={selectedDay}
          exercises={exercisePrograms[selectedDay]?.exercises || []}
          currentExercise={currentExercise}
          setCurrentExercise={setCurrentExercise}
          onComplete={handleExerciseComplete}
          onBackToMenu={handleBackToMenu}
          dayProgram={exercisePrograms[selectedDay]}
        />
      )}
      </main>
    </div>
  );
}

export default App;
