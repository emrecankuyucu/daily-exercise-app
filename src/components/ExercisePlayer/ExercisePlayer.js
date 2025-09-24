import React, { useState, useEffect } from 'react';
import './ExercisePlayer.css';
import ExerciseCard from '../ExerciseCard/ExerciseCard';
import { WORKOUT_TYPES } from '../../utils/constants';

const ExercisePlayer = ({
    day,
    exercises,
    currentExercise,
    setCurrentExercise,
    onComplete,
    onBackToMenu,
    dayProgram
}) => {
    const [isCompleted, setIsCompleted] = useState(false);

    // Check if it's a rest day
    const isRestDay = dayProgram?.type === WORKOUT_TYPES.REST;

    // Handle exercise completion
    useEffect(() => {
        if (!isRestDay && currentExercise >= exercises.length && exercises.length > 0) {
            setIsCompleted(true);
        }
    }, [currentExercise, exercises.length, isRestDay]);

    const handleNextExercise = () => {
        if (currentExercise < exercises.length - 1) {
            setCurrentExercise(currentExercise + 1);
        } else {
            setIsCompleted(true);
        }
    };

    const handleSkipExercise = () => {
        handleNextExercise();
    };

    const handleRestartWorkout = () => {
        setCurrentExercise(0);
        setIsCompleted(false);
    };

    const getProgressPercentage = () => {
        if (exercises.length === 0) return 0;
        return Math.round(((currentExercise + 1) / exercises.length) * 100);
    };

    // Rest Day Component
    if (isRestDay) {
        return (
            <div className="exercise-player-container animate-slide-in-top">
                <div className="rest-day-card glass-card">
                    <div className="rest-day-content">
                        <div className="rest-day-icon">🧘‍♀️</div>
                        <h2 className="rest-day-title">{dayProgram.title}</h2>
                        <p className="rest-day-message">
                            Bugün dinlenme günü! Vücudunun toparlanması için gerekli olan bu molayı değerlendir.
                        </p>
                        <div className="rest-day-suggestions">
                            <h4>Bugün yapabileceklerin:</h4>
                            <ul>
                                <li>🚶‍♀️ Hafif yürüyüş</li>
                                <li>🧘‍♂️ Meditasyon</li>
                                <li>📚 Kitap okuma</li>
                                <li>🛁 Rahatlatıcı banyo</li>
                                <li>💤 Kaliteli uyku</li>
                            </ul>
                        </div>
                        <button
                            className="btn-primary back-btn"
                            onClick={onBackToMenu}
                        >
                            🏠 Ana Menüye Dön
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    // Workout Completed Component
    if (isCompleted) {
        return (
            <div className="exercise-player-container animate-slide-in-top">
                <div className="completion-card glass-card">
                    <div className="completion-content">
                        <div className="completion-icon animate-bounce">🎉</div>
                        <h2 className="completion-title">Tebrikler!</h2>
                        <p className="completion-message">
                            {dayProgram.title} egzersizlerini başarıyla tamamladın!
                        </p>
                        <div className="completion-stats">
                            <div className="stat-item">
                                <span className="stat-number">{exercises.length}</span>
                                <span className="stat-label">Egzersiz</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">100%</span>
                                <span className="stat-label">Tamamlandı</span>
                            </div>
                        </div>
                        <div className="completion-actions">
                            <button
                                className="btn-secondary restart-btn"
                                onClick={handleRestartWorkout}
                            >
                                🔄 Tekrar Yap
                            </button>
                            <button
                                className="btn-primary back-btn"
                                onClick={onBackToMenu}
                            >
                                🏠 Ana Menüye Dön
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Main Exercise Player
    return (
        <div className="exercise-player-container animate-slide-in-top">
            {/* Header with progress */}
            <div className="player-header">
                <button
                    className="back-button"
                    onClick={onBackToMenu}
                    aria-label="Ana menüye geri dön"
                >
                    ← Geri
                </button>

                <div className="workout-info">
                    <h2 className="workout-title">{dayProgram.title}</h2>
                    <div className="progress-info">
                        <span className="progress-text">
                            {currentExercise + 1} / {exercises.length} Egzersiz
                        </span>
                        <span className="progress-percentage">
                            {getProgressPercentage()}%
                        </span>
                    </div>
                </div>
            </div>

            {/* Progress Bar */}
            <div className="progress-bar-container">
                <div
                    className="progress-bar"
                    style={{ width: `${getProgressPercentage()}%` }}
                />
            </div>

            {/* Current Exercise */}
            {exercises.length > 0 && currentExercise < exercises.length && (
                <ExerciseCard
                    exercise={exercises[currentExercise]}
                    onNext={handleNextExercise}
                    onSkip={handleSkipExercise}
                    isActive={true}
                />
            )}

            {/* Exercise Navigation */}
            <div className="exercise-navigation">
                <button
                    className="nav-btn prev-btn"
                    onClick={() => setCurrentExercise(Math.max(0, currentExercise - 1))}
                    disabled={currentExercise === 0}
                    aria-label="Önceki egzersize git"
                >
                    ⏮️ Önceki
                </button>

                <div className="exercise-dots">
                    {exercises.map((_, index) => (
                        <button
                            key={index}
                            className={`dot ${index === currentExercise ? 'active' : ''} ${index < currentExercise ? 'completed' : ''}`}
                            onClick={() => setCurrentExercise(index)}
                            aria-label={`${index + 1}. egzersize git ${index < currentExercise ? '(tamamlandı)' : index === currentExercise ? '(şu anki)' : ''}`}
                        >
                            {index < currentExercise ? '✓' : index + 1}
                        </button>
                    ))}
                </div>

                <button
                    className="nav-btn next-btn"
                    onClick={() => setCurrentExercise(Math.min(exercises.length - 1, currentExercise + 1))}
                    disabled={currentExercise === exercises.length - 1}
                    aria-label="Sonraki egzersize git"
                >
                    Sonraki ⏭️
                </button>
            </div>
        </div>
    );
};

export default ExercisePlayer;