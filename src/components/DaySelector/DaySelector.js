import React from 'react';
import './DaySelector.css';
import { DAYS_OF_WEEK, REST_DAYS } from '../../utils/constants';
import { exercisePrograms, dayKeys } from '../../data/exercises';
import useAudio from '../../hooks/useAudio';

const DaySelector = ({ onDaySelect, onSpecialProgramsSelect, selectedDay }) => {
  const { playClickSound, speak } = useAudio();

  const handleDayClick = (day) => {
    playClickSound();
    const dayKey = dayKeys[day];
    const program = exercisePrograms[dayKey];
    
    // Konuşma ile bilgilendirme
    if (program?.type === 'rest') {
      speak(`${day} dinlenme günü. Vücudunu dinlendir ve yarın için hazırlan.`);
    } else {
      speak(`${day} seçildi. ${program?.title} antrenmanına başlıyoruz!`);
    }
    
    onDaySelect(dayKey);
  };

  const handleSpecialProgramsClick = () => {
    playClickSound();
    speak("Özel programlar açılıyor. Seviyeni seç ve antrenmanına başla!");
    onSpecialProgramsSelect();
  };

  const getDayInfo = (day) => {
    const dayKey = dayKeys[day];
    const program = exercisePrograms[dayKey];
    return program;
  };

  const isRestDay = (day) => {
    return REST_DAYS.includes(day);
  };

  return (
    <div className="day-selector-container animate-slide-in-top">
      <h2 className="subtitle mb-30">Hangi günün egzersizini yapmak istiyorsun?</h2>
      
      <div className="days-grid">
        {DAYS_OF_WEEK.map((day, index) => {
          const dayInfo = getDayInfo(day);
          const isRest = isRestDay(day);
          
          return (
            <div
              key={day}
              className={`day-card glass-card ${isRest ? 'rest-day' : 'workout-day'} animate-zoom-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handleDayClick(day)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleDayClick(day);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`${day} - ${dayInfo?.title} ${!isRest ? `- ${dayInfo?.exercises?.length || 0} egzersiz` : '- dinlenme günü'}`}
            >
              <div className="day-name">{day}</div>
              <div className="day-title">{dayInfo?.title}</div>
              
              {!isRest && (
                <div className="exercise-count">
                  {dayInfo?.exercises?.length || 0} Egzersiz
                </div>
              )}
              
              {isRest && (
                <div className="rest-icon">🧘‍♀️</div>
              )}
              
              {!isRest && (
                <div className="workout-icon">💪</div>
              )}
            </div>
          );
        })}
      </div>
      
      {/* Özel Programlar Butonu */}
      <div className="special-programs-section">
        <div
          className="special-programs-card glass-card animate-zoom-in"
          style={{ animationDelay: '0.8s' }}
          onClick={handleSpecialProgramsClick}
        >
          <div className="special-programs-icon">🎯</div>
          <div className="special-programs-title">Özel Programlar</div>
          <div className="special-programs-subtitle">30 Farklı Antrenman</div>
          <div className="difficulty-badges">
            <span className="difficulty-badge easy">Kolay</span>
            <span className="difficulty-badge medium">Orta</span>
            <span className="difficulty-badge hard">Zor</span>
          </div>
        </div>
      </div>

      <div className="instruction-text">
        <p>Bir gün seçerek egzersiz programını başlat veya özel programları keşfet!</p>
      </div>
    </div>
  );
};

export default DaySelector;