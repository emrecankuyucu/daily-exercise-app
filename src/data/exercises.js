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