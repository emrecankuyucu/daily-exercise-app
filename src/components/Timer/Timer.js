import React from 'react';
import './Timer.css';
import useTimer from '../../hooks/useTimer';

const Timer = ({ duration, onComplete, isActive, autoStart = false }) => {
  const {
    timeRemaining,
    isActive: timerIsActive,
    isPaused,
    isCompleted,
    startTimer,
    pauseTimer,
    resumeTimer,
    resetTimer,
    formatTime,
    getProgress
  } = useTimer(duration, onComplete);

  // Auto start timer when component mounts or when isActive becomes true
  React.useEffect(() => {
    if (autoStart && isActive && !timerIsActive && !isCompleted) {
      startTimer();
    }
  }, [autoStart, isActive, timerIsActive, isCompleted, startTimer]);

  // Reset timer when duration changes
  React.useEffect(() => {
    resetTimer(duration);
  }, [duration, resetTimer]);

  const handleToggleTimer = () => {
    if (timerIsActive) {
      pauseTimer();
    } else if (isPaused) {
      resumeTimer();
    } else {
      startTimer();
    }
  };

  const handleResetTimer = () => {
    resetTimer(duration);
  };

  const progress = getProgress();
  const circumference = 2 * Math.PI * 45; // radius = 45
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="timer-container">
      <div className="timer-circle-container">
        <svg className="timer-circle" width="120" height="120">
          {/* Background circle */}
          <circle
            cx="60"
            cy="60"
            r="45"
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth="8"
            fill="transparent"
          />
          {/* Progress circle */}
          <circle
            cx="60"
            cy="60"
            r="45"
            stroke={isCompleted ? "#4ade80" : "#3b82f6"}
            strokeWidth="8"
            fill="transparent"
            strokeLinecap="round"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            className="timer-progress"
            style={{
              transition: 'stroke-dashoffset 1s linear',
              transform: 'rotate(-90deg)',
              transformOrigin: '50% 50%'
            }}
          />
        </svg>
        
        <div className="timer-display">
          <div className={`timer-time ${timeRemaining <= 10 && timerIsActive ? 'animate-timer-pulse' : ''}`}>
            {formatTime()}
          </div>
          <div className="timer-label">
            {isCompleted ? 'Tamamlandı!' : timerIsActive ? 'Devam ediyor' : isPaused ? 'Duraklatıldı' : 'Hazır'}
          </div>
        </div>
      </div>

      <div className="timer-controls">
        {!isCompleted && (
          <button
            className={`btn-timer ${timerIsActive ? 'btn-pause' : 'btn-play'}`}
            onClick={handleToggleTimer}
          >
            {timerIsActive ? '⏸️ Duraklat' : isPaused ? '▶️ Devam' : '▶️ Başlat'}
          </button>
        )}
        
        {(isPaused || isCompleted) && (
          <button
            className="btn-timer btn-reset"
            onClick={handleResetTimer}
          >
            🔄 Sıfırla
          </button>
        )}
      </div>

      {isCompleted && (
        <div className="timer-completed animate-bounce">
          ✅ Süre doldu!
        </div>
      )}
    </div>
  );
};

export default Timer;