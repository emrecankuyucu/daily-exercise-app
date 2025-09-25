export const specialPrograms = {
  // KOLAY SEVİYE (10 Program)
  easy: [
    {
      id: 'easy_1',
      name: 'Başlangıç Kardiyo',
      difficulty: 'Kolay',
      duration: '20 dakika',
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
        },
        {
          id: 'side_steps',
          name: 'Yana Adım',
          description: 'Sağa sola adım atarak hareket edin',
          type: 'reps',
          reps: 12,
          targetMuscles: ['Bacak', 'Kalça'],
          icon: 'GiFootsteps',
          instructions: ['Sağa bir adım at', 'Diğer ayağı yanına getir', 'Sola tekrarla']
        },
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
          id: 'heel_raises',
          name: 'Topuk Kaldırma',
          description: 'Parmak ucuna yükselip inme',
          type: 'reps',
          reps: 15,
          targetMuscles: ['Baldır'],
          icon: 'GiFoot',
          instructions: ['Ayakta dur', 'Parmak ucuna yüksel', 'Yavaşça in']
        },
        {
          id: 'gentle_twist',
          name: 'Hafif Bel Çevirme',
          description: 'Bel bölgesini sağa sola çevirme',
          type: 'reps',
          reps: 8,
          targetMuscles: ['Bel', 'Yan karın'],
          icon: 'GiTwister',
          instructions: ['Ayakta dur', 'Elleri kalçada', 'Beli sağa sola çevir']
        },
        {
          id: 'arm_swings',
          name: 'Kol Sallama',
          description: 'Kolları ileri geri sallama',
          type: 'reps',
          reps: 10,
          targetMuscles: ['Omuz', 'Kol'],
          icon: 'GiArm',
          instructions: ['Kolları yanında sallamaya başla', 'İleri geri hareket ettir', 'Doğal ritim koru']
        },
        {
          id: 'ankle_circles',
          name: 'Ayak Bileği Çevirme',
          description: 'Ayak bileklerini çevirme',
          type: 'reps',
          reps: 8,
          targetMuscles: ['Ayak', 'Baldır'],
          icon: 'GiFoot',
          instructions: ['Bir ayağı kaldır', 'Daire şeklinde çevir', 'Diğer ayakla tekrarla']
        },
        {
          id: 'deep_breathing',
          name: 'Derin Nefes',
          description: 'Derin nefes alma egzersizi',
          type: 'timed',
          duration: 60,
          targetMuscles: ['Akciğer', 'Rahatlama'],
          icon: 'GiLungs',
          instructions: ['Rahat otur', '4 sayarak nefes al', '4 sayarak nefes ver']
        }
      ]
    },
    {
      id: 'easy_2',
      name: 'Esneklik ve Denge',
      difficulty: 'Kolay',
      duration: '18 dakika',
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
        },
        {
          id: 'standing_forward_fold',
          name: 'Öne Eğilme',
          description: 'Ayakta öne doğru eğilme',
          type: 'timed',
          duration: 20,
          targetMuscles: ['Arka bacak', 'Sırt'],
          icon: 'GiTouchingHands',
          instructions: ['Ayakta dur', 'Yavaşça öne eğil', 'Elleri yere doğru uzat']
        },
        {
          id: 'tree_pose',
          name: 'Ağaç Pozu',
          description: 'Tek ayak üzerinde denge',
          type: 'timed',
          duration: 15,
          targetMuscles: ['Denge', 'Bacak'],
          icon: 'GiTree',
          instructions: ['Bir ayak üzerinde dur', 'Diğer ayağı dizin yanına koy', 'Dengeyi koru']
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
        },
        {
          id: 'hip_circles',
          name: 'Kalça Çevirme',
          description: 'Kalçaları daire şeklinde çevirme',
          type: 'reps',
          reps: 8,
          targetMuscles: ['Kalça', 'Core'],
          icon: 'GiPelvis',
          instructions: ['Ayakta dur', 'Elleri kalçada', 'Kalçaları çevir']
        },
        {
          id: 'seated_spinal_twist',
          name: 'Oturarak Omurga Çevirme',
          description: 'Oturarak bel bölgesini çevirme',
          type: 'reps',
          reps: 6,
          targetMuscles: ['Bel', 'Yan karın'],
          icon: 'GiTwister',
          instructions: ['Yerde otur', 'Bacakları uzat', 'Beli sağa sola çevir']
        },
        {
          id: 'shoulder_blade_squeeze',
          name: 'Kürek Kemiği Sıkma',
          description: 'Kürek kemiklerini birbirine yaklaştırma',
          type: 'reps',
          reps: 10,
          targetMuscles: ['Sırt', 'Omuz'],
          icon: 'GiShoulderArmor',
          instructions: ['Ayakta dur', 'Kürek kemiklerini sık', 'Göğsü öne çıkar']
        },
        {
          id: 'calf_stretch',
          name: 'Baldır Germe',
          description: 'Baldır kaslarını germe',
          type: 'timed',
          duration: 20,
          targetMuscles: ['Baldır', 'Arka bacak'],
          icon: 'GiLeg',
          instructions: ['Duvara yaslan', 'Bir ayağı geriye at', 'Baldırı ger']
        },
        {
          id: 'gentle_backbend',
          name: 'Hafif Geriye Eğilme',
          description: 'Sırtı hafifçe geriye eğme',
          type: 'reps',
          reps: 5,
          targetMuscles: ['Sırt', 'Göğüs'],
          icon: 'GiBackwardTime',
          instructions: ['Ayakta dur', 'Elleri belde', 'Hafifçe geriye eğil']
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
      duration: '25 dakika',
      description: 'Orta tempo kardiyo antrenmanı',
      exercises: [
        {
          id: 'jumping_jacks',
          name: 'Jumping Jacks',
          description: 'Zıplayarak kol bacak açma kapama',
          type: 'reps',
          reps: 20,
          targetMuscles: ['Tüm vücut', 'Kardiyo'],
          icon: 'GiJumpAcross',
          instructions: ['Ayakta dur', 'Zıplayarak bacakları aç', 'Kolları yukarı kaldır']
        },
        {
          id: 'high_knees',
          name: 'Yüksek Diz',
          description: 'Dizleri yüksek kaldırarak koşma',
          type: 'timed',
          duration: 45,
          targetMuscles: ['Bacak', 'Kardiyo'],
          icon: 'GiRunningShoe',
          instructions: ['Yerinde koş', 'Dizleri yüksek kaldır', 'Hızlı tempoda']
        },
        {
          id: 'butt_kicks',
          name: 'Topuk Vuruş',
          description: 'Topukları kalçaya vurma',
          type: 'timed',
          duration: 45,
          targetMuscles: ['Arka bacak', 'Kardiyo'],
          icon: 'GiLeg',
          instructions: ['Yerinde koş', 'Topukları kalçaya vur', 'Hızlı hareket et']
        },
        {
          id: 'step_touches',
          name: 'Adım Dokunma',
          description: 'Yana adım atıp dokunma',
          type: 'reps',
          reps: 16,
          targetMuscles: ['Bacak', 'Kardiyo'],
          icon: 'GiFootsteps',
          instructions: ['Sağa adım at', 'Sol ayağı yanına getir', 'Sola tekrarla']
        },
        {
          id: 'arm_circles_medium',
          name: 'Hızlı Kol Çevirme',
          description: 'Kolları hızlı çevirme',
          type: 'timed',
          duration: 30,
          targetMuscles: ['Omuz', 'Kol'],
          icon: 'GiArm',
          instructions: ['Kolları yanlara aç', 'Hızlı daireler çiz', 'İleri ve geri']
        },
        {
          id: 'side_shuffles',
          name: 'Yana Kayma',
          description: 'Yana doğru kayarak hareket',
          type: 'reps',
          reps: 12,
          targetMuscles: ['Bacak', 'Kalça'],
          icon: 'GiFootsteps',
          instructions: ['Çömelme pozisyonunda', 'Yana doğru kay', 'Hızlı hareket et']
        },
        {
          id: 'modified_burpee',
          name: 'Hafif Burpee',
          description: 'Zıplamasız burpee hareketi',
          type: 'reps',
          reps: 8,
          targetMuscles: ['Tüm vücut', 'Kardiyo'],
          icon: 'GiJumpAcross',
          instructions: ['Squat pozisyonuna in', 'Plank pozisyonuna geç', 'Geri dön ve kalk']
        },
        {
          id: 'boxer_shuffle',
          name: 'Boksör Ayak Hareketi',
          description: 'Boksör gibi ayak oynatma',
          type: 'timed',
          duration: 30,
          targetMuscles: ['Bacak', 'Kardiyo'],
          icon: 'GiBoxingGlove',
          instructions: ['Hafif çömel', 'Ayakları hızla değiştir', 'Ritim koru']
        },
        {
          id: 'cross_body_reach',
          name: 'Çapraz Uzanma',
          description: 'Çapraz kol uzatma hareketi',
          type: 'reps',
          reps: 12,
          targetMuscles: ['Core', 'Omuz'],
          icon: 'GiArm',
          instructions: ['Ayakta dur', 'Sağ eli sol ayağa uzat', 'Çapraz hareket yap']
        },
        {
          id: 'cool_down_walk',
          name: 'Soğuma Yürüyüşü',
          description: 'Yavaş tempoda yerinde yürüyüş',
          type: 'timed',
          duration: 60,
          targetMuscles: ['Tüm vücut', 'Soğuma'],
          icon: 'GiWalk',
          instructions: ['Yavaş tempoda yürü', 'Nefes düzenle', 'Kalp atışını düşür']
        }
      ]
    },
    {
      id: 'medium_2',
      name: 'Kuvvet Geliştirme',
      difficulty: 'Orta',
      duration: '30 dakika',
      description: 'Orta seviye kuvvet antrenmanı',
      exercises: [
        {
          id: 'modified_pushup',
          name: 'Dizüstü Şınav',
          description: 'Dizler yerde şınav hareketi',
          type: 'reps',
          reps: 12,
          targetMuscles: ['Göğüs', 'Kol'],
          icon: 'GiMuscleUp',
          instructions: ['Dizlerin üzerine çök', 'Elleri omuz hizasında', 'Şınav yap']
        },
        {
          id: 'bodyweight_squat',
          name: 'Vücut Ağırlığı Squat',
          description: 'Klasik squat hareketi',
          type: 'reps',
          reps: 15,
          targetMuscles: ['Bacak', 'Kalça'],
          icon: 'GiLeg',
          instructions: ['Ayaklar omuz genişliğinde', 'Kalçayı geriye it', 'Derin squat yap']
        },
        {
          id: 'plank_hold',
          name: 'Plank Tutma',
          description: 'Plank pozisyonunu koruma',
          type: 'timed',
          duration: 45,
          targetMuscles: ['Core', 'Karın'],
          icon: 'GiAbdominalArmor',
          instructions: ['Plank pozisyonuna geç', 'Vücudu düz tut', 'Nefes almaya devam et']
        },
        {
          id: 'lunges',
          name: 'Lunge',
          description: 'Öne adım atarak çömelme',
          type: 'reps',
          reps: 10,
          targetMuscles: ['Bacak', 'Kalça'],
          icon: 'GiLeg',
          instructions: ['Öne adım at', 'Arka diz yere yaklaş', 'Bacak değiştir']
        },
        {
          id: 'tricep_dips',
          name: 'Tricep Dips',
          description: 'Sandalyede arka kol çalışması',
          type: 'reps',
          reps: 10,
          targetMuscles: ['Arka kol', 'Omuz'],
          icon: 'GiStrongMan',
          instructions: ['Sandalyeye yaslan', 'Vücudu indir', 'Kollarla yukarı it']
        },
        {
          id: 'glute_bridge',
          name: 'Kalça Köprüsü',
          description: 'Kalçayı yukarı kaldırma',
          type: 'reps',
          reps: 15,
          targetMuscles: ['Kalça', 'Arka bacak'],
          icon: 'GiPelvis',
          instructions: ['Sırtüstü yat', 'Kalçayı kaldır', 'Sık ve indir']
        },
        {
          id: 'mountain_climber_slow',
          name: 'Yavaş Mountain Climber',
          description: 'Kontrollü mountain climber',
          type: 'reps',
          reps: 12,
          targetMuscles: ['Core', 'Kardiyo'],
          icon: 'GiMountainClimbing',
          instructions: ['Plank pozisyonunda', 'Dizleri kontrollü çek', 'Alternatif hareket']
        },
        {
          id: 'wall_sit',
          name: 'Duvar Oturma',
          description: 'Duvara yaslanarak oturma pozisyonu',
          type: 'timed',
          duration: 30,
          targetMuscles: ['Bacak', 'Kalça'],
          icon: 'GiChair',
          instructions: ['Duvara yaslan', 'Sandalyede oturur gibi çömel', 'Pozisyonu koru']
        },
        {
          id: 'standing_calf_raise',
          name: 'Ayakta Baldır Kaldırma',
          description: 'Parmak ucuna yükselme',
          type: 'reps',
          reps: 20,
          targetMuscles: ['Baldır'],
          icon: 'GiFoot',
          instructions: ['Ayakta dur', 'Parmak ucuna yüksel', 'Yavaşça in']
        },
        {
          id: 'dead_bug',
          name: 'Ölü Böcek',
          description: 'Karşılıklı kol-bacak hareketi',
          type: 'reps',
          reps: 8,
          targetMuscles: ['Core', 'Karın'],
          icon: 'GiBug',
          instructions: ['Sırtüstü yat', 'Karşı kol ve bacağı kaldır', 'Yavaşça değiştir']
        }
      ]
    }
  ],

  // ZOR SEVİYE (10 Program)  
  hard: [
    {
      id: 'hard_1',
      name: 'HIIT Inferno',
      difficulty: 'Zor',
      duration: '35 dakika',
      description: 'Yüksek yoğunluklu interval antrenmanı',
      exercises: [
        {
          id: 'burpee_advanced',
          name: 'Gelişmiş Burpee',
          description: 'Zıplamalı burpee hareketi',
          type: 'reps',
          reps: 10,
          targetMuscles: ['Tüm vücut', 'Kardiyo'],
          icon: 'GiJumpAcross',
          instructions: ['Squat pozisyonuna in', 'Plank pozisyonuna geç', 'Şınav çek', 'Zıplayarak kalk']
        },
        {
          id: 'mountain_climber_fast',
          name: 'Hızlı Mountain Climber',
          description: 'Yüksek tempoda mountain climber',
          type: 'timed',
          duration: 60,
          targetMuscles: ['Core', 'Kardiyo'],
          icon: 'GiMountainClimbing',
          instructions: ['Plank pozisyonunda', 'Dizleri hızla çek', 'Maksimum hızda']
        },
        {
          id: 'jump_squats',
          name: 'Zıplamalı Squat',
          description: 'Squat sonrası zıplama',
          type: 'reps',
          reps: 15,
          targetMuscles: ['Bacak', 'Kalça', 'Kardiyo'],
          icon: 'GiJumpAcross',
          instructions: ['Squat yap', 'Patlayıcı şekilde zıpla', 'Yumuşak iniş yap']
        },
        {
          id: 'pushup_full',
          name: 'Tam Şınav',
          description: 'Klasik şınav hareketi',
          type: 'reps',
          reps: 12,
          targetMuscles: ['Göğüs', 'Kol', 'Core'],
          icon: 'GiMuscleUp',
          instructions: ['Plank pozisyonunda', 'Göğsü yere yaklaştır', 'Güçlü şekilde it']
        },
        {
          id: 'high_intensity_plank',
          name: 'Yüksek Yoğunluk Plank',
          description: 'Uzun süreli plank tutma',
          type: 'timed',
          duration: 60,
          targetMuscles: ['Core', 'Karın', 'Omuz'],
          icon: 'GiAbdominalArmor',
          instructions: ['Plank pozisyonuna geç', 'Vücudu sert tut', 'Nefes kontrolü yap']
        },
        {
          id: 'tuck_jumps',
          name: 'Diz Çekme Zıplaması',
          description: 'Zıplayarak dizleri göğse çekme',
          type: 'reps',
          reps: 10,
          targetMuscles: ['Bacak', 'Core', 'Kardiyo'],
          icon: 'GiJumpAcross',
          instructions: ['Zıpla', 'Dizleri göğse çek', 'Yumuşak iniş']
        },
        {
          id: 'pike_pushup',
          name: 'Pike Şınav',
          description: 'V pozisyonunda şınav',
          type: 'reps',
          reps: 8,
          targetMuscles: ['Omuz', 'Kol', 'Core'],
          icon: 'GiMuscleUp',
          instructions: ['V pozisyonu al', 'Başı yere yaklaştır', 'Güçlü şekilde it']
        },
        {
          id: 'lateral_bounds',
          name: 'Yana Sıçrama',
          description: 'Yana doğru güçlü sıçrama',
          type: 'reps',
          reps: 12,
          targetMuscles: ['Bacak', 'Kalça', 'Denge'],
          icon: 'GiJumpAcross',
          instructions: ['Tek ayakta dur', 'Yana güçlü sıçra', 'Diğer ayakla yakala']
        },
        {
          id: 'spiderman_pushup',
          name: 'Spiderman Şınav',
          description: 'Şınav sırasında diz çekme',
          type: 'reps',
          reps: 8,
          targetMuscles: ['Göğüs', 'Core', 'Kalça'],
          icon: 'GiMuscleUp',
          instructions: ['Şınav pozisyonunda', 'İnerken dizi dirseğe getir', 'Alternatif hareket']
        },
        {
          id: 'bear_crawl',
          name: 'Ayı Yürüyüşü',
          description: 'Dört ayak üzerinde ilerleme',
          type: 'timed',
          duration: 45,
          targetMuscles: ['Tüm vücut', 'Core'],
          icon: 'GiBearHead',
          instructions: ['Dört ayak üzerine çık', 'İleri geri hareket et', 'Dizler yerde değil']
        }
      ]
    },
    {
      id: 'hard_2',
      name: 'Güç ve Dayanıklılık',
      difficulty: 'Zor',
      duration: '40 dakika',
      description: 'Maksimum güç ve dayanıklılık antrenmanı',
      exercises: [
        {
          id: 'single_leg_squat',
          name: 'Tek Bacak Squat',
          description: 'Tek bacakla squat hareketi',
          type: 'reps',
          reps: 6,
          targetMuscles: ['Bacak', 'Kalça', 'Denge'],
          icon: 'GiLeg',
          instructions: ['Tek ayak üzerinde dur', 'Squat pozisyonuna in', 'Güçlü şekilde kalk']
        },
        {
          id: 'handstand_pushup_prep',
          name: 'Handstand Şınav Hazırlık',
          description: 'Duvarda ters şınav hareketi',
          type: 'reps',
          reps: 5,
          targetMuscles: ['Omuz', 'Kol', 'Core'],
          icon: 'GiMuscleUp',
          instructions: ['Duvara yaslan', 'Ters pozisyonda şınav', 'Kontrollü hareket']
        },
        {
          id: 'explosive_pushup',
          name: 'Patlayıcı Şınav',
          description: 'Elleri yerden kesen şınav',
          type: 'reps',
          reps: 8,
          targetMuscles: ['Göğüs', 'Kol', 'Güç'],
          icon: 'GiMuscleUp',
          instructions: ['Şınav pozisyonunda', 'Patlayıcı şekilde it', 'Eller havada']
        },
        {
          id: 'pistol_squat_assist',
          name: 'Destekli Pistol Squat',
          description: 'Tek bacak tam squat',
          type: 'reps',
          reps: 4,
          targetMuscles: ['Bacak', 'Kalça', 'Denge'],
          icon: 'GiLeg',
          instructions: ['Tek bacak uzat', 'Tam squat yap', 'Destekle kalk']
        },
        {
          id: 'l_sit_hold',
          name: 'L-Sit Tutma',
          description: 'L pozisyonunda asılı kalma',
          type: 'timed',
          duration: 20,
          targetMuscles: ['Core', 'Kol', 'Omuz'],
          icon: 'GiAbdominalArmor',
          instructions: ['Ellerde destek al', 'Bacakları kaldır', 'L şekli oluştur']
        },
        {
          id: 'archer_pushup',
          name: 'Okçu Şınavı',
          description: 'Tek kola yüklenen şınav',
          type: 'reps',
          reps: 6,
          targetMuscles: ['Göğüs', 'Kol', 'Core'],
          icon: 'GiMuscleUp',
          instructions: ['Geniş pozisyon al', 'Bir kola yüklen', 'Alternatif hareket']
        },
        {
          id: 'shrimp_squat',
          name: 'Karides Squat',
          description: 'Tek bacak arka squat',
          type: 'reps',
          reps: 4,
          targetMuscles: ['Bacak', 'Kalça', 'Esneklik'],
          icon: 'GiLeg',
          instructions: ['Arka bacağı tut', 'Tek bacakla squat', 'Denge koru']
        },
        {
          id: 'human_flag_prep',
          name: 'İnsan Bayrağı Hazırlık',
          description: 'Yan plank ileri seviye',
          type: 'timed',
          duration: 15,
          targetMuscles: ['Core', 'Kol', 'Yan karın'],
          icon: 'GiAbdominalArmor',
          instructions: ['Yan plank pozisyonu', 'Vücudu düz tut', 'Maksimum gerginlik']
        },
        {
          id: 'muscle_up_prep',
          name: 'Muscle-Up Hazırlık',
          description: 'Çekme ve itme kombinasyonu',
          type: 'reps',
          reps: 5,
          targetMuscles: ['Sırt', 'Göğüs', 'Kol'],
          icon: 'GiMuscleUp',
          instructions: ['Çekme hareketi', 'İtme hareketine geç', 'Akıcı hareket']
        },
        {
          id: 'advanced_planche_lean',
          name: 'İleri Planche Eğilme',
          description: 'Planche pozisyonuna hazırlık',
          type: 'timed',
          duration: 20,
          targetMuscles: ['Omuz', 'Core', 'Bilek'],
          icon: 'GiMuscleUp',
          instructions: ['Plank pozisyonunda', 'Öne doğru eğil', 'Ayak parmaklarında']
        }
      ]
    }
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