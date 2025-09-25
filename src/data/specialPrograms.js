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
          id: 'step_touch',
          name: 'Step Touch',
          description: 'Sağa sola adım atarak hareket edin',
          type: 'timed',
          duration: 45,
          targetMuscles: ['Bacak', 'Kardiyo'],
          icon: 'GiFootsteps',
          instructions: ['Sağa bir adım at', 'Sola bir adım at', 'Ritim tut']
        },
        {
          id: 'wall_pushup',
          name: 'Duvara Şınav',
          description: 'Duvara yaslanarak hafif şınav yapın',
          type: 'reps',
          reps: 8,
          targetMuscles: ['Göğüs', 'Kol'],
          icon: 'GiMuscleUp',
          instructions: ['Duvara yaslan', 'Kolları bükerek yaklaş', 'Geri it']
        },
        {
          id: 'heel_raises',
          name: 'Topuk Kaldırma',
          description: 'Parmak ucuna yükselerek baldır çalıştırın',
          type: 'reps',
          reps: 12,
          targetMuscles: ['Baldır'],
          icon: 'GiFoot',
          instructions: ['Ayakta dur', 'Parmak ucuna yüksel', 'Yavaşça in']
        },
        {
          id: 'seated_twist',
          name: 'Oturarak Dönüş',
          description: 'Sandalyede oturarak gövdeyi çevirin',
          type: 'reps',
          reps: 10,
          targetMuscles: ['Karın', 'Bel'],
          icon: 'GiTwister',
          instructions: ['Sandalyede otur', 'Gövdeyi sağa sola çevir', 'Yavaş hareket et']
        },
        {
          id: 'ankle_circles',
          name: 'Ayak Bileği Çevirme',
          description: 'Ayak bileklerini daire şeklinde çevirin',
          type: 'reps',
          reps: 8,
          targetMuscles: ['Ayak bileği'],
          icon: 'GiFoot',
          instructions: ['Bir ayağı kaldır', 'Daire şeklinde çevir', 'Diğer ayakla tekrarla']
        },
        {
          id: 'shoulder_rolls',
          name: 'Omuz Çevirme',
          description: 'Omuzları geriye doğru çevirin',
          type: 'reps',
          reps: 10,
          targetMuscles: ['Omuz'],
          icon: 'GiShoulderArmor',
          instructions: ['Omuzları yukarı kaldır', 'Geriye doğru çevir', 'Yavaş ve kontrollü']
        },
        {
          id: 'gentle_stretch',
          name: 'Hafif Germe',
          description: 'Tüm vücudu hafifçe gerin',
          type: 'timed',
          duration: 30,
          targetMuscles: ['Tüm vücut'],
          icon: 'GiStretching',
          instructions: ['Kolları yukarı uzat', 'Yanlara eğil', 'Nefes al']
        }
      ]
    },
    {
      id: 'easy_2',
      name: 'Esneklik ve Denge',
      difficulty: 'Kolay',
      duration: '15 dakika',
      description: 'Esneklik ve denge geliştirici hareketler',
      exercises: [
        {
          id: 'balance_stand',
          name: 'Tek Ayak Durma',
          description: 'Tek ayak üzerinde denge kurun',
          type: 'timed',
          duration: 20,
          targetMuscles: ['Denge', 'Core'],
          icon: 'GiBalancing',
          instructions: ['Bir ayağı kaldır', 'Dengeyi koru', 'Sabit dur']
        },
        {
          id: 'neck_stretch',
          name: 'Boyun Germe',
          description: 'Boyun kaslarını gerin',
          type: 'timed',
          duration: 15,
          targetMuscles: ['Boyun'],
          icon: 'GiNeck',
          instructions: ['Başı sağa eğ', 'Sola eğ', 'Yavaş hareket et']
        },
        {
          id: 'arm_stretch',
          name: 'Kol Germe',
          description: 'Kol kaslarını gerin',
          type: 'timed',
          duration: 20,
          targetMuscles: ['Kol', 'Omuz'],
          icon: 'GiArm',
          instructions: ['Kolu karşıya uzat', 'Diğer elle çek', 'Her iki kol için tekrarla']
        },
        {
          id: 'leg_swing',
          name: 'Bacak Sallama',
          description: 'Bacağı öne arkaya sallayın',
          type: 'reps',
          reps: 8,
          targetMuscles: ['Bacak', 'Kalça'],
          icon: 'GiLeg',
          instructions: ['Duvara yaslan', 'Bacağı öne arkaya salla', 'Her iki bacak için yap']
        },
        {
          id: 'cat_cow',
          name: 'Kedi-İnek Pozu',
          description: 'Dört ayak üzerinde sırt hareketleri',
          type: 'reps',
          reps: 8,
          targetMuscles: ['Sırt', 'Bel'],
          icon: 'GiCat',
          instructions: ['Dört ayak üzerine çök', 'Sırtı yukarı kaldır', 'Aşağı indir']
        },
        {
          id: 'side_bend',
          name: 'Yana Eğilme',
          description: 'Gövdeyi yanlara eğin',
          type: 'reps',
          reps: 6,
          targetMuscles: ['Yan karın', 'Bel'],
          icon: 'GiTwister',
          instructions: ['Ayakta dur', 'Sağa eğil', 'Sola eğil']
        },
        {
          id: 'toe_touch',
          name: 'Parmak Ucu Dokunma',
          description: 'Öne eğilerek parmak uçlarına dokunun',
          type: 'reps',
          reps: 5,
          targetMuscles: ['Arka bacak', 'Bel'],
          icon: 'GiTouchingHands',
          instructions: ['Ayakta dur', 'Öne eğil', 'Parmak uçlarına dokun']
        },
        {
          id: 'hip_circles',
          name: 'Kalça Çevirme',
          description: 'Kalçaları daire şeklinde çevirin',
          type: 'reps',
          reps: 8,
          targetMuscles: ['Kalça'],
          icon: 'GiPelvis',
          instructions: ['Eller belde', 'Kalçaları çevir', 'Her iki yöne yap']
        },
        {
          id: 'deep_breathing',
          name: 'Derin Nefes',
          description: 'Derin nefes alıp verin',
          type: 'timed',
          duration: 30,
          targetMuscles: ['Akciğer'],
          icon: 'GiLungs',
          instructions: ['Derin nefes al', 'Yavaşça ver', 'Rahatla']
        },
        {
          id: 'gentle_twist',
          name: 'Hafif Dönüş',
          description: 'Oturarak hafifçe dönün',
          type: 'reps',
          reps: 6,
          targetMuscles: ['Bel', 'Karın'],
          icon: 'GiTwister',
          instructions: ['Yerde otur', 'Sağa dön', 'Sola dön']
        }
      ]
    },
    {
      id: 'easy_3',
      name: 'Hafif Kuvvet',
      difficulty: 'Kolay',
      duration: '18 dakika',
      description: 'Temel kuvvet geliştirici hareketler',
      exercises: [
        {
          id: 'wall_sit',
          name: 'Duvara Oturma',
          description: 'Duvara yaslanarak squat pozisyonunda durun',
          type: 'timed',
          duration: 20,
          targetMuscles: ['Bacak', 'Kalça'],
          icon: 'GiLeg',
          instructions: ['Duvara yaslan', 'Squat pozisyonuna geç', 'Pozisyonu koru']
        },
        {
          id: 'modified_plank',
          name: 'Dizüstü Plank',
          description: 'Dizler yerde plank pozisyonu',
          type: 'timed',
          duration: 25,
          targetMuscles: ['Core', 'Kol'],
          icon: 'GiAbdominalArmor',
          instructions: ['Dizler yerde', 'Eller omuz altında', 'Vücut düz']
        },
        {
          id: 'chair_dips',
          name: 'Sandalye Dips',
          description: 'Sandalye kenarında kol çalışması',
          type: 'reps',
          reps: 6,
          targetMuscles: ['Arka kol', 'Omuz'],
          icon: 'GiStrongMan',
          instructions: ['Sandalye kenarına otur', 'Eller kenarda', 'Yukarı aşağı hareket']
        },
        {
          id: 'standing_calf',
          name: 'Ayakta Baldır',
          description: 'Ayakta baldır kaldırma',
          type: 'reps',
          reps: 15,
          targetMuscles: ['Baldır'],
          icon: 'GiFoot',
          instructions: ['Ayakta dur', 'Parmak ucuna yüksel', 'Kontrollü in']
        },
        {
          id: 'arm_raises',
          name: 'Kol Kaldırma',
          description: 'Kolları yanlara kaldırın',
          type: 'reps',
          reps: 10,
          targetMuscles: ['Omuz'],
          icon: 'GiArm',
          instructions: ['Kollar yanda', 'Omuz hizasına kaldır', 'Yavaş indir']
        },
        {
          id: 'mini_squats',
          name: 'Mini Squat',
          description: 'Yarım squat hareketi',
          type: 'reps',
          reps: 12,
          targetMuscles: ['Bacak', 'Kalça'],
          icon: 'GiLeg',
          instructions: ['Ayaklar omuz genişliği', 'Yarım squat', 'Kontrollü hareket']
        },
        {
          id: 'table_pushup',
          name: 'Masa Şınavı',
          description: 'Masaya yaslanarak şınav',
          type: 'reps',
          reps: 8,
          targetMuscles: ['Göğüs', 'Kol'],
          icon: 'GiMuscleUp',
          instructions: ['Masaya yaslan', 'Şınav hareketi', 'Kontrollü git gel']
        },
        {
          id: 'leg_extensions',
          name: 'Bacak Uzatma',
          description: 'Oturarak bacak uzatma',
          type: 'reps',
          reps: 10,
          targetMuscles: ['Ön bacak'],
          icon: 'GiLeg',
          instructions: ['Sandalyede otur', 'Bacağı uzat', 'Her iki bacak']
        },
        {
          id: 'gentle_crunch',
          name: 'Hafif Mekik',
          description: 'Yavaş karın hareketi',
          type: 'reps',
          reps: 8,
          targetMuscles: ['Karın'],
          icon: 'GiAbdominalArmor',
          instructions: ['Sırtüstü yat', 'Hafif kaldır', 'Yavaş hareket']
        },
        {
          id: 'back_extension',
          name: 'Sırt Uzatma',
          description: 'Yüzüstü sırt kaldırma',
          type: 'reps',
          reps: 6,
          targetMuscles: ['Sırt'],
          icon: 'GiBackPain',
          instructions: ['Yüzüstü yat', 'Göğsü kaldır', 'Yavaş indir']
        }
      ]
    },
    {
      id: 'easy_4',
      name: 'Sabah Aktivasyonu',
      difficulty: 'Kolay',
      duration: '12 dakika',
      description: 'Güne başlangıç için enerji verici hareketler',
      exercises: [
        {
          id: 'morning_stretch',
          name: 'Sabah Germe',
          description: 'Tüm vücudu uyandıran germe',
          type: 'timed',
          duration: 30,
          targetMuscles: ['Tüm vücut'],
          icon: 'GiStretching',
          instructions: ['Kolları yukarı uzat', 'Yanlara eğil', 'Derin nefes al']
        },
        {
          id: 'wake_up_walk',
          name: 'Uyanma Yürüyüşü',
          description: 'Yerinde hafif yürüyüş',
          type: 'timed',
          duration: 45,
          targetMuscles: ['Bacak', 'Kardiyo'],
          icon: 'GiWalk',
          instructions: ['Yerinde yürü', 'Kolları salla', 'Tempolu hareket']
        },
        {
          id: 'sun_salutation',
          name: 'Güneş Selamı',
          description: 'Yoga tarzı açılış hareketi',
          type: 'reps',
          reps: 5,
          targetMuscles: ['Tüm vücut'],
          icon: 'GiSun',
          instructions: ['Kollar yukarı', 'Öne eğil', 'Geri kalk']
        },
        {
          id: 'energy_bounce',
          name: 'Enerji Zıplaması',
          description: 'Hafif zıplama hareketi',
          type: 'reps',
          reps: 10,
          targetMuscles: ['Bacak', 'Kardiyo'],
          icon: 'GiJumpAcross',
          instructions: ['Hafif zıpla', 'Kolları hareket ettir', 'Ritim tut']
        },
        {
          id: 'shoulder_wake',
          name: 'Omuz Uyandırma',
          description: 'Omuz kaslarını aktive etme',
          type: 'reps',
          reps: 8,
          targetMuscles: ['Omuz'],
          icon: 'GiShoulderArmor',
          instructions: ['Omuzları yukarı', 'Geriye çevir', 'Rahatla']
        },
        {
          id: 'spine_twist',
          name: 'Omurga Dönüşü',
          description: 'Omurgayı hareket ettirme',
          type: 'reps',
          reps: 6,
          targetMuscles: ['Bel', 'Sırt'],
          icon: 'GiTwister',
          instructions: ['Ayakta dur', 'Sağa sola dön', 'Yavaş hareket']
        },
        {
          id: 'ankle_prep',
          name: 'Ayak Bileği Hazırlık',
          description: 'Ayak bileklerini hazırlama',
          type: 'reps',
          reps: 10,
          targetMuscles: ['Ayak bileği'],
          icon: 'GiFoot',
          instructions: ['Ayağı kaldır', 'Çember çiz', 'Her iki ayak']
        },
        {
          id: 'gentle_march',
          name: 'Hafif Marş',
          description: 'Yerinde marş hareketi',
          type: 'timed',
          duration: 30,
          targetMuscles: ['Bacak', 'Core'],
          icon: 'GiWalk',
          instructions: ['Yerinde marş', 'Dizleri kaldır', 'Kolları salla']
        },
        {
          id: 'breath_energy',
          name: 'Enerji Nefesi',
          description: 'Enerji verici nefes egzersizi',
          type: 'reps',
          reps: 8,
          targetMuscles: ['Akciğer'],
          icon: 'GiLungs',
          instructions: ['Derin nefes al', 'Hızlı ver', 'Enerji hisset']
        },
        {
          id: 'morning_balance',
          name: 'Sabah Dengesi',
          description: 'Denge ve koordinasyon',
          type: 'timed',
          duration: 20,
          targetMuscles: ['Denge', 'Core'],
          icon: 'GiBalancing',
          instructions: ['Tek ayak dur', 'Dengeyi koru', 'Sakin kal']
        }
      ]
    },
    {
      id: 'easy_5',
      name: 'Nefes ve Rahatlama',
      difficulty: 'Kolay',
      duration: '15 dakika',
      description: 'Stres azaltıcı ve rahatlatıcı hareketler',
      exercises: [
        {
          id: 'deep_breath_1',
          name: 'Derin Nefes 1',
          description: '4-4-4 nefes tekniği',
          type: 'timed',
          duration: 60,
          targetMuscles: ['Akciğer'],
          icon: 'GiLungs',
          instructions: ['4 saniye nefes al', '4 saniye tut', '4 saniye ver']
        },
        {
          id: 'neck_relax',
          name: 'Boyun Rahatlama',
          description: 'Boyun gerginliğini azaltma',
          type: 'timed',
          duration: 30,
          targetMuscles: ['Boyun'],
          icon: 'GiNeck',
          instructions: ['Başı yavaş çevir', 'Her yöne eğ', 'Rahat hareket et']
        },
        {
          id: 'shoulder_release',
          name: 'Omuz Gevşetme',
          description: 'Omuz kaslarını gevşetme',
          type: 'reps',
          reps: 8,
          targetMuscles: ['Omuz'],
          icon: 'GiShoulderArmor',
          instructions: ['Omuzları yukarı', 'Geriye çevir', 'Bırak']
        },
        {
          id: 'gentle_side_bend',
          name: 'Hafif Yana Eğilme',
          description: 'Yan kasları gevşetme',
          type: 'reps',
          reps: 6,
          targetMuscles: ['Yan karın', 'Bel'],
          icon: 'GiTwister',
          instructions: ['Sağa eğil', 'Sola eğil', 'Yavaş hareket']
        },
        {
          id: 'child_pose',
          name: 'Çocuk Pozu',
          description: 'Yoga rahatlatıcı pozisyon',
          type: 'timed',
          duration: 45,
          targetMuscles: ['Sırt', 'Bel'],
          icon: 'GiMeditation',
          instructions: ['Dizler üzerine çök', 'Öne eğil', 'Kolları uzat']
        },
        {
          id: 'leg_relax',
          name: 'Bacak Rahatlama',
          description: 'Bacak kaslarını gevşetme',
          type: 'timed',
          duration: 30,
          targetMuscles: ['Bacak'],
          icon: 'GiLeg',
          instructions: ['Bacakları salla', 'Gevşet', 'Rahatla']
        },
        {
          id: 'spinal_wave',
          name: 'Omurga Dalgası',
          description: 'Omurgayı yumuşak hareket ettirme',
          type: 'reps',
          reps: 5,
          targetMuscles: ['Sırt', 'Bel'],
          icon: 'GiSpinalCoil',
          instructions: ['Yavaş öne eğil', 'Omurga omurga', 'Yavaş kalk']
        },
        {
          id: 'palm_press',
          name: 'Avuç İçi Basma',
          description: 'El ve bilek gevşetme',
          type: 'reps',
          reps: 8,
          targetMuscles: ['El', 'Bilek'],
          icon: 'GiHand',
          instructions: ['Avuçları birleştir', 'Bas', 'Gevşet']
        },
        {
          id: 'eye_rest',
          name: 'Göz Dinlendirme',
          description: 'Göz kaslarını rahatlatma',
          type: 'timed',
          duration: 20,
          targetMuscles: ['Göz'],
          icon: 'GiEyeball',
          instructions: ['Gözleri kapat', 'Rahatla', 'Derin nefes al']
        },
        {
          id: 'final_relax',
          name: 'Son Rahatlama',
          description: 'Tüm vücudu gevşetme',
          type: 'timed',
          duration: 60,
          targetMuscles: ['Tüm vücut'],
          icon: 'GiMeditation',
          instructions: ['Rahat pozisyon al', 'Tüm kasları gevşet', 'Sakin kal']
        }
      ]
    }
  ],
  
  // ORTA SEVİYE (5 Program)
  medium: [
    {
      id: 'medium_1',
      name: 'Kardiyo Blast',
      difficulty: 'Orta',
      duration: '25 dakika',
      description: 'Yoğun kardiyo antrenmanı',
      exercises: [
        {
          id: 'jumping_jacks',
          name: 'Jumping Jacks',
          description: 'Zıplayarak kol bacak açma',
          type: 'timed',
          duration: 45,
          targetMuscles: ['Tüm vücut', 'Kardiyo'],
          icon: 'GiJumpAcross',
          instructions: ['Zıpla kol bacak aç', 'Zıpla kol bacak kapat', 'Hızlı tempo']
        },
        {
          id: 'high_knees',
          name: 'Yüksek Diz',
          description: 'Dizleri yüksek kaldırarak koşma',
          type: 'timed',
          duration: 30,
          targetMuscles: ['Bacak', 'Kardiyo'],
          icon: 'GiLeg',
          instructions: ['Yerinde koş', 'Dizleri yüksek kaldır', 'Hızlı tempo']
        },
        {
          id: 'burpee_medium',
          name: 'Burpee',
          description: 'Tam burpee hareketi',
          type: 'reps',
          reps: 8,
          targetMuscles: ['Tüm vücut'],
          icon: 'GiJumpAcross',
          instructions: ['Squat-şınav-zıpla', 'Akıcı hareket', 'Güçlü çık']
        },
        {
          id: 'mountain_climber_med',
          name: 'Mountain Climber',
          description: 'Hızlı diz çekme hareketi',
          type: 'timed',
          duration: 40,
          targetMuscles: ['Core', 'Kardiyo'],
          icon: 'GiMountainClimbing',
          instructions: ['Plank pozisyonu', 'Hızlı diz çek', 'Core sıkı']
        },
        {
          id: 'squat_jumps',
          name: 'Squat Jump',
          description: 'Zıplamalı squat',
          type: 'reps',
          reps: 12,
          targetMuscles: ['Bacak', 'Kalça'],
          icon: 'GiJumpAcross',
          instructions: ['Squat yap', 'Patlayıcı zıpla', 'Yumuşak in']
        },
        {
          id: 'plank_jacks',
          name: 'Plank Jacks',
          description: 'Plank pozisyonunda bacak açma',
          type: 'reps',
          reps: 15,
          targetMuscles: ['Core', 'Bacak'],
          icon: 'GiAbdominalArmor',
          instructions: ['Plank pozisyonu', 'Bacakları aç kapat', 'Core sabit']
        },
        {
          id: 'star_jumps',
          name: 'Yıldız Zıplaması',
          description: 'X şeklinde zıplama',
          type: 'reps',
          reps: 10,
          targetMuscles: ['Tüm vücut'],
          icon: 'GiJumpAcross',
          instructions: ['Zıpla X şekli yap', 'Kol bacak aç', 'Güçlü hareket']
        },
        {
          id: 'lateral_hops',
          name: 'Yana Zıplama',
          description: 'Sağa sola zıplama',
          type: 'timed',
          duration: 30,
          targetMuscles: ['Bacak', 'Denge'],
          icon: 'GiJumpAcross',
          instructions: ['Sağa zıpla', 'Sola zıpla', 'Hızlı geçiş']
        },
        {
          id: 'butt_kickers',
          name: 'Topuk Vurma',
          description: 'Topukla kalçaya vurma',
          type: 'timed',
          duration: 35,
          targetMuscles: ['Arka bacak', 'Kardiyo'],
          icon: 'GiLeg',
          instructions: ['Yerinde koş', 'Topukla kalçaya vur', 'Hızlı tempo']
        },
        {
          id: 'cross_jacks',
          name: 'Çapraz Jumping Jack',
          description: 'Çapraz kol bacak hareketi',
          type: 'reps',
          reps: 12,
          targetMuscles: ['Tüm vücut', 'Koordinasyon'],
          icon: 'GiJumpAcross',
          instructions: ['Zıpla çapraz geç', 'Kol bacak koordine', 'Ritim tut']
        }
      ]
    },
    {
      id: 'medium_2',
      name: 'Kuvvet Geliştirme',
      difficulty: 'Orta',
      duration: '30 dakika',
      description: 'Kas kuvveti geliştirici antrenman',
      exercises: [
        {
          id: 'pushup_medium',
          name: 'Klasik Şınav',
          description: 'Standart şınav hareketi',
          type: 'reps',
          reps: 12,
          targetMuscles: ['Göğüs', 'Kol', 'Omuz'],
          icon: 'GiMuscleUp',
          instructions: ['Eller omuz altında', 'Vücut düz', 'Tam hareket']
        },
        {
          id: 'squat_medium',
          name: 'Derin Squat',
          description: 'Tam squat hareketi',
          type: 'reps',
          reps: 15,
          targetMuscles: ['Bacak', 'Kalça'],
          icon: 'GiLeg',
          instructions: ['Derin squat', 'Kalça geriye', 'Güçlü kalk']
        },
        {
          id: 'plank_medium',
          name: 'Plank Tutma',
          description: 'Uzun süreli plank',
          type: 'timed',
          duration: 60,
          targetMuscles: ['Core', 'Omuz'],
          icon: 'GiAbdominalArmor',
          instructions: ['Vücut düz', 'Core sıkı', 'Nefes al']
        },
        {
          id: 'lunges_medium',
          name: 'Alternatif Lunge',
          description: 'Sağ sol lunge hareketi',
          type: 'reps',
          reps: 16,
          targetMuscles: ['Bacak', 'Kalça', 'Denge'],
          icon: 'GiLeg',
          instructions: ['Adım at', 'Derin in', 'Güçlü çık']
        },
        {
          id: 'pike_pushup_med',
          name: 'Pike Push-up',
          description: 'Omuz odaklı şınav',
          type: 'reps',
          reps: 10,
          targetMuscles: ['Omuz', 'Kol'],
          icon: 'GiMuscleUp',
          instructions: ['V pozisyonu', 'Baş yere yaklaş', 'Omuz çalış']
        },
        {
          id: 'single_leg_glute',
          name: 'Tek Bacak Kalça',
          description: 'Tek bacakla kalça kaldırma',
          type: 'reps',
          reps: 10,
          targetMuscles: ['Kalça', 'Core'],
          icon: 'GiPelvis',
          instructions: ['Tek bacak uzat', 'Kalça kaldır', 'Her iki bacak']
        },
        {
          id: 'tricep_dips_med',
          name: 'Tricep Dips',
          description: 'Sandalye dips hareketi',
          type: 'reps',
          reps: 12,
          targetMuscles: ['Arka kol', 'Omuz'],
          icon: 'GiStrongMan',
          instructions: ['Sandalye kenarı', 'Derin in', 'Güçlü çık']
        },
        {
          id: 'side_plank_med',
          name: 'Yan Plank',
          description: 'Yan plank tutma',
          type: 'timed',
          duration: 30,
          targetMuscles: ['Yan karın', 'Omuz'],
          icon: 'GiAbdominalArmor',
          instructions: ['Yan yat', 'Vücut düz', 'Her iki yan']
        },
        {
          id: 'calf_raise_med',
          name: 'Tek Bacak Baldır',
          description: 'Tek bacakla baldır kaldırma',
          type: 'reps',
          reps: 15,
          targetMuscles: ['Baldır'],
          icon: 'GiFoot',
          instructions: ['Tek ayak', 'Yüksek kalk', 'Her iki bacak']
        },
        {
          id: 'superman_med',
          name: 'Superman Tutma',
          description: 'Superman pozisyonu tutma',
          type: 'timed',
          duration: 25,
          targetMuscles: ['Sırt', 'Kalça'],
          icon: 'GiSupersonicArrow',
          instructions: ['Kol bacak kaldır', 'Pozisyon tut', 'Güçlü kal']
        }
      ]
    },
    {
      id: 'medium_3',
      name: 'Fonksiyonel Hareket',
      difficulty: 'Orta',
      duration: '28 dakika',
      description: 'Günlük yaşam için fonksiyonel hareketler',
      exercises: [
        {
          id: 'deadlift_bodyweight',
          name: 'Vücut Ağırlığı Deadlift',
          description: 'Kalça menteşeli hareket',
          type: 'reps',
          reps: 12,
          targetMuscles: ['Kalça', 'Sırt', 'Bacak'],
          icon: 'GiWeightLiftingUp',
          instructions: ['Kalça geriye', 'Sırt düz', 'Güçlü kalk']
        },
        {
          id: 'step_ups',
          name: 'Step Up',
          description: 'Yüksek yere çıkma',
          type: 'reps',
          reps: 12,
          targetMuscles: ['Bacak', 'Kalça', 'Denge'],
          icon: 'GiStairs',
          instructions: ['Yüksek yere çık', 'Kontrollü in', 'Her iki bacak']
        },
        {
          id: 'bear_crawl',
          name: 'Ayı Yürüyüşü',
          description: 'Dört ayak üzerinde hareket',
          type: 'timed',
          duration: 30,
          targetMuscles: ['Tüm vücut', 'Core'],
          icon: 'GiBearFace',
          instructions: ['Dört ayak üzerine', 'İleri geri yürü', 'Core sıkı']
        },
        {
          id: 'lateral_lunges',
          name: 'Yana Lunge',
          description: 'Yana adım atma',
          type: 'reps',
          reps: 10,
          targetMuscles: ['Bacak', 'Kalça', 'İç bacak'],
          icon: 'GiLeg',
          instructions: ['Yana adım at', 'Derin squat', 'Her iki yan']
        },
        {
          id: 'inchworm',
          name: 'Solucan Hareketi',
          description: 'Öne yürüyerek plank',
          type: 'reps',
          reps: 8,
          targetMuscles: ['Tüm vücut', 'Esneklik'],
          icon: 'GiWorm',
          instructions: ['Öne eğil', 'Ellerle yürü', 'Plank pozisyonu']
        },
        {
          id: 'reverse_lunge',
          name: 'Geriye Lunge',
          description: 'Geriye adım atma',
          type: 'reps',
          reps: 12,
          targetMuscles: ['Bacak', 'Kalça', 'Denge'],
          icon: 'GiLeg',
          instructions: ['Geriye adım', 'Derin in', 'Her iki bacak']
        },
        {
          id: 'crab_walk',
          name: 'Yengeç Yürüyüşü',
          description: 'Ters pozisyonda yürüme',
          type: 'timed',
          duration: 25,
          targetMuscles: ['Kol', 'Core', 'Bacak'],
          icon: 'GiCrab',
          instructions: ['Ters otur', 'Kalça yukarı', 'İleri geri yürü']
        },
        {
          id: 'single_leg_deadlift',
          name: 'Tek Bacak Deadlift',
          description: 'Tek bacakla denge ve kuvvet',
          type: 'reps',
          reps: 8,
          targetMuscles: ['Kalça', 'Denge', 'Sırt'],
          icon: 'GiBalancing',
          instructions: ['Tek ayak dur', 'Öne eğil', 'Her iki bacak']
        },
        {
          id: 'turkish_getup_half',
          name: 'Yarım Turkish Get-up',
          description: 'Yataktan kalkma hareketi',
          type: 'reps',
          reps: 6,
          targetMuscles: ['Tüm vücut', 'Core'],
          icon: 'GiGetUp',
          instructions: ['Yat', 'Yavaş kalk', 'Her iki yan']
        },
        {
          id: 'wall_handstand_prep',
          name: 'Duvar El Duruşu Hazırlık',
          description: 'El duruşu hazırlık hareketi',
          type: 'timed',
          duration: 20,
          targetMuscles: ['Omuz', 'Core', 'Kol'],
          icon: 'GiHandstand',
          instructions: ['Duvara yaslan', 'Ayakları yukarı', 'Denge kur']
        }
      ]
    },
    {
      id: 'medium_4',
      name: 'Kardiyo Kuvvet',
      difficulty: 'Orta',
      duration: '26 dakika',
      description: 'Kardiyo ve kuvveti birleştiren antrenman',
      exercises: [
        {
          id: 'thrusters',
          name: 'Thruster',
          description: 'Squat ve omuz press birleşimi',
          type: 'reps',
          reps: 10,
          targetMuscles: ['Tüm vücut'],
          icon: 'GiWeightLiftingUp',
          instructions: ['Squat yap', 'Kalkarken kol uzat', 'Akıcı hareket']
        },
        {
          id: 'burpee_pushup',
          name: 'Burpee + Push-up',
          description: 'Şınavlı burpee',
          type: 'reps',
          reps: 6,
          targetMuscles: ['Tüm vücut'],
          icon: 'GiJumpAcross',
          instructions: ['Burpee yap', 'Şınav ekle', 'Güçlü bitir']
        },
        {
          id: 'jump_squats_pulse',
          name: 'Pulse Squat Jump',
          description: 'Pulse ile squat jump',
          type: 'reps',
          reps: 8,
          targetMuscles: ['Bacak', 'Kalça'],
          icon: 'GiJumpAcross',
          instructions: ['3 pulse squat', 'Sonra zıpla', 'Tekrarla']
        },
        {
          id: 'plank_up_down',
          name: 'Plank Up-Down',
          description: 'Planktan şınav pozisyonuna',
          type: 'reps',
          reps: 10,
          targetMuscles: ['Core', 'Kol'],
          icon: 'GiAbdominalArmor',
          instructions: ['Planktan başla', 'Şınav pozisyonuna', 'Geri plank']
        },
        {
          id: 'lunge_jumps',
          name: 'Lunge Jump',
          description: 'Zıplamalı lunge',
          type: 'reps',
          reps: 12,
          targetMuscles: ['Bacak', 'Kalça', 'Kardiyo'],
          icon: 'GiJumpAcross',
          instructions: ['Lunge pozisyonu', 'Zıpla bacak değiş', 'Hızlı geçiş']
        },
        {
          id: 'pushup_t',
          name: 'T Push-up',
          description: 'Dönüşlü şınav',
          type: 'reps',
          reps: 8,
          targetMuscles: ['Göğüs', 'Core', 'Omuz'],
          icon: 'GiMuscleUp',
          instructions: ['Şınav yap', 'Yana dön T yap', 'Her iki yan']
        },
        {
          id: 'squat_hold_pulse',
          name: 'Squat Hold + Pulse',
          description: 'Squat tutma ve pulse',
          type: 'timed',
          duration: 45,
          targetMuscles: ['Bacak', 'Kalça'],
          icon: 'GiLeg',
          instructions: ['Squat pozisyonu tut', 'Küçük pulse yap', 'Yanma hisset']
        },
        {
          id: 'mountain_climber_cross',
          name: 'Cross Mountain Climber',
          description: 'Çapraz mountain climber',
          type: 'reps',
          reps: 16,
          targetMuscles: ['Core', 'Kardiyo'],
          icon: 'GiMountainClimbing',
          instructions: ['Plank pozisyonu', 'Çapraz diz çek', 'Hızlı hareket']
        },
        {
          id: 'jump_lunge_hold',
          name: 'Jump Lunge Hold',
          description: 'Zıpla ve lunge tut',
          type: 'reps',
          reps: 6,
          targetMuscles: ['Bacak', 'Denge'],
          icon: 'GiJumpAcross',
          instructions: ['Zıpla lunge', '3 saniye tut', 'Bacak değiş']
        },
        {
          id: 'plank_jack_pushup',
          name: 'Plank Jack + Push-up',
          description: 'Plank jack ve şınav birleşimi',
          type: 'reps',
          reps: 8,
          targetMuscles: ['Tüm vücut'],
          icon: 'GiAbdominalArmor',
          instructions: ['Plank jack yap', 'Şınav ekle', 'Akıcı hareket']
        }
      ]
    },
    {
      id: 'medium_5',
      name: 'Core Güçlendirme',
      difficulty: 'Orta',
      duration: '22 dakika',
      description: 'Core kaslarına odaklanan yoğun antrenman',
      exercises: [
        {
          id: 'bicycle_crunch_med',
          name: 'Bicycle Crunch',
          description: 'Çapraz karın hareketi',
          type: 'reps',
          reps: 20,
          targetMuscles: ['Karın', 'Yan karın'],
          icon: 'GiAbdominalArmor',
          instructions: ['Sırtüstü yat', 'Çapraz dirsek diz', 'Hızlı hareket']
        },
        {
          id: 'russian_twist_med',
          name: 'Russian Twist',
          description: 'Ağırlıklı dönüş hareketi',
          type: 'reps',
          reps: 25,
          targetMuscles: ['Yan karın', 'Core'],
          icon: 'GiTwister',
          instructions: ['Otur gövde geriye', 'Sağa sola dön', 'Core sıkı']
        },
        {
          id: 'dead_bug',
          name: 'Dead Bug',
          description: 'Karşıt kol bacak hareketi',
          type: 'reps',
          reps: 12,
          targetMuscles: ['Core', 'Denge'],
          icon: 'GiBug',
          instructions: ['Sırtüstü yat', 'Karşıt kol bacak', 'Yavaş hareket']
        },
        {
          id: 'hollow_hold',
          name: 'Hollow Hold',
          description: 'Çukur pozisyon tutma',
          type: 'timed',
          duration: 30,
          targetMuscles: ['Karın', 'Core'],
          icon: 'GiAbdominalArmor',
          instructions: ['Sırt yerde', 'Omuz bacak kaldır', 'Çukur şekil']
        },
        {
          id: 'v_ups',
          name: 'V-Up',
          description: 'V şeklinde karın hareketi',
          type: 'reps',
          reps: 12,
          targetMuscles: ['Karın', 'Core'],
          icon: 'GiAbdominalArmor',
          instructions: ['Sırtüstü uzun yat', 'V şekli yap', 'Kontrollü in']
        },
        {
          id: 'plank_knee_elbow',
          name: 'Plank Knee to Elbow',
          description: 'Plankta diz dirsek birleştirme',
          type: 'reps',
          reps: 16,
          targetMuscles: ['Core', 'Yan karın'],
          icon: 'GiAbdominalArmor',
          instructions: ['Plank pozisyonu', 'Diz dirseğe', 'Her iki yan']
        },
        {
          id: 'leg_raise_med',
          name: 'Leg Raise',
          description: 'Bacak kaldırma hareketi',
          type: 'reps',
          reps: 15,
          targetMuscles: ['Alt karın'],
          icon: 'GiLeg',
          instructions: ['Sırtüstü yat', 'Bacakları kaldır', 'Yavaş indir']
        },
        {
          id: 'side_plank_crunch',
          name: 'Side Plank Crunch',
          description: 'Yan plankta karın hareketi',
          type: 'reps',
          reps: 10,
          targetMuscles: ['Yan karın', 'Core'],
          icon: 'GiAbdominalArmor',
          instructions: ['Yan plank', 'Üst diz çek', 'Her iki yan']
        },
        {
          id: 'flutter_kicks',
          name: 'Flutter Kicks',
          description: 'Bacak çırpma hareketi',
          type: 'timed',
          duration: 30,
          targetMuscles: ['Alt karın', 'Kalça'],
          icon: 'GiLeg',
          instructions: ['Sırtüstü yat', 'Bacakları çırp', 'Hızlı hareket']
        },
        {
          id: 'bear_hold',
          name: 'Bear Hold',
          description: 'Ayı pozisyonu tutma',
          type: 'timed',
          duration: 25,
          targetMuscles: ['Core', 'Omuz'],
          icon: 'GiBearFace',
          instructions: ['Dört ayak üzerine', 'Dizler havada', 'Sabit tut']
        }
      ]
    }
  ],
  
  // ZOR SEVİYE (5 Program)
  hard: [
        {
      id: 'hard_1',
      name: 'HIIT Inferno',
      difficulty: 'Zor',
      duration: '35 dakika',
      description: 'Yüksek yoğunluklu interval antrenmanı',
      exercises: [
        {
          id: 'burpee_tuck_jump',
          name: 'Burpee Tuck Jump',
          description: 'Burpee sonrası dizleri göğse çekme zıplaması',
          type: 'reps',
          reps: 8,
          targetMuscles: ['Tüm vücut', 'Kardiyo'],
          icon: 'GiJumpAcross',
          instructions: ['Burpee yap', 'Zıplarken dizleri göğse çek', 'Patlayıcı hareket']
        },
        {
          id: 'pistol_squat_assisted',
          name: 'Assisted Pistol Squat',
          description: 'Destekli tek bacak squat',
          type: 'reps',
          reps: 6,
          targetMuscles: ['Bacak', 'Denge', 'Core'],
          icon: 'GiLeg',
          instructions: ['Tek bacak squat', 'Diğer bacak uzat', 'Destekle denge']
        },
        {
          id: 'explosive_pushup',
          name: 'Explosive Push-up',
          description: 'Patlayıcı şınav',
          type: 'reps',
          reps: 8,
          targetMuscles: ['Göğüs', 'Kol', 'Güç'],
          icon: 'GiMuscleUp',
          instructions: ['Şınav pozisyonu', 'Patlayıcı yukarı it', 'Eller yerden kalksın']
        },
        {
          id: 'jump_lunge_switch',
          name: 'Jump Lunge Switch',
          description: 'Zıplayarak lunge değiştirme',
          type: 'reps',
          reps: 16,
          targetMuscles: ['Bacak', 'Kardiyo', 'Güç'],
          icon: 'GiJumpAcross',
          instructions: ['Lunge pozisyonu', 'Zıpla bacak değiştir', 'Hızlı geçiş']
        },
        {
          id: 'plank_up_down_fast',
          name: 'Fast Plank Up-Down',
          description: 'Hızlı plank yukarı aşağı',
          type: 'reps',
          reps: 12,
          targetMuscles: ['Core', 'Omuz', 'Kol'],
          icon: 'GiAbdominalArmor',
          instructions: ['Plank pozisyonu', 'Hızlı el-dirsek geçiş', 'Core sabit']
        },
        {
          id: 'single_arm_burpee',
          name: 'Single Arm Burpee',
          description: 'Tek kollu burpee',
          type: 'reps',
          reps: 6,
          targetMuscles: ['Tüm vücut', 'Core', 'Denge'],
          icon: 'GiJumpAcross',
          instructions: ['Tek elle şınav', 'Burpee hareketi', 'Her iki kol']
        },
        {
          id: 'broad_jump',
          name: 'Broad Jump',
          description: 'Uzun atlama',
          type: 'reps',
          reps: 8,
          targetMuscles: ['Bacak', 'Güç', 'Kardiyo'],
          icon: 'GiJumpAcross',
          instructions: ['Squat pozisyonu', 'Öne doğru uzun zıpla', 'Yumuşak in']
        },
        {
          id: 'mountain_climber_cross',
          name: 'Cross Mountain Climber',
          description: 'Çapraz mountain climber',
          type: 'timed',
          duration: 45,
          targetMuscles: ['Core', 'Kardiyo', 'Koordinasyon'],
          icon: 'GiMountainClimbing',
          instructions: ['Plank pozisyonu', 'Dizi karşı dirseğe', 'Hızlı çapraz']
        },
        {
          id: 'devil_press',
          name: 'Devil Press',
          description: 'Burpee ve overhead press birleşimi',
          type: 'reps',
          reps: 6,
          targetMuscles: ['Tüm vücut', 'Güç'],
          icon: 'GiWeightLiftingUp',
          instructions: ['Burpee yap', 'Kalkarken kolları yukarı', 'Akıcı hareket']
        },
        {
          id: 'handstand_pushup_prep',
          name: 'Handstand Push-up Prep',
          description: 'El duruşu şınavı hazırlık',
          type: 'reps',
          reps: 5,
          targetMuscles: ['Omuz', 'Kol', 'Core'],
          icon: 'GiHandstand',
          instructions: ['Duvara yaslan', 'El duruşu pozisyonu', 'Şınav hareketi']
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
          id: 'archer_pushup',
          name: 'Archer Push-up',
          description: 'Tek kol ağırlıklı şınav',
          type: 'reps',
          reps: 6,
          targetMuscles: ['Göğüs', 'Kol', 'Core'],
          icon: 'GiMuscleUp',
          instructions: ['Geniş şınav pozisyonu', 'Bir kola ağırlık ver', 'Her iki kol']
        },
        {
          id: 'muscle_up_prep',
          name: 'Muscle-up Prep',
          description: 'Muscle-up hazırlık hareketi',
          type: 'reps',
          reps: 5,
          targetMuscles: ['Sırt', 'Kol', 'Core'],
          icon: 'GiMuscleUp',
          instructions: ['Çekme hareketi', 'Yukarı itme', 'Akıcı geçiş']
        },
        {
          id: 'planche_lean',
          name: 'Planche Lean',
          description: 'Planche eğilme hareketi',
          type: 'timed',
          duration: 20,
          targetMuscles: ['Omuz', 'Core', 'Bilek'],
          icon: 'GiHandstand',
          instructions: ['Şınav pozisyonu', 'Öne doğru eğil', 'Ayaklar hafif']
        },
        {
          id: 'front_lever_tuck',
          name: 'Front Lever Tuck',
          description: 'Ön lever büzülme',
          type: 'timed',
          duration: 15,
          targetMuscles: ['Sırt', 'Core', 'Kol'],
          icon: 'GiStrongMan',
          instructions: ['Çubuğa asıl', 'Dizleri göğse çek', 'Yatay tut']
        },
        {
          id: 'dragon_squat',
          name: 'Dragon Squat',
          description: 'Ejder squat hareketi',
          type: 'reps',
          reps: 5,
          targetMuscles: ['Bacak', 'Core', 'Denge'],
          icon: 'GiLeg',
          instructions: ['Tek bacak squat', 'Diğer bacak yana', 'Derin hareket']
        },
        {
          id: 'handstand_hold',
          name: 'Handstand Hold',
          description: 'El duruşu tutma',
          type: 'timed',
          duration: 30,
          targetMuscles: ['Omuz', 'Core', 'Denge'],
          icon: 'GiHandstand',
          instructions: ['El duruşu pozisyonu', 'Denge kur', 'Sabit tut']
        },
        {
          id: 'one_arm_pushup_prep',
          name: 'One Arm Push-up Prep',
          description: 'Tek kol şınavı hazırlık',
          type: 'reps',
          reps: 4,
          targetMuscles: ['Göğüs', 'Kol', 'Core'],
          icon: 'GiMuscleUp',
          instructions: ['Tek kol şınav pozisyonu', 'Yavaş hareket', 'Her iki kol']
        },
        {
          id: 'human_flag_prep',
          name: 'Human Flag Prep',
          description: 'İnsan bayrağı hazırlık',
          type: 'timed',
          duration: 15,
          targetMuscles: ['Core', 'Kol', 'Yan karın'],
          icon: 'GiStrongMan',
          instructions: ['Dikey çubuğa asıl', 'Vücudu yatay tut', 'Core sıkı']
        },
        {
          id: 'typewriter_pullup',
          name: 'Typewriter Pull-up',
          description: 'Daktilo çekme hareketi',
          type: 'reps',
          reps: 6,
          targetMuscles: ['Sırt', 'Kol', 'Core'],
          icon: 'GiMuscleUp',
          instructions: ['Çek yukarı', 'Sağa sola kay', 'Her iki yan']
        },
        {
          id: 'shrimp_squat_prep',
          name: 'Shrimp Squat Prep',
          description: 'Karides squat hazırlık',
          type: 'reps',
          reps: 4,
          targetMuscles: ['Bacak', 'Denge', 'Esneklik'],
          icon: 'GiLeg',
          instructions: ['Tek bacak squat', 'Arka bacak tutulur', 'Derin squat']
        }
      ]
    },
    {
      id: 'hard_3',
      name: 'Atletik Performans',
      difficulty: 'Zor',
      duration: '38 dakika',
      description: 'Atletik performans geliştirici antrenman',
      exercises: [
        {
          id: 'box_jump_high',
          name: 'High Box Jump',
          description: 'Yüksek kutu zıplaması',
          type: 'reps',
          reps: 8,
          targetMuscles: ['Bacak', 'Güç', 'Patlayıcılık'],
          icon: 'GiJumpAcross',
          instructions: ['Yüksek kutuya zıpla', 'Güçlü çık', 'Yumuşak in']
        },
        {
          id: 'sprint_intervals',
          name: 'Sprint Intervals',
          description: 'Yüksek yoğunluk koşu',
          type: 'timed',
          duration: 30,
          targetMuscles: ['Bacak', 'Kardiyo', 'Hız'],
          icon: 'GiRunningShoe',
          instructions: ['Maksimum hız', 'Yerinde sprint', 'Yüksek diz']
        },
        {
          id: 'plyometric_pushup',
          name: 'Plyometric Push-up',
          description: 'Pliometrik şınav',
          type: 'reps',
          reps: 10,
          targetMuscles: ['Göğüs', 'Güç', 'Patlayıcılık'],
          icon: 'GiMuscleUp',
          instructions: ['Patlayıcı şınav', 'Eller havada', 'Alkış yap']
        },
        {
          id: 'lateral_bound',
          name: 'Lateral Bound',
          description: 'Yana sıçrama',
          type: 'reps',
          reps: 12,
          targetMuscles: ['Bacak', 'Denge', 'Güç'],
          icon: 'GiJumpAcross',
          instructions: ['Yana güçlü sıçra', 'Tek ayak in', 'Her iki yan']
        },
        {
          id: 'depth_jump',
          name: 'Depth Jump',
          description: 'Derinlik zıplaması',
          type: 'reps',
          reps: 6,
          targetMuscles: ['Bacak', 'Reaktif güç'],
          icon: 'GiJumpAcross',
          instructions: ['Yüksekten atla', 'Hemen tekrar zıpla', 'Reaktif hareket']
        },
        {
          id: 'medicine_ball_slam',
          name: 'Medicine Ball Slam',
          description: 'Top çarpma hareketi (hayali)',
          type: 'reps',
          reps: 12,
          targetMuscles: ['Core', 'Omuz', 'Güç'],
          icon: 'GiWeightLiftingUp',
          instructions: ['Yukarı kaldır', 'Güçlü aşağı çarp', 'Tüm vücut kullan']
        },
        {
          id: 'single_leg_hop',
          name: 'Single Leg Hop',
          description: 'Tek bacak zıplama',
          type: 'reps',
          reps: 10,
          targetMuscles: ['Bacak', 'Denge', 'Güç'],
          icon: 'GiJumpAcross',
          instructions: ['Tek bacakla zıpla', 'İleri geri', 'Her iki bacak']
        },
        {
          id: 'agility_ladder',
          name: 'Agility Ladder',
          description: 'Çeviklik merdiveni (hayali)',
          type: 'timed',
          duration: 30,
          targetMuscles: ['Bacak', 'Koordinasyon', 'Hız'],
          icon: 'GiFootsteps',
          instructions: ['Hızlı ayak hareketi', 'Çeviklik paterni', 'Koordinasyon']
        },
        {
          id: 'power_skip',
          name: 'Power Skip',
          description: 'Güçlü sıçrama adımı',
          type: 'reps',
          reps: 16,
          targetMuscles: ['Bacak', 'Güç', 'Koordinasyon'],
          icon: 'GiJumpAcross',
          instructions: ['Güçlü sıçra', 'Diz yukarı', 'Alternatif bacak']
        },
        {
          id: 'reactive_jump',
          name: 'Reactive Jump',
          description: 'Reaktif zıplama',
          type: 'reps',
          reps: 8,
          targetMuscles: ['Bacak', 'Reaktif güç'],
          icon: 'GiJumpAcross',
          instructions: ['Hızlı çömel', 'Anında zıpla', 'Reaktif hareket']
        }
      ]
    },
    {
      id: 'hard_4',
      name: 'Ekstrem Dayanıklılık',
      difficulty: 'Zor',
      duration: '45 dakika',
      description: 'Maksimum dayanıklılık testi',
      exercises: [
        {
          id: 'tabata_burpee',
          name: 'Tabata Burpee',
          description: '20 saniye maksimum burpee',
          type: 'timed',
          duration: 20,
          targetMuscles: ['Tüm vücut', 'Dayanıklılık'],
          icon: 'GiJumpAcross',
          instructions: ['20 saniye maksimum', '10 saniye dinlen', '8 round']
        },
        {
          id: 'wall_sit_extreme',
          name: 'Extreme Wall Sit',
          description: 'Uzun süreli duvar oturma',
          type: 'timed',
          duration: 120,
          targetMuscles: ['Bacak', 'Dayanıklılık'],
          icon: 'GiLeg',
          instructions: ['Duvar oturma', '2 dakika tut', 'Zihinsel güç']
        },
        {
          id: 'plank_marathon',
          name: 'Plank Marathon',
          description: 'Uzun süreli plank',
          type: 'timed',
          duration: 180,
          targetMuscles: ['Core', 'Dayanıklılık'],
          icon: 'GiAbdominalArmor',
          instructions: ['3 dakika plank', 'Nefes kontrol', 'Zihinsel dayanıklılık']
        },
        {
          id: 'squat_hold_extreme',
          name: 'Extreme Squat Hold',
          description: 'Uzun süreli squat tutma',
          type: 'timed',
          duration: 90,
          targetMuscles: ['Bacak', 'Dayanıklılık'],
          icon: 'GiLeg',
          instructions: ['Derin squat tut', '90 saniye', 'Zihinsel güç']
        },
        {
          id: 'pushup_ladder',
          name: 'Push-up Ladder',
          description: 'Şınav merdiveni',
          type: 'reps',
          reps: 55,
          targetMuscles: ['Göğüs', 'Dayanıklılık'],
          icon: 'GiMuscleUp',
          instructions: ['1-2-3...10-9-8...1', 'Toplam 55 şınav', 'Dinlenmeden']
        },
        {
          id: 'mountain_climber_marathon',
          name: 'Mountain Climber Marathon',
          description: 'Uzun süreli mountain climber',
          type: 'timed',
          duration: 120,
          targetMuscles: ['Core', 'Kardiyo', 'Dayanıklılık'],
          icon: 'GiMountainClimbing',
          instructions: ['2 dakika sürekli', 'Sabit tempo', 'Nefes kontrol']
        },
        {
          id: 'jumping_jack_1000',
          name: '1000 Jumping Jack',
          description: '1000 jumping jack challenge',
          type: 'reps',
          reps: 1000,
          targetMuscles: ['Tüm vücut', 'Kardiyo'],
          icon: 'GiJumpAcross',
          instructions: ['1000 tekrar', 'Kendi temponda', 'Zihinsel güç']
        },
        {
          id: 'bear_crawl_distance',
          name: 'Bear Crawl Distance',
          description: 'Uzun mesafe ayı yürüyüşü',
          type: 'timed',
          duration: 180,
          targetMuscles: ['Tüm vücut', 'Dayanıklılık'],
          icon: 'GiBearFace',
          instructions: ['3 dakika ayı yürüyüşü', 'Sürekli hareket', 'Core sıkı']
        },
        {
          id: 'lunge_walk_marathon',
          name: 'Lunge Walk Marathon',
          description: 'Uzun mesafe lunge yürüyüşü',
          type: 'reps',
          reps: 100,
          targetMuscles: ['Bacak', 'Dayanıklılık'],
          icon: 'GiLeg',
          instructions: ['100 lunge adımı', 'Sürekli hareket', 'Derin lunge']
        },
        {
          id: 'isometric_hold_circuit',
          name: 'Isometric Hold Circuit',
          description: 'İzometrik tutma devresi',
          type: 'timed',
          duration: 300,
          targetMuscles: ['Tüm vücut', 'Dayanıklılık'],
          icon: 'GiStrongMan',
          instructions: ['5 farklı pozisyon', 'Her biri 1 dakika', 'Zihinsel güç']
        }
      ]
    },
    {
      id: 'hard_5',
      name: 'Calisthenics Master',
      difficulty: 'Zor',
      duration: '42 dakika',
      description: 'İleri seviye calisthenics hareketleri',
      exercises: [
        {
          id: 'muscle_up',
          name: 'Muscle-up',
          description: 'Tam muscle-up hareketi',
          type: 'reps',
          reps: 3,
          targetMuscles: ['Sırt', 'Kol', 'Core'],
          icon: 'GiMuscleUp',
          instructions: ['Çek yukarı', 'Geçiş yap', 'İt yukarı']
        },
        {
          id: 'front_lever',
          name: 'Front Lever',
          description: 'Ön lever tutma',
          type: 'timed',
          duration: 10,
          targetMuscles: ['Sırt', 'Core', 'Kol'],
          icon: 'GiStrongMan',
          instructions: ['Çubuğa asıl', 'Vücut yatay', 'Güçlü tut']
        },
        {
          id: 'back_lever',
          name: 'Back Lever',
          description: 'Arka lever tutma',
          type: 'timed',
          duration: 8,
          targetMuscles: ['Göğüs', 'Omuz', 'Core'],
          icon: 'GiStrongMan',
          instructions: ['Ters tutma', 'Vücut yatay', 'Omuz güçlü']
        },
        {
          id: 'planche_pushup',
          name: 'Planche Push-up',
          description: 'Planche şınavı',
          type: 'reps',
          reps: 2,
          targetMuscles: ['Omuz', 'Core', 'Kol'],
          icon: 'GiHandstand',
          instructions: ['Planche pozisyonu', 'Şınav hareketi', 'İleri seviye']
        },
        {
          id: 'human_flag',
          name: 'Human Flag',
          description: 'İnsan bayrağı',
          type: 'timed',
          duration: 5,
          targetMuscles: ['Core', 'Kol', 'Yan karın'],
          icon: 'GiStrongMan',
          instructions: ['Dikey çubuk', 'Vücut yatay', 'Bayrak pozisyonu']
        },
        {
          id: 'one_arm_pullup_neg',
          name: 'One Arm Pull-up Negative',
          description: 'Tek kol çekme negatif',
          type: 'reps',
          reps: 3,
          targetMuscles: ['Sırt', 'Kol', 'Core'],
          icon: 'GiMuscleUp',
          instructions: ['Tek kol çekme', 'Yavaş inme', 'Her iki kol']
        },
        {
          id: 'handstand_pushup',
          name: 'Handstand Push-up',
          description: 'El duruşu şınavı',
          type: 'reps',
          reps: 5,
          targetMuscles: ['Omuz', 'Kol', 'Core'],
          icon: 'GiHandstand',
          instructions: ['El duruşu', 'Şınav hareketi', 'Duvara yaslan']
        },
        {
          id: 'pistol_squat',
          name: 'Pistol Squat',
          description: 'Tek bacak squat',
          type: 'reps',
          reps: 5,
          targetMuscles: ['Bacak', 'Denge', 'Core'],
          icon: 'GiLeg',
          instructions: ['Tek bacak squat', 'Tam hareket', 'Her iki bacak']
        },
        {
          id: 'dragon_flag',
          name: 'Dragon Flag',
          description: 'Ejder bayrağı',
          type: 'reps',
          reps: 5,
          targetMuscles: ['Core', 'Sırt'],
          icon: 'GiAbdominalArmor',
          instructions: ['Sırt üstü', 'Vücut düz kaldır', 'Core güçlü']
        },
        {
          id: 'maltese_prep',
          name: 'Maltese Prep',
          description: 'Malta haçı hazırlık',
          type: 'timed',
          duration: 10,
          targetMuscles: ['Omuz', 'Göğüs', 'Core'],
          icon: 'GiStrongMan',
          instructions: ['Kollar yana', 'Vücut yatay', 'İleri seviye güç']
        }
      ]
    }
  ]
};