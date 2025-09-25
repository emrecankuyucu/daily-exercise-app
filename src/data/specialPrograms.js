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
      duration: '16 dakika',
      description: 'Temel kuvvet hareketleri',
      exercises: [
        {
          id: 'wall_pushup',
          name: 'Duvar Şınavı',
          description: 'Duvara karşı şınav hareketi',
          type: 'reps',
          reps: 10,
          targetMuscles: ['Göğüs', 'Kol'],
          icon: 'GiMuscleUp',
          instructions: ['Duvara karşı dur', 'Elleri duvara koy', 'İleri geri hareket et']
        },
        {
          id: 'chair_squat',
          name: 'Sandalye Squat',
          description: 'Sandalyeye oturup kalkma',
          type: 'reps',
          reps: 8,
          targetMuscles: ['Bacak', 'Kalça'],
          icon: 'GiChair',
          instructions: ['Sandalyenin önünde dur', 'Yavaşça otur', 'Yavaşça kalk']
        },
        {
          id: 'modified_plank',
          name: 'Dizüstü Plank',
          description: 'Dizler yerde plank pozisyonu',
          type: 'timed',
          duration: 20,
          targetMuscles: ['Core', 'Karın'],
          icon: 'GiAbdominalArmor',
          instructions: ['Dizler ve ön kollar yerde', 'Vücudu düz tut', 'Nefes almaya devam et']
        },
        {
          id: 'assisted_squat',
          name: 'Destekli Squat',
          description: 'Sandalyeye tutunarak squat',
          type: 'reps',
          reps: 10,
          targetMuscles: ['Bacak', 'Kalça'],
          icon: 'GiLeg',
          instructions: ['Sandalyeye tutun', 'Squat pozisyonuna in', 'Yavaşça kalk']
        },
        {
          id: 'seated_leg_extension',
          name: 'Oturarak Bacak Uzatma',
          description: 'Sandalyede bacak uzatma',
          type: 'reps',
          reps: 8,
          targetMuscles: ['Ön bacak'],
          icon: 'GiLeg',
          instructions: ['Sandalyede otur', 'Bacağı düz uzat', 'Yavaşça indir']
        },
        {
          id: 'wall_sit_easy',
          name: 'Kolay Duvar Oturma',
          description: 'Kısa süreli duvar oturma',
          type: 'timed',
          duration: 15,
          targetMuscles: ['Bacak', 'Kalça'],
          icon: 'GiChair',
          instructions: ['Duvara yaslan', 'Hafif çömel', 'Pozisyonu koru']
        },
        {
          id: 'arm_raises',
          name: 'Kol Kaldırma',
          description: 'Kolları yukarı kaldırma',
          type: 'reps',
          reps: 10,
          targetMuscles: ['Omuz', 'Kol'],
          icon: 'GiArm',
          instructions: ['Kolları yanlarda', 'Yukarı kaldır', 'Yavaşça indir']
        },
        {
          id: 'calf_raise_easy',
          name: 'Kolay Baldır Kaldırma',
          description: 'Destekli baldır kaldırma',
          type: 'reps',
          reps: 12,
          targetMuscles: ['Baldır'],
          icon: 'GiFoot',
          instructions: ['Duvara yaslan', 'Parmak ucuna yüksel', 'Yavaşça in']
        },
        {
          id: 'gentle_core',
          name: 'Hafif Karın',
          description: 'Kolay karın egzersizi',
          type: 'reps',
          reps: 6,
          targetMuscles: ['Karın'],
          icon: 'GiAbdominalArmor',
          instructions: ['Sırtüstü yat', 'Başı hafif kaldır', 'Yavaşça indir']
        }
      ]
    },
    {
      id: 'easy_4',
      name: 'Sabah Aktivasyonu',
      difficulty: 'Kolay',
      duration: '12 dakika',
      description: 'Güne başlamak için hafif hareketler',
      exercises: [
        {
          id: 'morning_stretch',
          name: 'Sabah Germe',
          description: 'Kolları yukarı uzatarak germe',
          type: 'timed',
          duration: 30,
          targetMuscles: ['Tüm vücut'],
          icon: 'GiArm',
          instructions: ['Kolları yukarı uzat', 'Vücudu ger', 'Derin nefes al']
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
          id: 'ankle_circles',
          name: 'Ayak Bileği Çevirme',
          description: 'Ayak bileklerini çevirin',
          type: 'reps',
          reps: 8,
          targetMuscles: ['Ayak', 'Baldır'],
          icon: 'GiFoot',
          instructions: ['Bir ayağı kaldır', 'Daire şeklinde çevir', 'Diğer ayakla tekrarla']
        },
        {
          id: 'gentle_twist_morning',
          name: 'Sabah Bel Çevirme',
          description: 'Hafif bel çevirme hareketi',
          type: 'reps',
          reps: 6,
          targetMuscles: ['Bel', 'Yan karın'],
          icon: 'GiTwister',
          instructions: ['Ayakta dur', 'Beli sağa sola çevir', 'Yavaş hareket et']
        },
        {
          id: 'knee_to_chest',
          name: 'Diz Göğse',
          description: 'Dizleri göğse çekme',
          type: 'reps',
          reps: 6,
          targetMuscles: ['Kalça', 'Arka bacak'],
          icon: 'GiLeg',
          instructions: ['Ayakta dur', 'Dizi göğse çek', 'Alternatif hareket']
        },
        {
          id: 'side_bend',
          name: 'Yana Eğilme',
          description: 'Vücudu yana eğme',
          type: 'reps',
          reps: 6,
          targetMuscles: ['Yan karın', 'Bel'],
          icon: 'GiTwister',
          instructions: ['Kolu yukarı kaldır', 'Yana eğil', 'Diğer tarafa tekrarla']
        },
        {
          id: 'wrist_circles',
          name: 'Bilek Çevirme',
          description: 'Bilekleri çevirme',
          type: 'reps',
          reps: 8,
          targetMuscles: ['Bilek', 'Ön kol'],
          icon: 'GiArm',
          instructions: ['Kolları öne uzat', 'Bilekleri çevir', 'Her iki yöne']
        },
        {
          id: 'head_nods',
          name: 'Baş Sallama',
          description: 'Başı yukarı aşağı sallama',
          type: 'reps',
          reps: 6,
          targetMuscles: ['Boyun'],
          icon: 'GiNeck',
          instructions: ['Başı yukarı kaldır', 'Aşağı indir', 'Yavaş hareket et']
        },
        {
          id: 'energizing_breath',
          name: 'Enerji Verici Nefes',
          description: 'Derin enerji nefesi',
          type: 'timed',
          duration: 45,
          targetMuscles: ['Akciğer'],
          icon: 'GiLungs',
          instructions: ['Derin nefes al', 'Enerji hisset', 'Güne hazırlan']
        }
      ]
    },
    {
      id: 'easy_5',
      name: 'Nefes ve Rahatlama',
      difficulty: 'Kolay',
      duration: '15 dakika',
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
        },
        {
          id: 'box_breathing',
          name: 'Kutu Nefesi',
          description: '4-4-4-4 nefes tekniği',
          type: 'timed',
          duration: 60,
          targetMuscles: ['Akciğer', 'Rahatlama'],
          icon: 'GiLungs',
          instructions: ['4 sayarak nefes al', '4 sayarak tut', '4 sayarak ver', '4 sayarak bekle']
        },
        {
          id: 'shoulder_release',
          name: 'Omuz Gevşetme',
          description: 'Omuz kaslarını gevşetme',
          type: 'timed',
          duration: 30,
          targetMuscles: ['Omuz', 'Boyun'],
          icon: 'GiShoulderArmor',
          instructions: ['Omuzları yukarı çek', 'Gerginliği hisset', 'Bırak ve gevşe']
        },
        {
          id: 'progressive_relaxation',
          name: 'Aşamalı Gevşeme',
          description: 'Vücut kaslarını aşamalı gevşetme',
          type: 'timed',
          duration: 90,
          targetMuscles: ['Tüm vücut', 'Rahatlama'],
          icon: 'GiMeditation',
          instructions: ['Ayak parmaklarından başla', 'Her kasını sık ve bırak', 'Yukarı doğru ilerle']
        },
        {
          id: 'gentle_spinal_wave',
          name: 'Hafif Omurga Dalgası',
          description: 'Omurgayı dalga gibi hareket ettirme',
          type: 'reps',
          reps: 5,
          targetMuscles: ['Sırt', 'Omurga'],
          icon: 'GiSpinalCoil',
          instructions: ['Oturarak başla', 'Omurgayı dalga gibi hareket ettir', 'Yavaş ve akıcı']
        },
        {
          id: 'eye_relaxation',
          name: 'Göz Dinlendirme',
          description: 'Göz kaslarını dinlendirme',
          type: 'timed',
          duration: 30,
          targetMuscles: ['Göz', 'Yüz'],
          icon: 'GiEyeball',
          instructions: ['Gözleri kapat', 'Avuç içlerini gözlere koy', 'Karanlıkta dinlen']
        },
        {
          id: 'mindful_breathing',
          name: 'Bilinçli Nefes',
          description: 'Nefese odaklanma meditasyonu',
          type: 'timed',
          duration: 90,
          targetMuscles: ['Zihin', 'Rahatlama'],
          icon: 'GiMeditation',
          instructions: ['Sadece nefesine odaklan', 'Düşünceleri gözlemle', 'Yargılamadan izle']
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
  ,
    {
      id: 'medium_3',
      name: 'Fonksiyonel Hareket',
      difficulty: 'Orta',
      duration: '28 dakika',
      description: 'Günlük yaşamda kullanılan fonksiyonel hareketler',
      exercises: [
        {
          id: 'squat_to_press',
          name: 'Squat ve Kol Kaldırma',
          description: 'Squat sonrası kolları yukarı kaldırma',
          type: 'reps',
          reps: 12,
          targetMuscles: ['Bacak', 'Omuz', 'Core'],
          icon: 'GiMuscleUp',
          instructions: ['Squat yap', 'Kalkarken kolları yukarı kaldır', 'Kontrollü hareket']
        },
        {
          id: 'reverse_lunge_twist',
          name: 'Geriye Lunge ve Çevirme',
          description: 'Geriye lunge ile bel çevirme',
          type: 'reps',
          reps: 10,
          targetMuscles: ['Bacak', 'Core', 'Denge'],
          icon: 'GiTwister',
          instructions: ['Geriye adım at', 'Beli çevir', 'Denge koru']
        },
        {
          id: 'bear_crawl_short',
          name: 'Kısa Ayı Yürüyüşü',
          description: 'Kısa mesafe ayı yürüyüşü',
          type: 'timed',
          duration: 30,
          targetMuscles: ['Tüm vücut', 'Core'],
          icon: 'GiBearHead',
          instructions: ['Dört ayak üzerine çık', 'İleri geri hareket et', 'Core sıkı tut']
        },
        {
          id: 'single_leg_deadlift',
          name: 'Tek Bacak Deadlift',
          description: 'Tek bacakla öne eğilme',
          type: 'reps',
          reps: 8,
          targetMuscles: ['Arka bacak', 'Kalça', 'Denge'],
          icon: 'GiLeg',
          instructions: ['Tek ayak üzerinde dur', 'Öne eğil', 'Arka bacağı kaldır']
        },
        {
          id: 'plank_up_down',
          name: 'Plank Yukarı Aşağı',
          description: 'Plank pozisyonunda yukarı aşağı',
          type: 'reps',
          reps: 8,
          targetMuscles: ['Core', 'Kol', 'Omuz'],
          icon: 'GiAbdominalArmor',
          instructions: ['Plank pozisyonunda', 'Ellere çık', 'Ön kollara in']
        },
        {
          id: 'lateral_lunge',
          name: 'Yana Lunge',
          description: 'Yana doğru lunge hareketi',
          type: 'reps',
          reps: 10,
          targetMuscles: ['Bacak', 'Kalça', 'İç bacak'],
          icon: 'GiLeg',
          instructions: ['Yana geniş adım at', 'Bir bacağa çök', 'Diğer bacak düz']
        },
        {
          id: 'inchworm',
          name: 'Tırtıl Hareketi',
          description: 'Tırtıl gibi ilerleme hareketi',
          type: 'reps',
          reps: 6,
          targetMuscles: ['Tüm vücut', 'Esneklik'],
          icon: 'GiWorm',
          instructions: ['Öne eğil', 'Ellerle ilerle', 'Plank pozisyonuna gel']
        },
        {
          id: 'curtsy_lunge',
          name: 'Reverans Lunge',
          description: 'Çapraz geriye lunge',
          type: 'reps',
          reps: 10,
          targetMuscles: ['Bacak', 'Kalça', 'Denge'],
          icon: 'GiLeg',
          instructions: ['Çapraz geriye adım at', 'Reverans pozisyonu', 'Alternatif hareket']
        },
        {
          id: 'bird_dog',
          name: 'Kuş Köpek',
          description: 'Karşılıklı kol bacak kaldırma',
          type: 'reps',
          reps: 8,
          targetMuscles: ['Core', 'Sırt', 'Denge'],
          icon: 'GiBirdHouse',
          instructions: ['Dört ayak üzerine çök', 'Karşı kol ve bacağı kaldır', 'Denge koru']
        }
      ]
    },
    {
      id: 'medium_4',
      name: 'Kardiyo Kuvvet',
      difficulty: 'Orta',
      duration: '32 dakika',
      description: 'Kardiyo ve kuvvet kombinasyonu',
      exercises: [
        {
          id: 'squat_jump_medium',
          name: 'Orta Squat Jump',
          description: 'Kontrollü squat jump',
          type: 'reps',
          reps: 10,
          targetMuscles: ['Bacak', 'Kardiyo'],
          icon: 'GiJumpAcross',
          instructions: ['Squat yap', 'Kontrollü zıpla', 'Yumuşak iniş']
        },
        {
          id: 'pushup_knee',
          name: 'Dizüstü Şınav',
          description: 'Dizler yerde şınav',
          type: 'reps',
          reps: 12,
          targetMuscles: ['Göğüs', 'Kol'],
          icon: 'GiMuscleUp',
          instructions: ['Dizler yerde', 'Tam şınav hareketi', 'Kontrollü in-çık']
        },
        {
          id: 'alternating_lunge',
          name: 'Alternatif Lunge',
          description: 'Sağ sol lunge değişimi',
          type: 'reps',
          reps: 16,
          targetMuscles: ['Bacak', 'Kalça'],
          icon: 'GiLeg',
          instructions: ['Sağa lunge', 'Merkeze dön', 'Sola lunge']
        },
        {
          id: 'modified_mountain_climber',
          name: 'Orta Mountain Climber',
          description: 'Orta tempo mountain climber',
          type: 'timed',
          duration: 30,
          targetMuscles: ['Core', 'Kardiyo'],
          icon: 'GiMountainClimbing',
          instructions: ['Plank pozisyonunda', 'Orta tempoda', 'Kontrollü hareket']
        },
        {
          id: 'side_plank_knee',
          name: 'Dizüstü Yan Plank',
          description: 'Dizler yerde yan plank',
          type: 'timed',
          duration: 20,
          targetMuscles: ['Yan karın', 'Core'],
          icon: 'GiAbdominalArmor',
          instructions: ['Yana yat', 'Dizler yerde', 'Vücudu kaldır']
        },
        {
          id: 'step_up_knee',
          name: 'Diz Kaldırmalı Step',
          description: 'Step up ile diz kaldırma',
          type: 'reps',
          reps: 12,
          targetMuscles: ['Bacak', 'Denge'],
          icon: 'GiStairs',
          instructions: ['Basamağa çık', 'Dizi yukarı kaldır', 'Kontrollü in']
        },
        {
          id: 'russian_twist_medium',
          name: 'Orta Russian Twist',
          description: 'Ayaklar yerde russian twist',
          type: 'reps',
          reps: 20,
          targetMuscles: ['Yan karın', 'Core'],
          icon: 'GiTwister',
          instructions: ['Otur', 'Ayaklar yerde', 'Gövdeyi sağa sola çevir']
        },
        {
          id: 'reverse_fly',
          name: 'Ters Kol Açma',
          description: 'Kolları geriye açma hareketi',
          type: 'reps',
          reps: 12,
          targetMuscles: ['Sırt', 'Omuz'],
          icon: 'GiArm',
          instructions: ['Öne eğil', 'Kolları yana aç', 'Kürek kemiklerini sık']
        },
        {
          id: 'standing_oblique_crunch',
          name: 'Ayakta Yan Karın',
          description: 'Ayakta yan karın hareketi',
          type: 'reps',
          reps: 12,
          targetMuscles: ['Yan karın'],
          icon: 'GiAbdominalArmor',
          instructions: ['Ayakta dur', 'Diz ve dirseği birleştir', 'Yan karını sık']
        }
      ]
    }    
,
    {
      id: 'hard_3',
      name: 'Atletik Performans',
      difficulty: 'Zor',
      duration: '45 dakika',
      description: 'Atletik performans geliştirici antrenman',
      exercises: [
        {
          id: 'plyometric_pushup',
          name: 'Plyometrik Şınav',
          description: 'Patlayıcı şınav hareketi',
          type: 'reps',
          reps: 8,
          targetMuscles: ['Göğüs', 'Güç', 'Patlayıcılık'],
          icon: 'GiMuscleUp',
          instructions: ['Şınav pozisyonunda', 'Patlayıcı şekilde it', 'Eller havada kalacak']
        },
        {
          id: 'single_leg_burpee',
          name: 'Tek Bacak Burpee',
          description: 'Tek bacakla burpee hareketi',
          type: 'reps',
          reps: 6,
          targetMuscles: ['Tüm vücut', 'Denge', 'Güç'],
          icon: 'GiJumpAcross',
          instructions: ['Tek bacakla squat', 'Plank pozisyonuna geç', 'Tek bacakla zıpla']
        },
        {
          id: 'pistol_squat_full',
          name: 'Tam Pistol Squat',
          description: 'Tek bacak tam squat',
          type: 'reps',
          reps: 5,
          targetMuscles: ['Bacak', 'Denge', 'Güç'],
          icon: 'GiLeg',
          instructions: ['Tek bacak uzat', 'Tam squat yap', 'Güçlü şekilde kalk']
        },
        {
          id: 'handstand_hold',
          name: 'Handstand Tutma',
          description: 'El üzerinde durma',
          type: 'timed',
          duration: 30,
          targetMuscles: ['Omuz', 'Core', 'Denge'],
          icon: 'GiMuscleUp',
          instructions: ['Duvara yaslan', 'El üzerinde dur', 'Denge koru']
        },
        {
          id: 'archer_squat',
          name: 'Okçu Squat',
          description: 'Tek bacağa yüklenen squat',
          type: 'reps',
          reps: 6,
          targetMuscles: ['Bacak', 'Kalça', 'Denge'],
          icon: 'GiLeg',
          instructions: ['Geniş pozisyon al', 'Bir bacağa yüklen', 'Diğer bacak düz']
        },
        {
          id: 'one_arm_pushup_prep',
          name: 'Tek Kol Şınav Hazırlık',
          description: 'Tek kol şınav hazırlığı',
          type: 'reps',
          reps: 4,
          targetMuscles: ['Göğüs', 'Kol', 'Core'],
          icon: 'GiMuscleUp',
          instructions: ['Geniş pozisyon', 'Bir kola yüklen', 'Maksimum güç']
        },
        {
          id: 'dragon_squat',
          name: 'Ejder Squat',
          description: 'İleri seviye squat varyasyonu',
          type: 'reps',
          reps: 4,
          targetMuscles: ['Bacak', 'Esneklik', 'Güç'],
          icon: 'GiDragonHead',
          instructions: ['Çok geniş pozisyon', 'Bir bacağa tam çök', 'Diğer bacak düz uzat']
        },
        {
          id: 'human_flag_hold',
          name: 'İnsan Bayrağı',
          description: 'Yan plank ileri seviye',
          type: 'timed',
          duration: 10,
          targetMuscles: ['Core', 'Kol', 'Tüm vücut'],
          icon: 'GiAbdominalArmor',
          instructions: ['Dikey çubuk tut', 'Vücudu yatay tut', 'Maksimum gerginlik']
        },
        {
          id: 'muscle_up_progression',
          name: 'Muscle-Up Progresyon',
          description: 'Muscle-up hareketi progresyonu',
          type: 'reps',
          reps: 3,
          targetMuscles: ['Sırt', 'Göğüs', 'Kol'],
          icon: 'GiMuscleUp',
          instructions: ['Çekme hareketi', 'Geçiş fazı', 'İtme hareketi']
        },
        {
          id: 'advanced_shrimp_squat',
          name: 'İleri Karides Squat',
          description: 'İleri seviye tek bacak squat',
          type: 'reps',
          reps: 3,
          targetMuscles: ['Bacak', 'Esneklik', 'Denge'],
          icon: 'GiLeg',
          instructions: ['Arka bacağı tut', 'Tam squat yap', 'Maksimum esneklik']
        }
      ]
    },
    {
      id: 'hard_4',
      name: 'Ekstrem Dayanıklılık',
      difficulty: 'Zor',
      duration: '50 dakika',
      description: 'Maksimum dayanıklılık ve mental güç',
      exercises: [
        {
          id: 'death_crawl',
          name: 'Ölüm Sürünmesi',
          description: 'Uzun mesafe ayı yürüyüşü',
          type: 'timed',
          duration: 90,
          targetMuscles: ['Tüm vücut', 'Dayanıklılık'],
          icon: 'GiBearHead',
          instructions: ['Dört ayak pozisyonu', 'Sürekli hareket et', 'Mental güç']
        },
        {
          id: 'tabata_burpee',
          name: 'Tabata Burpee',
          description: '20 saniye maksimum burpee',
          type: 'timed',
          duration: 20,
          targetMuscles: ['Tüm vücut', 'Kardiyo'],
          icon: 'GiJumpAcross',
          instructions: ['20 saniye maksimum hız', 'Mükemmel form koru', 'Sınırlarını zorla']
        },
        {
          id: 'iron_cross_hold',
          name: 'Demir Haç Tutma',
          description: 'Kollar yanlarda T pozisyonu',
          type: 'timed',
          duration: 30,
          targetMuscles: ['Omuz', 'Göğüs', 'Core'],
          icon: 'GiCrossedSwords',
          instructions: ['T pozisyonu al', 'Kolları yanlarda tut', 'Maksimum gerginlik']
        },
        {
          id: 'one_leg_wall_sit',
          name: 'Tek Bacak Duvar Oturma',
          description: 'Tek bacakla duvar oturma',
          type: 'timed',
          duration: 30,
          targetMuscles: ['Bacak', 'Dayanıklılık'],
          icon: 'GiLeg',
          instructions: ['Duvara yaslan', 'Tek bacakla otur', 'Diğer bacağı kaldır']
        },
        {
          id: 'typewriter_pullup',
          name: 'Daktilo Çekme',
          description: 'Sağa sola çekme hareketi',
          type: 'reps',
          reps: 6,
          targetMuscles: ['Sırt', 'Kol', 'Core'],
          icon: 'GiMuscleUp',
          instructions: ['Çek', 'Sağa kay', 'Sola kay', 'İn']
        },
        {
          id: 'planche_lean_advanced',
          name: 'İleri Planche Eğilme',
          description: 'Maksimum planche eğilme',
          type: 'timed',
          duration: 45,
          targetMuscles: ['Omuz', 'Core', 'Bilek'],
          icon: 'GiMuscleUp',
          instructions: ['Maksimum öne eğil', 'Ayak parmakları kalkacak', 'Sınırda kal']
        },
        {
          id: 'human_flag_negative',
          name: 'İnsan Bayrağı Negatif',
          description: 'Kontrollü inme hareketi',
          type: 'reps',
          reps: 3,
          targetMuscles: ['Core', 'Kol', 'Kontrol'],
          icon: 'GiAbdominalArmor',
          instructions: ['Yukarı pozisyondan başla', 'Çok yavaş in', 'Kontrol et']
        },
        {
          id: 'archer_pushup_advanced',
          name: 'İleri Okçu Şınavı',
          description: 'Tek kola maksimum yükleme',
          type: 'reps',
          reps: 5,
          targetMuscles: ['Göğüs', 'Kol', 'Asimetrik güç'],
          icon: 'GiMuscleUp',
          instructions: ['Maksimum genişlik', 'Tek kola tam yüklen', 'Diğer kol düz']
        },
        {
          id: 'front_lever_tuck',
          name: 'Ön Kaldıraç Büzülme',
          description: 'Ön kaldıraç pozisyonu',
          type: 'timed',
          duration: 15,
          targetMuscles: ['Sırt', 'Core', 'Kol'],
          icon: 'GiMuscleUp',
          instructions: ['Asılı pozisyondan', 'Vücudu yatay tut', 'Dizler göğüste']
        },
        {
          id: 'ultimate_plank',
          name: 'Ultimate Plank',
          description: 'Maksimum süre plank',
          type: 'timed',
          duration: 120,
          targetMuscles: ['Core', 'Mental güç'],
          icon: 'GiAbdominalArmor',
          instructions: ['Mükemmel form', 'Mental odaklan', 'Sınırlarını aş']
        }
      ]
    }