import { useCallback, useRef } from 'react';

const useAudio = () => {
  const audioContextRef = useRef(null);

  // Web Audio API ile ses oluşturma
  const createAudioContext = useCallback(() => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
    }
    return audioContextRef.current;
  }, []);

  // Buton tıklama sesi
  const playClickSound = useCallback(() => {
    try {
      const audioContext = createAudioContext();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.1);
      
      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);

      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.1);
    } catch (error) {
      console.log('Ses çalınamadı:', error);
    }
  }, [createAudioContext]);

  // Başarı sesi
  const playSuccessSound = useCallback(() => {
    try {
      const audioContext = createAudioContext();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.frequency.setValueAtTime(523, audioContext.currentTime); // C5
      oscillator.frequency.setValueAtTime(659, audioContext.currentTime + 0.1); // E5
      oscillator.frequency.setValueAtTime(784, audioContext.currentTime + 0.2); // G5
      
      gainNode.gain.setValueAtTime(0.15, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);

      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.3);
    } catch (error) {
      console.log('Ses çalınamadı:', error);
    }
  }, [createAudioContext]);

  // Timer bitiş sesi
  const playTimerEndSound = useCallback(() => {
    try {
      const audioContext = createAudioContext();
      
      // İki farklı frekans ile alarm sesi
      for (let i = 0; i < 3; i++) {
        setTimeout(() => {
          const oscillator = audioContext.createOscillator();
          const gainNode = audioContext.createGain();

          oscillator.connect(gainNode);
          gainNode.connect(audioContext.destination);

          oscillator.frequency.setValueAtTime(880, audioContext.currentTime);
          oscillator.frequency.setValueAtTime(440, audioContext.currentTime + 0.1);
          
          gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
          gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);

          oscillator.start(audioContext.currentTime);
          oscillator.stop(audioContext.currentTime + 0.2);
        }, i * 300);
      }
    } catch (error) {
      console.log('Ses çalınamadı:', error);
    }
  }, [createAudioContext]);

  // Konuşma sentezi
  const speak = useCallback((text, options = {}) => {
    if ('speechSynthesis' in window) {
      // Önceki konuşmaları durdur
      window.speechSynthesis.cancel();
      
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'tr-TR';
      utterance.rate = options.rate || 0.9;
      utterance.pitch = options.pitch || 1;
      utterance.volume = options.volume || 0.8;
      
      // Türkçe ses varsa kullan
      const voices = window.speechSynthesis.getVoices();
      const turkishVoice = voices.find(voice => voice.lang.includes('tr'));
      if (turkishVoice) {
        utterance.voice = turkishVoice;
      }
      
      window.speechSynthesis.speak(utterance);
    }
  }, []);

  // Motivasyon konuşmaları
  const speakMotivation = useCallback((type) => {
    const motivations = {
      start: [
        "Harika! Egzersizine başlıyorsun. Kendini harika hissedeceksin!",
        "Mükemmel seçim! Bu antrenman seni güçlendirecek.",
        "Başlıyoruz! Her hareket seni hedefine yaklaştırıyor.",
        "Harika motivasyon! Bu egzersiz seansı senin olacak."
      ],
      exercise: [
        "Harika gidiyorsun! Devam et!",
        "Mükemmel form! Böyle devam et!",
        "Süpersin! Bir egzersiz daha tamamlandı!",
        "Harika iş çıkarıyorsun! Gurur duyabilirsin!"
      ],
      complete: [
        "Tebrikler! Antrenmanını başarıyla tamamladın!",
        "Mükemmel! Kendini harika hissediyor olmalısın!",
        "Süpersin! Bu başarıyı hak ettin!",
        "Harika iş! Vücudun sana teşekkür ediyor!"
      ],
      timer: [
        "Son 10 saniye! Dayanabilirsin!",
        "Neredeyse bitti! Güçlü kal!",
        "Harika gidiyorsun! Biraz daha!",
        "Mükemmel! Son spurt!"
      ]
    };

    const messages = motivations[type] || [];
    if (messages.length > 0) {
      const randomMessage = messages[Math.floor(Math.random() * messages.length)];
      speak(randomMessage);
    }
  }, [speak]);

  return {
    playClickSound,
    playSuccessSound,
    playTimerEndSound,
    speak,
    speakMotivation
  };
};

export default useAudio;