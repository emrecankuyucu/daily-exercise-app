export const specialPrograms = {
  // KOLAY SEVİYE (10 Program)
  easy: [
    {
      id: 'easy_1',
      name: 'Başlangıç Kardiyo',
      difficulty: 'Kolay',
      duration: '15 dakika',
      description: 'Yeni başlayanlar için hafif kardiyo antrenmanı',
      exercises: [
        {
          id: 'marching',
          name: 'Yerinde Yürüyüş',
          description: 'Yerinde yavaş tempoda yürüyüş yapın',
          type: 'timed',
          duration: 60,
          targetMuscles: ['Bacak', 'Kardiyo'],
          icon: 'GiWalk',
          instructions: ['Yerinde durarak yürüyüş hareketi yap', 'Kolları da hareket ettir', 'Nefes almayı unutma']
        },
        {
          id: 'arm_circles',
          name: 'Kol Çevirme',
          description: 'Kolları yanlara açarak daire çizin',
          type: 'reps',
          reps: 10,
          targetMuscles: ['Omuz', 'Kol'],
          icon: 'GiArm',
          instructions: ['Kolları yanlara aç', 'Küçük daireler çiz', 'Yavaş ve kontrollü hareket et']
        },
        {
          id: 'knee_lifts',
          name: 'Diz Kaldırma',
          description: 'Dizleri göğse doğru kaldırın',
          type: 'reps',
          reps: 8,
          targetMuscles: ['Karın', 'Bacak'],
          icon: 'GiLeg',
          instructions: ['Ayakta dur', 'Dizleri sırayla göğse kaldır', 'Dengeyi koru']
        }
      ]
    },
    {
      id: 'easy_2',
      name: 'Esneklik ve Denge',
      difficulty: 'Kolay',
      duration: '12 dakika',
      description: 'Esneklik ve denge geliştirici hareketler',
      exercises: [
        {
          id: 'cat_cow',
          name: 'Kedi-İnek Pozu',
          description: 'Dört ayak üzerinde omurga hareketleri',
          type: 'reps',
          reps: 8,
          targetMuscles: ['Sırt', 'Core'],
          icon: 'GiCat',
          instructions: ['Dört ayak üzerine çök', 'Sırtını yukarı kaldır (kedi)', 'Sırtını aşağı indir (inek)']
        },
        {
          id: 'child_pose',
          name: 'Çocuk Pozu',
          description: 'Rahatlatıcı yoga pozu',
          type: 'timed',
          duration: 30,
          targetMuscles: ['Sırt', 'Kalça'],
          icon: 'GiMeditation',
          instructions: ['Dizlerin üzerine otur', 'Kolları öne uzat', 'Alnını yere değdir']
        }
      ]
    },
    {
      id: 'easy_3',
      name: 'Hafif Kuvvet',
      difficulty: 'Kolay',
      duration: '10 dakika',
      description: 'Temel kuvvet hareketleri',
      exercises: [
        {
          id: 'wall_pushup',
          name: 'Duvar Şınavı',
          description: 'Duvara karşı şınav hareketi',
          type: 'reps',
          reps: 8,
          targetMuscles: ['Göğüs', 'Kol'],
          icon: 'GiMuscleUp',
          instructions: ['Duvara karşı dur', 'Elleri duvara koy', 'İleri geri hareket et']
        },
        {
          id: 'chair_squat',
          name: 'Sandalye Squat',
          description: 'Sandalyeye oturup kalkma',
          type: 'reps',
          reps: 6,
          targetMuscles: ['Bacak', 'Kalça'],
          icon: 'GiChair',
          instructions: ['Sandalyenin önünde dur', 'Yavaşça otur', 'Yavaşça kalk']
        }
      ]
    },
    {
      id: 'easy_4',
      name: 'Sabah Aktivasyonu',
      difficulty: 'Kolay',
      duration: '8 dakika',
      description: 'Güne başlamak için hafif hareketler',
      exercises: [
        {
          id: 'shoulder_rolls',
          name: 'Omuz Çevirme',
          description: 'Omuzları daire şeklinde çevirin',
          type: 'reps',
          reps: 10,
          targetMuscles: ['Omuz', 'Boyun'],
          icon: 'GiShoulderArmor',
          instructions: ['Omuzları yukarı kaldır', 'Geriye doğru çevir', 'Yavaş ve kontrollü']
        },
        {
          id: 'ankle_circles',
          name: 'Ayak Bileği Çevirme',
          description: 'Ayak bileklerini çevirin',
          type: 'reps',
          reps: 8,
          targetMuscles: ['Ayak', 'Baldır'],
          icon: 'GiFoot',
          instructions: ['Bir ayağı kaldır', 'Daire şeklinde çevir', 'Diğer ayakla tekrarla']
        }
      ]
    },
    {
      id: 'easy_5',
      name: 'Nefes ve Rahatlama',
      difficulty: 'Kolay',
      duration: '10 dakika',
      description: 'Nefes egzersizleri ve rahatlama',
      exercises: [
        {
          id: 'deep_breathing',
          name: 'Derin Nefes',
          description: 'Derin nefes alma egzersizi',
          type: 'timed',
          duration: 60,
          targetMuscles: ['Akciğer', 'Rahatlama'],
          icon: 'GiLungs',
          instructions: ['Rahat otur', '4 sayarak nefes al', '4 sayarak nefes ver']
        },
        {
          id: 'neck_stretch',
          name: 'Boyun Germe',
          description: 'Boyun kaslarını germe',
          type: 'timed',
          duration: 20,
          targetMuscles: ['Boyun', 'Omuz'],
          icon: 'GiNeck',
          instructions: ['Başı sağa eğ', '20 saniye bekle', 'Sola tekrarla']
        }
      ]
    },
    {
      id: 'easy_6',
      name: 'Temel Mobilite',
      difficulty: 'Kolay',
      duration: '12 dakika',
      description: 'Eklem mobilitesi geliştirici hareketler',
      exercises: [
        {
          id: 'hip_circles',
          name: 'Kalça Çevirme',
          description: 'Kalçaları daire şeklinde çevirin',
          type: 'reps',
          reps: 8,
          targetMuscles: ['Kalça', 'Core'],
          icon: 'GiPelvis',
          instructions: ['Ayakta dur', 'Elleri kalçada', 'Kalçaları çevir']
        },
        {
          id: 'toe_touches',
          name: 'Ayak Parmağına Dokunma',
          description: 'Öne eğilerek ayak parmaklarına dokunun',
          type: 'reps',
          reps: 5,
          targetMuscles: ['Arka bacak', 'Sırt'],
          icon: 'GiTouchingHands',
          instructions: ['Ayakta dur', 'Yavaşça öne eğil', 'Ayak parmaklarına dokun']
        }
      ]
    },
    {
      id: 'easy_7',
      name: 'Hafif Karın',
      difficulty: 'Kolay',
      duration: '8 dakika',
      description: 'Başlangıç seviyesi karın egzersizleri',
      exercises: [
        {
          id: 'dead_bug',
          name: 'Ölü Böcek',
          description: 'Sırtüstü yatarak karşılıklı kol-bacak hareketi',
          type: 'reps',
          reps: 6,
          targetMuscles: ['Karın', 'Core'],
          icon: 'GiBug',
          instructions: ['Sırtüstü yat', 'Kol ve karşı bacağı kaldır', 'Yavaşça değiştir']
        },
        {
          id: 'pelvic_tilt',
          name: 'Pelvik Eğim',
          description: 'Pelvis bölgesini hareket ettirme',
          type: 'reps',
          reps: 8,
          targetMuscles: ['Alt karın', 'Pelvis'],
          icon: 'GiPelvis',
          instructions: ['Sırtüstü yat', 'Dizleri bük', 'Pelvis bölgesini kaldır']
        }
      ]
    },
    {
      id: 'easy_8',
      name: 'Günlük Hareket',
      difficulty: 'Kolay',
      duration: '15 dakika',
      description: 'Günlük yaşamda kullanılan hareketler',
      exercises: [
        {
          id: 'sit_to_stand',
          name: 'Otur-Kalk',
          description: 'Sandalyeye oturup kalkma hareketi',
          type: 'reps',
          reps: 8,
          targetMuscles: ['Bacak', 'Kalça'],
          icon: 'GiChair',
          instructions: ['Sandalyeye otur', 'Kolları göğüste kavuştur', 'Yavaşça kalk']
        },
        {
          id: 'step_ups',
          name: 'Basamak Çıkma',
          description: 'Alçak basamağa çıkma hareketi',
          type: 'reps',
          reps: 6,
          targetMuscles: ['Bacak', 'Denge'],
          icon: 'GiStairs',
          instructions: ['Basamağın önünde dur', 'Bir ayakla çık', 'Yavaşça in']
        }
      ]
    },
    {
      id: 'easy_9',
      name: 'Akşam Rahatlama',
      difficulty: 'Kolay',
      duration: '10 dakika',
      description: 'Günün sonunda rahatlama egzersizleri',
      exercises: [
        {
          id: 'gentle_twist',
          name: 'Hafif Bel Çevirme',
          description: 'Oturarak bel bölgesini çevirme',
          type: 'reps',
          reps: 5,
          targetMuscles: ['Bel', 'Yan karın'],
          icon: 'GiTwister',
          instructions: ['Yerde otur', 'Bacakları uzat', 'Beli sağa sola çevir']
        },
        {
          id: 'leg_elevation',
          name: 'Bacak Yükseltme',
          description: 'Bacakları yükselterek rahatlama',
          type: 'timed',
          duration: 60,
          targetMuscles: ['Bacak', 'Dolaşım'],
          icon: 'GiLeg',
          instructions: ['Sırtüstü yat', 'Bacakları duvara daya', 'Rahatla']
        }
      ]
    },
    {
      id: 'easy_10',
      name: 'Temel Denge',
      difficulty: 'Kolay',
      duration: '8 dakika',
      description: 'Denge ve koordinasyon geliştirici',
      exercises: [
        {
          id: 'single_leg_stand',
          name: 'Tek Ayak Durma',
          description: 'Tek ayak üzerinde durma',
          type: 'timed',
          duration: 15,
          targetMuscles: ['Denge', 'Bacak'],
          icon: 'GiBalancing',
          instructions: ['Bir ayak üzerinde dur', 'Dengeyi koru', 'Diğer ayakla tekrarla']
        },
        {
          id: 'heel_to_toe',
          name: 'Topuk-Parmak Yürüyüş',
          description: 'Düz çizgide yürüme',
          type: 'reps',
          reps: 8,
          targetMuscles: ['Denge', 'Koordinasyon'],
          icon: 'GiFootsteps',
          instructions: ['Düz çizgi hayal et', 'Topuk parmağa değsin', 'Yavaş yürü']
        }
      ]
    }
  ],

  // ORTA SEVİYE (10 Program)
  medium: [
    {
      id: 'medium_1',
      name: 'Kardiyo Blast',
      difficulty: 'Orta',
      duration: '20 dakika',
      description: 'Orta tempo kardiyo antrenmanı',
      exercises: [
        {
          id: 'jumping_jacks',
          name: 'Jumping Jacks',
          description: 'Zıplayarak kol bacak açma kapama',
          type: 'reps',
          reps: 15,
          targetMuscles: ['Tüm vücut', 'Kardiyo'],
          icon: 'GiJumpAcross',
          instructions: ['Ayakta dur', 'Zıplayarak bacakları aç', 'Kolları yukarı kaldır']
        },
        {
          id: 'high_knees',
          name: 'Yüksek Diz',
          description: 'Dizleri yüksek kaldırarak koşma',
          type: 'timed',
          duration: 30,
          targetMuscles: ['Bacak', 'Kardiyo'],
          icon: 'GiRunningShoe',
          instructions: ['Yerinde koş', 'Dizleri yüksek kaldır', 'Hızlı tempoda']
        },
        {
          id: 'butt_kicks',
          name: 'Topuk Vuruş',
          description: 'Topukları kalçaya vurma',
          type: 'timed',
          duration: 30,
          targetMuscles: ['Arka bacak', 'Kardiyo'],
          icon: 'GiLeg',
          instructions: ['Yerinde koş', 'Topukları kalçaya vur', 'Hızlı hareket et']
        }
      ]
    },
    {
      id: 'medium_2',
      name: 'Kuvvet Geliştirme',
      difficulty: 'Orta',
      duration: '25 dakika',
      description: 'Orta seviye kuvvet antrenmanı',
      exercises: [
        {
          id: 'modified_pushup',
          name: 'Dizüstü Şınav',
          description: 'Dizler yerde şınav hareketi',
          type: 'reps',
          reps: 10,
          targetMuscles: ['Göğüs', 'Kol'],
          icon: 'GiMuscleUp',
          instructions: ['Dizlerin üzerine çök', 'Elleri omuz hizasında', 'Şınav yap']
        },
        {
          id: 'bodyweight_squat',
          name: 'Vücut Ağırlığı Squat',
          description: 'Klasik squat hareketi',
          type: 'reps',
          reps: 12,
          targetMuscles: ['Bacak', 'Kalça'],
          icon: 'GiLeg',
          instructions: ['Ayaklar omuz genişliğinde', 'Kalçayı geriye it', 'Derin squat yap']
        },
        {
          id: 'plank_hold',
          name: 'Plank Tutma',
          description: 'Plank pozisyonunu koruma',
          type: 'timed',
          duration: 30,
          targetMuscles: ['Core', 'Karın'],
          icon: 'GiAbdominalArmor',
          instructions: ['Plank pozisyonuna geç', 'Vücudu düz tut', 'Nefes almaya devam et']
        }
      ]
    }
    // ... Diğer orta seviye programlar
  ],

  // ZOR SEVİYE (10 Program)  
  hard: [
    {
      id: 'hard_1',
      name: 'HIIT Inferno',
      difficulty: 'Zor',
      duration: '30 dakika',
      description: 'Yüksek yoğunluklu interval antrenmanı',
      exercises: [
        {
          id: 'burpee_advanced',
          name: 'Gelişmiş Burpee',
          description: 'Zıplamalı burpee hareketi',
          type: 'reps',
          reps: 8,
          targetMuscles: ['Tüm vücut', 'Kardiyo'],
          icon: 'GiJumpAcross',
          instructions: ['Squat pozisyonuna in', 'Plank pozisyonuna geç', 'Şınav çek', 'Zıplayarak kalk']
        },
        {
          id: 'mountain_climber_fast',
          name: 'Hızlı Mountain Climber',
          description: 'Yüksek tempoda mountain climber',
          type: 'timed',
          duration: 45,
          targetMuscles: ['Core', 'Kardiyo'],
          icon: 'GiMountainClimbing',
          instructions: ['Plank pozisyonunda', 'Dizleri hızla çek', 'Maksimum hızda']
        }
      ]
    }
    // ... Diğer zor seviye programlar
  ]
};

// Tüm programları tek listede topla
export const getAllSpecialPrograms = () => {
  return [
    ...specialPrograms.easy,
    ...specialPrograms.medium,
    ...specialPrograms.hard
  ];
};