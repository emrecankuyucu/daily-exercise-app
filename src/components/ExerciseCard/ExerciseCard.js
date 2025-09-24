import React from 'react';
import './ExerciseCard.css';
import Timer from '../Timer/Timer';
import { EXERCISE_TYPES } from '../../utils/constants';
import * as Icons from 'react-icons/gi';

const ExerciseCard = ({ exercise, onNext, onSkip, isActive }) => {
  const handleTimerComplete = () => {
    // Auto advance when timer completes
    setTimeout(() => {
      onNext();
    }, 1000); // Small delay to show completion
  };

  const getExerciseIcon = (iconName) => {
    const IconComponent = Icons[iconName];
    return IconComponent ? <IconComponent size={60} /> : <Icons.GiMuscleUp size={60} />;
  };

  const isTimedExercise = exercise.type === EXERCISE_TYPES.TIMED;
  const isRepsExercise = exercise.type === EXERCISE_TYPES.REPS;

  return (
    <div className={`exercise-card glass-card ${isActive ? 'active' : ''} animate-slide-in-bottom`}>
      <header className="exercise-header">
        <div className="exercise-icon" aria-hidden="true">
          {getExerciseIcon(exercise.icon)}
        </div>
        <h2 className="exercise-name">{exercise.name}</h2>
      </header>

      <div className="exercise-content">
        <div className="exercise-description">
          <p>{exercise.description}</p>
        </div>

        <div className="exercise-details">
          {isTimedExercise && (
            <div className="exercise-duration">
              <span className="detail-label">Süre:</span>
              <span className="detail-value">{exercise.duration} saniye</span>
            </div>
          )}

          {isRepsExercise && (
            <div className="exercise-reps">
              <span className="detail-label">Tekrar:</span>
              <span className="detail-value">{exercise.reps} kez</span>
            </div>
          )}

          <div className="exercise-muscles">
            <span className="detail-label">Hedef Kaslar:</span>
            <div className="muscle-tags">
              {exercise.targetMuscles.map((muscle, index) => (
                <span key={index} className="muscle-tag">
                  {muscle}
                </span>
              ))}
            </div>
          </div>
        </div>

        <section className="exercise-instructions">
          <h4>Nasıl Yapılır:</h4>
          <ul>
            {exercise.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ul>
        </section>

        {isTimedExercise && (
          <div className="timer-section">
            <Timer
              duration={exercise.duration}
              onComplete={handleTimerComplete}
              isActive={isActive}
              autoStart={false}
            />
          </div>
        )}

        {isRepsExercise && (
          <div className="reps-section">
            <div className="reps-display">
              <div className="reps-counter">
                <span className="reps-number">{exercise.reps}</span>
                <span className="reps-label">TEKRAR</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="exercise-actions">
        <button 
          className="btn-secondary action-btn skip-btn" 
          onClick={onSkip}
          aria-label="Bu egzersizi atla ve sonrakine geç"
        >
          ⏭️ Atla
        </button>
        
        <button 
          className="btn-success action-btn complete-btn" 
          onClick={onNext}
          aria-label="Bu egzersizi tamamla ve sonrakine geç"
        >
          ✅ Tamamlandı
        </button>
      </div>
    </div>
  );
};

export default ExerciseCard;