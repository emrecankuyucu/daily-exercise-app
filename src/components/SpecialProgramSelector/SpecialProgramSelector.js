import React, { useState } from 'react';
import './SpecialProgramSelector.css';
import { specialPrograms } from '../../data/specialPrograms';

const SpecialProgramSelector = ({ onProgramSelect, onBackToMenu }) => {
  const [selectedDifficulty, setSelectedDifficulty] = useState('easy');

  const difficulties = {
    easy: { name: 'Kolay', color: 'easy', icon: '🌱' },
    medium: { name: 'Orta', color: 'medium', icon: '🔥' },
    hard: { name: 'Zor', color: 'hard', icon: '⚡' }
  };

  const handleProgramSelect = (program) => {
    onProgramSelect(program);
  };

  return (
    <div className="special-program-selector animate-slide-in-top">
      <div className="selector-header">
        <button 
          className="back-button"
          onClick={onBackToMenu}
          aria-label="Ana menüye geri dön"
        >
          ← Geri
        </button>
        <h2 className="selector-title">Özel Programlar</h2>
        <p className="selector-subtitle">Seviyeni seç ve antrenmanını başlat!</p>
      </div>

      {/* Zorluk Seçici */}
      <div className="difficulty-selector">
        {Object.entries(difficulties).map(([key, diff]) => (
          <button
            key={key}
            className={`difficulty-btn ${selectedDifficulty === key ? 'active' : ''} ${diff.color}`}
            onClick={() => setSelectedDifficulty(key)}
          >
            <span className="difficulty-icon">{diff.icon}</span>
            <span className="difficulty-name">{diff.name}</span>
            <span className="program-count">{specialPrograms[key]?.length || 0} Program</span>
          </button>
        ))}
      </div>

      {/* Program Listesi */}
      <div className="programs-grid">
        {specialPrograms[selectedDifficulty]?.map((program, index) => (
          <div
            key={program.id}
            className={`program-card glass-card animate-zoom-in ${selectedDifficulty}`}
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={() => handleProgramSelect(program)}
          >
            <div className="program-header">
              <div className="program-difficulty-badge">
                <span className="difficulty-icon">{difficulties[selectedDifficulty].icon}</span>
                <span>{difficulties[selectedDifficulty].name}</span>
              </div>
              <div className="program-duration">{program.duration}</div>
            </div>
            
            <div className="program-content">
              <h3 className="program-name">{program.name}</h3>
              <p className="program-description">{program.description}</p>
              
              <div className="program-stats">
                <div className="stat-item">
                  <span className="stat-number">{program.exercises.length}</span>
                  <span className="stat-label">Egzersiz</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">{program.duration}</span>
                  <span className="stat-label">Süre</span>
                </div>
              </div>
            </div>

            <div className="program-footer">
              <button className="start-program-btn">
                🚀 Başlat
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialProgramSelector;