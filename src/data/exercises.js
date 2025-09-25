export const exercisePrograms = {
  monday: {
    day: 'Pazartesi',
    title: 'Göğüs, Omuz & Kardiyo',
    type: 'workout',
    exercises: [
      {
        id: 'pushup',
        name: 'Şınav (Push-up)',
        description: 'Eller omuz genişliğinde yerde, vücut düz çizgide. Dirsekleri bükerek göğsünü yere yaklaştır, sonra yukarı it.',
        type: 'reps',
        reps: 10,
        targetMuscles: ['Göğüs', 'Omuz', 'Arka kol'],
        icon: 'GiMuscleUp',
        instructions: [
          'Eller omuz genişliğinde yerde',
          'Vücut düz çizgide tut',
          'Dirsekleri bükerek göğsünü yere yaklaştır',
          'Sonra yukarı it'
        ]
      },
      {
        id: 'dips',
        name: 'Dips (Sandalyede arka kol)',
        description: 'Ellerini sağlam bir sandalyeye koy, ayaklarını öne uzat. Dirsekleri bükerek kalçanı yere indir, kollarla yukarı it.',
        type: 'reps',
        reps: 8,
        targetMuscles: ['Arka kol', 'Göğüs', 'Omuz'],
        icon: 'GiStrongMan',
        instructions: [
          'Ellerini sağlam bir sandalyeye koy',
          'Ayaklarını öne uzat',
          'Dirsekleri bükerek kalçanı yere indir',
          'Kollarla yukarı it'
        ]
      },
      {
        id: 'pike_pushup',
        name: 'Pike Push-up',
        description: 'Şınav pozisyonunda kalça yukarıda, V pozisyonu al. Başını yere yaklaştır, tekrar yukarı it.',
        type: 'reps',
        reps: 6,
        targetMuscles: ['Omuz', 'Ön deltoid'],
        icon: 'GiMuscleUp',
        instructions: [
          'Şınav pozisyonunda kalça yukarıda',
          'V pozisyonu al',
          'Başını yere yaklaştır',
          'Tekrar yukarı it'
        ]
      },
      {
        id: 'burpee',
        name: 'Burpee',
        description: 'Ayakta başla, squat yapıp yere in, şınav pozisyonuna geç, bir şınav çek, kalkıp yukarı zıpla.',
        type: 'reps',
        reps: 5,
        targetMuscles: ['Tüm vücut', 'Kardiyo'],
        icon: 'GiJumpAcross',
        instructions: [
          'Ayakta başla',
          'Squat yapıp yere in',
          'Şınav pozisyonuna geç',
          'Bir şınav çek',
          'Kalkıp yukarı zıpla'
        ]
      },
      {
        id: 'plank',
        name: 'Plank',
        description: 'Ön kollar yerde, vücut düz çizgide. Karın sıkılı, kalça ne yukarıda ne aşağıda.',
        type: 'timed',
        duration: 30,
        targetMuscles: ['Karın', 'Core kasları'],
        icon: 'GiAbdominalArmor',
        instructions: [
          'Ön kollar yerde',
          'Vücut düz çizgide tut',
          'Karın sıkılı',
          'Kalça ne yukarıda ne aşağıda'
        ]
      },
      {
        id: 'shoulder_press',
        name: 'Shoulder Press (Omuz basma)',
        description: 'Ayakta dur, kolları omuz hizasında yukarı kaldır, sonra aşağı indir.',
        type: 'reps',
        reps: 12,
        targetMuscles: ['Omuz', 'Ön deltoid'],
        icon: 'GiMuscleUp',
        instructions: [
          'Ayakta dur',
          'Kolları omuz hizasında yukarı kaldır',
          'Sonra aşağı indir'
        ]
      },
      {
        id: 'arm_circles',
        name: 'Arm Circles (Kol çevirme)',
        description: 'Kolları yana aç, küçük daireler çiz, sonra büyük daireler çiz.',
        type: 'timed',
        duration: 30,
        targetMuscles: ['Omuz', 'Deltoid'],
        icon: 'GiMuscleUp',
        instructions: [
          'Kolları yana aç',
          'Küçük daireler çiz',
          'Sonra büyük daireler çiz'
        ]
      },
      {
        id: 'wall_pushup',
        name: 'Wall Push-up (Duvar şınavı)',
        description: 'Duvara karşı dur, ellerini duvara koy, şınav hareketi yap.',
        type: 'reps',
        reps: 15,
        targetMuscles: ['Göğüs', 'Omuz'],
        icon: 'GiMuscleUp',
        instructions: [
          'Duvara karşı dur',
          'Ellerini duvara koy',
          'Şınav hareketi yap'
        ]
      },
      {
        id: 'tricep_extension',
        name: 'Tricep Extension (Arka kol germe)',
        description: 'Bir kolu yukarı kaldır, dirseği bük, diğer elle destekle, arka kol kasını çalıştır.',
        type: 'reps',
        reps: 10,
        targetMuscles: ['Arka kol', 'Tricep'],
        icon: 'GiStrongMan',
        instructions: [
          'Bir kolu yukarı kaldır',
          'Dirseği bük',
          'Diğer elle destekle',
          'Arka kol kasını çalıştır'
        ]
      },
      {
        id: 'chest_fly',
        name: 'Chest Fly (Göğüs açma)',
        description: 'Sırtüstü yat, kolları yana aç, göğüs kaslarını sıkarak kolları yukarı getir.',
        type: 'reps',
        reps: 12,
        targetMuscles: ['Göğüs', 'Ön deltoid'],
        icon: 'GiMuscleUp',
        instructions: [
          'Sırtüstü yat',
          'Kolları yana aç',
          'Göğüs kaslarını sıkarak kolları yukarı getir'
        ]
      }
    ]
  },
  tuesday: {
    day: 'Salı',
    title: 'Bacak & Kalça',
    type: 'workout',
    exercises: [
      {
        id: 'squat',
        name: 'Squat',
        description: 'Ayaklar omuz genişliğinde. Kalçanı geriye doğru indir, dizler parmak ucunu geçmesin, sonra yukarı kalk.',
        type: 'reps',
        reps: 15,
        targetMuscles: ['Uyluk', 'Kalça', 'Core'],
        icon: 'GiLeg',
        instructions: [
          'Ayaklar omuz genişliğinde',
          'Kalçanı geriye doğru indir',
          'Dizler parmak ucunu geçmesin',
          'Sonra yukarı kalk'
        ]
      },
      {
        id: 'lunge',
        name: 'Lunge (Öne adım çömelme)',
        description: 'Bir adım öne at, arka diz yere yaklaşsın. Ön diz 90 derece olsun. Yukarı kalk, bacak değiştir.',
        type: 'reps',
        reps: 10,
        targetMuscles: ['Uyluk', 'Kalça', 'Core'],
        icon: 'GiLeg',
        instructions: [
          'Bir adım öne at',
          'Arka diz yere yaklaşsın',
          'Ön diz 90 derece olsun',
          'Yukarı kalk, bacak değiştir'
        ]
      },
      {
        id: 'glute_bridge',
        name: 'Glute Bridge (Kalça kaldırma)',
        description: 'Sırtüstü yat, dizler bükülü. Kalçanı yukarı kaldır, birkaç saniye sık, sonra indir.',
        type: 'reps',
        reps: 12,
        targetMuscles: ['Kalça', 'Bel', 'Arka bacak'],
        icon: 'GiPelvis',
        instructions: [
          'Sırtüstü yat, dizler bükülü',
          'Kalçanı yukarı kaldır',
          'Birkaç saniye sık',
          'Sonra indir'
        ]
      },
      {
        id: 'bulgarian_split_squat',
        name: 'Bulgarian Split Squat',
        description: 'Bir ayağı sandalyeye koy, diğer ayağı önde. Öndeki bacakla squat yap.',
        type: 'reps',
        reps: 8,
        targetMuscles: ['Kalça', 'Ön bacak'],
        icon: 'GiLeg',
        instructions: [
          'Bir ayağı sandalyeye koy',
          'Diğer ayağı önde',
          'Öndeki bacakla squat yap'
        ]
      },
      {
        id: 'calf_raise',
        name: 'Calf Raise (Topuk kaldırma)',
        description: 'Ayakta dik dur, parmak ucuna yüksel, yavaşça in.',
        type: 'reps',
        reps: 15,
        targetMuscles: ['Baldır kasları'],
        icon: 'GiFoot',
        instructions: [
          'Ayakta dik dur',
          'Parmak ucuna yüksel',
          'Yavaşça in'
        ]
      },
      {
        id: 'wall_sit',
        name: 'Wall Sit (Duvar oturma)',
        description: 'Sırtını duvara daya, squat pozisyonunda kal.',
        type: 'timed',
        duration: 30,
        targetMuscles: ['Uyluk', 'Kalça'],
        icon: 'GiLeg',
        instructions: [
          'Sırtını duvara daya',
          'Squat pozisyonunda kal'
        ]
      },
      {
        id: 'single_leg_deadlift',
        name: 'Single Leg Deadlift (Tek bacak ölü kaldırma)',
        description: 'Bir bacak üzerinde dur, diğer bacağı geriye uzat, öne eğil.',
        type: 'reps',
        reps: 8,
        targetMuscles: ['Arka bacak', 'Kalça', 'Denge'],
        icon: 'GiLeg',
        instructions: [
          'Bir bacak üzerinde dur',
          'Diğer bacağı geriye uzat',
          'Öne eğil'
        ]
      },
      {
        id: 'side_lunge',
        name: 'Side Lunge (Yana adım)',
        description: 'Yana geniş adım at, bir bacağı bük diğeri düz kalsın.',
        type: 'reps',
        reps: 10,
        targetMuscles: ['İç bacak', 'Kalça', 'Uyluk'],
        icon: 'GiLeg',
        instructions: [
          'Yana geniş adım at',
          'Bir bacağı bük diğeri düz kalsın'
        ]
      },
      {
        id: 'jump_squat',
        name: 'Jump Squat (Zıplamalı squat)',
        description: 'Normal squat yap, yukarı kalkarken zıpla.',
        type: 'reps',
        reps: 8,
        targetMuscles: ['Bacak', 'Kalça', 'Kardiyo'],
        icon: 'GiJumpAcross',
        instructions: [
          'Normal squat yap',
          'Yukarı kalkarken zıpla'
        ]
      },
      {
        id: 'hip_thrust',
        name: 'Hip Thrust (Kalça itme)',
        description: 'Sırtını sandalyeye daya, kalçanı yukarı it.',
        type: 'reps',
        reps: 12,
        targetMuscles: ['Kalça', 'Arka bacak'],
        icon: 'GiPelvis',
        instructions: [
          'Sırtını sandalyeye daya',
          'Kalçanı yukarı it'
        ]
      }
    ]
  },
  wednesday: {
    day: 'Çarşamba',
    title: 'Dinlenme veya Yürüyüş',
    type: 'rest',
    exercises: []
  },
  thursday: {
    day: 'Perşembe',
    title: 'Karın & Core',
    type: 'workout',
    exercises: [
      {
        id: 'crunch',
        name: 'Crunch (Klasik mekik)',
        description: 'Sırtüstü yat, eller başının yanında. Gövdeni hafif yukarı kaldır, karın kaslarını sık, geri yat.',
        type: 'reps',
        reps: 15,
        targetMuscles: ['Üst karın'],
        icon: 'GiAbdominalArmor',
        instructions: [
          'Sırtüstü yat, eller başının yanında',
          'Gövdeni hafif yukarı kaldır',
          'Karın kaslarını sık',
          'Geri yat'
        ]
      },
      {
        id: 'bicycle_crunch',
        name: 'Bicycle Crunch',
        description: 'Sırtüstü yat, eller başının yanında. Dirsek ve karşı dizini çapraz getirirken diğer bacak ileri uzasın.',
        type: 'reps',
        reps: 12,
        targetMuscles: ['Yan karın', 'Alt karın'],
        icon: 'GiAbdominalArmor',
        instructions: [
          'Sırtüstü yat, eller başının yanında',
          'Dirsek ve karşı dizini çapraz getir',
          'Diğer bacak ileri uzasın'
        ]
      },
      {
        id: 'russian_twist',
        name: 'Russian Twist',
        description: 'Dizler bükülü otur, gövdeyi hafif geriye ver. Ellerini göğüste tutup sağa-sola dön.',
        type: 'reps',
        reps: 20,
        targetMuscles: ['Yan karın', 'Oblik kaslar'],
        icon: 'GiTwister',
        instructions: [
          'Dizler bükülü otur',
          'Gövdeyi hafif geriye ver',
          'Ellerini göğüste tut',
          'Sağa-sola dön'
        ]
      },
      {
        id: 'leg_raise',
        name: 'Leg Raise (Bacak kaldırma)',
        description: 'Sırtüstü yat, bacaklarını düz yukarı kaldırıp yavaş indir.',
        type: 'reps',
        reps: 10,
        targetMuscles: ['Alt karın'],
        icon: 'GiLeg',
        instructions: [
          'Sırtüstü yat',
          'Bacaklarını düz yukarı kaldır',
          'Yavaş indir'
        ]
      },
      {
        id: 'side_plank',
        name: 'Side Plank',
        description: 'Yan yat, ön kolun yerde, vücudu düz çizgide yukarı kaldır.',
        type: 'timed',
        duration: 20,
        targetMuscles: ['Yan karın', 'Oblik', 'Omuz'],
        icon: 'GiAbdominalArmor',
        instructions: [
          'Yan yat, ön kolun yerde',
          'Vücudu düz çizgide yukarı kaldır'
        ]
      },
      {
        id: 'dead_bug',
        name: 'Dead Bug',
        description: 'Sırtüstü yat, kollar yukarı, dizler 90 derece. Karşı kol ve bacağı uzat.',
        type: 'reps',
        reps: 10,
        targetMuscles: ['Core', 'Karın', 'Koordinasyon'],
        icon: 'GiAbdominalArmor',
        instructions: [
          'Sırtüstü yat, kollar yukarı',
          'Dizler 90 derece',
          'Karşı kol ve bacağı uzat'
        ]
      },
      {
        id: 'hollow_hold',
        name: 'Hollow Hold',
        description: 'Sırtüstü yat, omuzlar ve bacaklar yerden kalk, C şekli yap.',
        type: 'timed',
        duration: 20,
        targetMuscles: ['Tüm karın', 'Core'],
        icon: 'GiAbdominalArmor',
        instructions: [
          'Sırtüstü yat',
          'Omuzlar ve bacaklar yerden kalk',
          'C şekli yap'
        ]
      },
      {
        id: 'plank_up_down',
        name: 'Plank Up-Down',
        description: 'Plank pozisyonundan ellerine çık, tekrar ön kollara in.',
        type: 'reps',
        reps: 8,
        targetMuscles: ['Core', 'Omuz', 'Kol'],
        icon: 'GiAbdominalArmor',
        instructions: [
          'Plank pozisyonundan ellerine çık',
          'Tekrar ön kollara in'
        ]
      },
      {
        id: 'v_up',
        name: 'V-Up',
        description: 'Sırtüstü yat, kollar ve bacaklar aynı anda yukarı, V şekli yap.',
        type: 'reps',
        reps: 10,
        targetMuscles: ['Üst karın', 'Alt karın'],
        icon: 'GiAbdominalArmor',
        instructions: [
          'Sırtüstü yat',
          'Kollar ve bacaklar aynı anda yukarı',
          'V şekli yap'
        ]
      },
      {
        id: 'bear_crawl',
        name: 'Bear Crawl',
        description: 'Eller ve ayak parmakları yerde, dizler havada, ileri geri hareket et.',
        type: 'timed',
        duration: 30,
        targetMuscles: ['Core', 'Omuz', 'Koordinasyon'],
        icon: 'GiAbdominalArmor',
        instructions: [
          'Eller ve ayak parmakları yerde',
          'Dizler havada',
          'İleri geri hareket et'
        ]
      }
    ]
  },
  friday: {
    day: 'Cuma',
    title: 'Tüm Vücut + Kardiyo',
    type: 'workout',
    exercises: [
      {
        id: 'burpee_2',
        name: 'Burpee',
        description: 'Ayakta başla, squat yapıp yere in, şınav pozisyonuna geç, bir şınav çek, kalkıp yukarı zıpla.',
        type: 'reps',
        reps: 6,
        targetMuscles: ['Tüm vücut', 'Dayanıklılık'],
        icon: 'GiJumpAcross',
        instructions: [
          'Ayakta başla',
          'Squat yapıp yere in',
          'Şınav pozisyonuna geç',
          'Bir şınav çek',
          'Kalkıp yukarı zıpla'
        ]
      },
      {
        id: 'squat_jump',
        name: 'Squat Jump',
        description: 'Normal squat yap, yukarı kalkarken patlayıcı şekilde zıpla.',
        type: 'reps',
        reps: 10,
        targetMuscles: ['Bacak', 'Kalça', 'Kardiyo'],
        icon: 'GiJumpAcross',
        instructions: [
          'Normal squat yap',
          'Yukarı kalkarken patlayıcı şekilde zıpla'
        ]
      },
      {
        id: 'pushup_shoulder_tap',
        name: 'Push-up to Shoulder Tap',
        description: 'Şınav pozisyonunda bir tekrar yap, sonra sağ elinle sol omzuna dokun, ardından diğer tarafa.',
        type: 'reps',
        reps: 8,
        targetMuscles: ['Göğüs', 'Omuz', 'Core'],
        icon: 'GiMuscleUp',
        instructions: [
          'Şınav pozisyonunda bir tekrar yap',
          'Sağ elinle sol omzuna dokun',
          'Ardından diğer tarafa'
        ]
      },
      {
        id: 'mountain_climber',
        name: 'Mountain Climber',
        description: 'Şınav pozisyonunda hızlıca dizlerini göğse doğru çek.',
        type: 'timed',
        duration: 30,
        targetMuscles: ['Karın', 'Kardiyo'],
        icon: 'GiMountainClimbing',
        instructions: [
          'Şınav pozisyonunda',
          'Hızlıca dizlerini göğse doğru çek'
        ]
      },
      {
        id: 'superman',
        name: 'Superman',
        description: 'Yüzüstü yere yat, kollar öne uzat. Kolları ve bacakları aynı anda kaldırıp birkaç saniye tut, indir.',
        type: 'reps',
        reps: 10,
        targetMuscles: ['Sırt', 'Bel', 'Core'],
        icon: 'GiSupersonicArrow',
        instructions: [
          'Yüzüstü yere yat, kollar öne uzat',
          'Kolları ve bacakları aynı anda kaldır',
          'Birkaç saniye tut',
          'İndir'
        ]
      },
      {
        id: 'plank_2',
        name: 'Plank',
        description: 'Ön kollar yerde, vücut düz çizgide. Karın sıkılı, kalça ne yukarıda ne aşağıda.',
        type: 'timed',
        duration: 40,
        targetMuscles: ['Core kasları'],
        icon: 'GiAbdominalArmor',
        instructions: [
          'Ön kollar yerde',
          'Vücut düz çizgide tut',
          'Karın sıkılı',
          'Kalça ne yukarıda ne aşağıda'
        ]
      },
      {
        id: 'high_knees',
        name: 'High Knees (Yüksek diz)',
        description: 'Yerinde koş, dizleri göğse doğru yüksek kaldır.',
        type: 'timed',
        duration: 30,
        targetMuscles: ['Kardiyo', 'Bacak'],
        icon: 'GiRunningShoe',
        instructions: [
          'Yerinde koş',
          'Dizleri göğse doğru yüksek kaldır'
        ]
      },
      {
        id: 'jumping_jacks',
        name: 'Jumping Jacks',
        description: 'Zıplayarak bacakları aç-kapa, kolları yukarı-aşağı.',
        type: 'reps',
        reps: 20,
        targetMuscles: ['Kardiyo', 'Tüm vücut'],
        icon: 'GiJumpAcross',
        instructions: [
          'Zıplayarak bacakları aç-kapa',
          'Kolları yukarı-aşağı'
        ]
      },
      {
        id: 'inchworm',
        name: 'Inchworm',
        description: 'Ayakta dur, elleri yere koy, eller ile şınav pozisyonuna git, geri dön.',
        type: 'reps',
        reps: 6,
        targetMuscles: ['Tüm vücut', 'Esneklik'],
        icon: 'GiWorm',
        instructions: [
          'Ayakta dur',
          'Elleri yere koy',
          'Eller ile şınav pozisyonuna git',
          'Geri dön'
        ]
      },
      {
        id: 'star_jumps',
        name: 'Star Jumps (Yıldız zıplaması)',
        description: 'Zıplayarak kol ve bacakları X şeklinde aç.',
        type: 'reps',
        reps: 12,
        targetMuscles: ['Kardiyo', 'Koordinasyon'],
        icon: 'GiJumpAcross',
        instructions: [
          'Zıplayarak kol ve bacakları X şeklinde aç'
        ]
      }
    ]
  },
  saturday: {
    day: 'Cumartesi',
    title: 'İstediğin bölgeyi tekrar et',
    type: 'rest',
    exercises: []
  },
  sunday: {
    day: 'Pazar',
    title: 'Dinlenme',
    type: 'rest',
    exercises: []
  }
};

export const dayKeys = {
  'Pazartesi': 'monday',
  'Salı': 'tuesday', 
  'Çarşamba': 'wednesday',
  'Perşembe': 'thursday',
  'Cuma': 'friday',
  'Cumartesi': 'saturday',
  'Pazar': 'sunday'
};