import { useState, useEffect, useRef, useCallback } from 'react';
import { TIMER_STATES } from '../utils/constants';

const useTimer = (initialTime = 0, onComplete = null) => {
  const [timeRemaining, setTimeRemaining] = useState(initialTime);
  const [timerState, setTimerState] = useState(TIMER_STATES.IDLE);
  const intervalRef = useRef(null);
  const startTimeRef = useRef(null);
  const pausedTimeRef = useRef(null);

  // Start timer
  const startTimer = useCallback(() => {
    if (timeRemaining > 0) {
      setTimerState(TIMER_STATES.RUNNING);
      startTimeRef.current = Date.now();
    }
  }, [timeRemaining]);

  // Pause timer
  const pauseTimer = useCallback(() => {
    if (timerState === TIMER_STATES.RUNNING) {
      setTimerState(TIMER_STATES.PAUSED);
      pausedTimeRef.current = timeRemaining;
    }
  }, [timerState, timeRemaining]);

  // Resume timer
  const resumeTimer = useCallback(() => {
    if (timerState === TIMER_STATES.PAUSED) {
      setTimerState(TIMER_STATES.RUNNING);
      startTimeRef.current = Date.now();
    }
  }, [timerState]);

  // Reset timer
  const resetTimer = useCallback((newTime = initialTime) => {
    setTimerState(TIMER_STATES.IDLE);
    setTimeRemaining(newTime);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, [initialTime]);

  // Stop timer
  const stopTimer = () => {
    setTimerState(TIMER_STATES.COMPLETED);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // Main timer effect
  useEffect(() => {
    if (timerState === TIMER_STATES.RUNNING && timeRemaining > 0) {
      intervalRef.current = setInterval(() => {
        setTimeRemaining((prevTime) => {
          const newTime = prevTime - 1;
          
          if (newTime <= 0) {
            setTimerState(TIMER_STATES.COMPLETED);
            if (onComplete) {
              onComplete();
            }
            return 0;
          }
          
          return newTime;
        });
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [timerState, timeRemaining, onComplete]);

  // Handle page visibility change (pause when tab is not active)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden && timerState === TIMER_STATES.RUNNING) {
        pauseTimer();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [timerState, pauseTimer]);

  // Format time for display
  const formatTime = (seconds = timeRemaining) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Get progress percentage (for circular progress)
  const getProgress = () => {
    if (initialTime === 0) return 0;
    return ((initialTime - timeRemaining) / initialTime) * 100;
  };

  // Check if timer is active
  const isActive = timerState === TIMER_STATES.RUNNING;
  const isPaused = timerState === TIMER_STATES.PAUSED;
  const isCompleted = timerState === TIMER_STATES.COMPLETED;
  const isIdle = timerState === TIMER_STATES.IDLE;

  return {
    timeRemaining,
    timerState,
    isActive,
    isPaused,
    isCompleted,
    isIdle,
    startTimer,
    pauseTimer,
    resumeTimer,
    resetTimer,
    stopTimer,
    formatTime: () => formatTime(timeRemaining),
    getProgress,
    setTimeRemaining
  };
};

export default useTimer;