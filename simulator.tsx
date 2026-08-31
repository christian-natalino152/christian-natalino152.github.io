import React, { useState, useEffect } from 'react';
import { CheckCircle2, Circle, Play, ArrowRight, Lightbulb, Beaker, Droplets, Zap, Wind, RotateCcw, ShieldCheck } from 'lucide-react';

const chapters = [
  {
    title: "Tahap 1: Validitas & Persiapan Wadah Air",
    theory: "A. Apakah Terbukti Efektif?\n\nJawaban singkatnya adalah Ya, terbukti secara ilmiah dan taktis. Penggunaan alga untuk memfilter polusi udara bukan sekadar teori di atas kertas, melainkan telah diimplementasikan dalam skala urban. Contoh paling nyata adalah proyek Liquid3 di Belgrade, Serbia.\n\nSistem Liquid3, yang pada dasarnya adalah Fotobioreaktor Mikroalga bervolume 600 liter, terbukti mampu menggantikan peran dua pohon dewasa berusia 10 tahun atau 200 meter persegi hamparan rumput dalam hal kapasitas penyerapan Karbon Dioksida (CO2).\n\n* FAKTA KRITIS: Pohon biasa membutuhkan energi besar dan waktu bertahun-tahun untuk menumbuhkan kayu, akar, dan cabang sebelum daunnya bisa optimal memfilter udara. Alga memotong birokrasi biologis ini; mereka tidak memiliki akar atau batang.",
    practice: "B. Praktik: Persiapan Wadah & Air\n\nWadah adalah 'kaca pembesar' untuk menangkap cahaya, dan air adalah 'atmosfer' tempat alga hidup.\n1. Pemilihan Wadah:\n   - Tabung Kaca Silinder (Ideal): Air berputar rata, transmisi cahaya 100%.\n   - Akuarium Kotak (Menengah): Menciptakan dead zone di sudut 90 derajat.\n   - Botol Plastik PET (Darurat): Mudah tergores, menguning, menghalangi cahaya.\n2. Pemilihan Air:\n   - Air Minum RO (Aman): Bebas klorin, pH netral.\n   - Air Ledeng/PAM (Butuh Perlakuan): Mengandung klorin pembunuh alga. Wajib diendapkan 24 jam.\n3. Proses Sterilisasi (Peringatan Keras!):\n   - JANGAN gunakan sabun cuci piring. Residu surfaktan akan merobek membran sel mikroalga!",
    reqs: [
      "Wadah sudah 100% bersih tanpa menggunakan sabun cuci piring.",
      "Air yang masuk ke wadah dipastikan bebas klorin/kaporit.",
      "Suhu air berada di suhu ruangan (tidak panas/dingin)."
    ],
    actionLabel: "Tuang Air Bebas Klorin ke Wadah"
  },
  {
    title: "Tahap 2: Anatomi Biologis & Instalasi Aerasi",
    theory: "A. Mengapa Begitu? (Analisis Faktor Anatomi)\n\nEfektivitas ekstrem alga didorong oleh dua faktor biologis utama:\n1. Rasio Luas Permukaan: Karena bersel tunggal dan melayang, 100% permukaan tubuh bersentuhan langsung dengan polusi. Tidak ada sel yang 'bersembunyi'.\n2. Biosorpsi Ekstraseluler: Dinding sel alga memproduksi eksopolisakarida (EPS) bermuatan negatif (Lendir). Saat debu PM2.5 dan logam berat menyentuhnya, partikel beracun itu langsung terikat seperti magnet.",
    practice: "B. Praktik: Pemasangan Aerasi\n\nTahap mekanis ini adalah 'paru-paru' sistem yang menarik udara ruangan ke air.\n1. Pemilihan Pompa: Pompa 1 lubang (senyap tapi hisapan lemah), Pompa 2 lubang (kuat tapi bising).\n2. Batu Aerasi (Air Stone): WAJIB menggunakan batu aerasi halus untuk memecah udara menjadi microbubbles agar gas beracun (CO2) larut optimal ke air.\n3. Keamanan Jalur Udara (Fatal): WAJIB pasang Check Valve (Katup 1 Arah). Jika listrik padam, efek siphon akan menarik air alga membanjiri lantai rumah Anda!",
    reqs: [
      "Pompa menyala, gelembung keluar kecil-kecil (microbubbles) merata.",
      "Arus memutar seluruh volume air tanpa ada titik air diam.",
      "Posisi pompa aman (lebih tinggi dari air ATAU dipasang check valve)."
    ],
    actionLabel: "Nyalakan Aerator (Mesin Pompa)"
  },
  {
    title: "Tahap 3: Siklus Biokimia & Starter Alga",
    theory: "A. Korelasi Proses Biokimia\n\nUrutan konversi: Udara kotor ditarik pompa -> larut di air (Aerasi) -> berdifusi menembus dinding sel alga -> klorofil memecah molekul air melepaskan Oksigen murni -> Karbon dari CO2 diikat menjadi Glukosa (Siklus Calvin) agar alga berkembang biak.",
    practice: "B. Praktik: Memasukkan Bibit & Nutrisi\n\n1. Jenis Bibit: Gunakan Chlorella vulgaris (rakus memakan VOC & CO2). JANGAN gunakan bubuk/kapsul apotek karena itu alga mati yang akan membusuk.\n2. Nutrisi: Gunakan Medium Walne atau AB Mix (setengah dosis). JANGAN pakai NPK karena memicu ammonia spike (racun mematikan).\n3. Aklimatisasi Suhu: Apungkan botol bibit 15 menit di wadah agar suhu sama sebelum dituang.",
    reqs: [
      "Memahami bahwa oksigen berasal dari pemecahan Air (H2O), bukan CO2.",
      "Menggunakan bibit alga CAIR HIDUP, bukan bubuk apotek.",
      "Telah melakukan aklimatisasi suhu agar bibit tidak temperature shock."
    ],
    actionLabel: "Tuang Starter Kultur & Pupuk Cair"
  },
  {
    title: "Tahap 4: Tinjauan Kritis & Motor Fotosintesis",
    theory: "A. Tinjauan Kritis (Alga vs HEPA Filter)\n\nKelemahan: Paradoks energi (jejak karbon listrik aerator) dan beban pemeliharaan rutin.\nKeunggulan: Circular Economy. HEPA menumpuk sampah filter kotor. Alga MENGUBAH udara kotor menjadi Oksigen dan Biomassa (pupuk). Konversi, bukan sekadar memenjarakan debu.",
    practice: "B. Praktik: Pencahayaan (Motor Utama)\n\nTanpa cahaya intens, alga tidak punya energi memecah gas beracun.\n1. Sumber: Lampu LED Akuarium (Ideal). Sinar Matahari (Bahaya jika terik, suhu >32 derajat membuat alga kolaps mati mendadak).\n2. Durasi (Siklus Siang-Malam): Alga butuh istirahat respirasi. Wajib nyala 12-16 jam, lalu matikan 8 jam. Jangan disinar 24 jam penuh (Fotoinhibisi).",
    reqs: [
      "Memahami perbedaan konversi biologis (Alga) vs penahanan fisik (HEPA).",
      "Cahaya lampu mampu menembus cairan, ada gelembung O2 di dinding kaca.",
      "Tidak menjemur wadah terik (Suhu dijaga di bawah 32 derajat Celcius)."
    ],
    actionLabel: "Nyalakan Lampu Fotosintesis"
  },
  {
    title: "Tahap 5: Replikasi & Manajemen Panen",
    theory: "A. Kesimpulan Replikasi\n\nProses rumit ini dapat direplikasi awam jika disiplin pada 3 SOP Ekologis:\n1. Sterilitas (Nol klorin, Nol sabun).\n2. Mekanis (Hancurkan dead zone dengan diffuser).\n3. Fotonik (Manajemen cahaya dan kepadatan panen).",
    practice: "B. Praktik: Panen & Rincian Biaya (Rp100rb - Rp287rb)\n\nManajemen Kepadatan: Setelah 2 minggu, air menjadi cat hijau pekat. Cahaya terblokir!\nTindakan: Kuras 1/3 volume air tiap 1-2 minggu (gunakan sebagai pupuk tanaman super). Ganti dengan air bebas klorin baru.\n\n[Rincian Biaya]\n- Wadah: Rp0-50k | Pompa Amara: Rp20-55k | Batu Aerasi: Rp3-10k\n- Selang & Check Valve: Rp5-12k | Lampu LED: Rp12-40k\n- Timer: Rp30-45k | Bibit Chlorella: Rp18-35k | Pupuk Walne: Rp12-35k",
    reqs: [
      "Saya mengerti tugas perakit hanyalah menjaga 3 SOP Ekologis.",
      "Sistem wajib dipanen rutin agar alga tidak berebut cahaya dan mati.",
      "Saya telah mengulas dan siap mensimulasikan perakitan utuh."
    ],
    actionLabel: "Simulasikan Panen (Kuras & Isi Ulang)"
  }
];

const BioreactorVisual = ({ step, actionDone, isAnimating, harvestPhase }) => {
  let waterLevel = '0%';
  const colorCyan = '#67e8f9';
  const colorGreenLight = '#4ade80';
  const colorGreenMid = '#16a34a';
  const colorGreenDense = '#14532d';
  
  let waterColor = colorCyan;
  let showPump = false;
  let showBubbles = false;
  let showLight = false;
  let lightOn = false;

  // Visual state mapping based on chapters
  if (step === 0 && actionDone) {
    waterLevel = '85%';
  } else if (step === 1) {
    waterLevel = '85%';
    showPump = true;
    if (actionDone) showBubbles = true;
  } else if (step === 2) {
    waterLevel = '85%';
    showPump = true;
    showBubbles = true;
    waterColor = actionDone ? colorGreenLight : colorCyan;
  } else if (step === 3) {
    waterLevel = '85%';
    showPump = true;
    showBubbles = true;
    showLight = true;
    if (actionDone) {
      lightOn = true;
      waterColor = colorGreenMid;
    } else {
      waterColor = colorGreenLight;
    }
  } else if (step >= 4) {
    showPump = true;
    showBubbles = true;
    showLight = true;
    lightOn = true;
    
    if (step === 4) {
      if (!actionDone && !isAnimating) {
        waterLevel = '85%';
        waterColor = colorGreenDense; 
      } else if (isAnimating && harvestPhase === 'draining') {
        waterLevel = '35%';
        waterColor = colorGreenDense; 
      } else if (isAnimating && harvestPhase === 'refilling') {
        waterLevel = '85%';
        waterColor = colorGreenLight; 
      } else if (actionDone) {
        waterLevel = '85%';
        waterColor = colorGreenLight; 
      }
    } else if (step === 5) {
       waterLevel = '85%';
       waterColor = colorGreenLight; 
    }
  }

  return (
    <div className="relative flex flex-col items-center justify-center w-full h-full p-4 overflow-hidden">
      <style>{`
        @keyframes rise1 {
          0% { top: 100%; transform: scale(0.3) translateX(0px); opacity: 0; }
          10% { opacity: 0.8; }
          90% { opacity: 0.5; }
          100% { top: -10%; transform: scale(1.2) translateX(15px); opacity: 0; }
        }
        @keyframes rise2 {
          0% { top: 100%; transform: scale(0.5) translateX(0px); opacity: 0; }
          10% { opacity: 0.7; }
          90% { opacity: 0.4; }
          100% { top: -10%; transform: scale(1.5) translateX(-15px); opacity: 0; }
        }
        .bubble-anim {
          position: absolute;
          background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.9), rgba(255,255,255,0.3));
          border-radius: 50%;
        }
        .ray-polygon {
          clip-path: polygon(15% 0, 85% 0, 100% 100%, 0% 100%);
          background: linear-gradient(to bottom, rgba(253,224,71,0.35), rgba(253,224,71,0.02));
          animation: pulseRay 3s infinite alternate;
        }
        @keyframes pulseRay {
          0% { opacity: 0.6; }
          100% { opacity: 1; }
        }
      `}</style>

      {/* Lighting System */}
      <div className="h-20 w-full flex justify-center relative">
        {showLight && (
          <div className={`w-36 h-6 bg-slate-800 border-2 border-slate-700 rounded-b-xl flex items-center justify-center relative z-30 transition-all ${lightOn ? 'shadow-[0_10px_30px_rgba(253,224,71,0.2)]' : ''}`}>
             <Zap className={`w-4 h-4 ${lightOn ? 'text-yellow-400 animate-pulse' : 'text-slate-500'}`} fill={lightOn ? 'currentColor' : 'none'} />
             {lightOn && (
               <div className="ray-polygon absolute top-6 left-1/2 -translate-x-1/2 w-64 h-80 z-10 pointer-events-none"></div>
             )}
          </div>
        )}
      </div>

      {/* Main Bioreactor Area */}
      <div className="flex items-end justify-center gap-6 relative z-20 mt-2">
        {/* The Tank */}
        <div className="relative w-48 h-72 rounded-b-[2.5rem] rounded-t-md border-[5px] border-t-0 border-white/20 shadow-[0_20px_40px_rgba(0,0,0,0.6)] bg-slate-900/40 backdrop-blur-md overflow-hidden z-20 flex flex-col justify-end">
          {/* Glass Reflections */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent z-20 pointer-events-none rounded-b-[2.2rem]"></div>
          <div className="absolute top-0 left-3 w-4 h-full bg-white/10 blur-sm rounded-full z-20 pointer-events-none transform -skew-x-6"></div>
          
          {/* Water Volume */}
          <div 
            className="w-full relative z-0 transition-all ease-in-out flex flex-col justify-end overflow-hidden"
            style={{ 
              height: waterLevel, 
              backgroundColor: waterColor,
              transitionDuration: harvestPhase === 'draining' ? '2000ms' : '1000ms'
            }}
          >
            {/* Surface Line */}
            <div className="w-full h-1.5 bg-white/40 absolute top-0 z-10 blur-[1px]"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 pointer-events-none z-10"></div>
            
            {/* Microbubbles Animation */}
            {showBubbles && (
              <div className="absolute inset-0 z-0">
                {[...Array(25)].map((_, i) => (
                  <div 
                    key={i}
                    className="bubble-anim"
                    style={{
                      left: `${Math.random() * 80 + 10}%`,
                      width: `${Math.random() * 5 + 3}px`,
                      height: `${Math.random() * 5 + 3}px`,
                      animationDuration: `${Math.random() * 1.5 + 1}s`,
                      animationDelay: `${Math.random() * 2}s`,
                      animationName: i % 2 === 0 ? 'rise1' : 'rise2',
                      animationTimingFunction: 'linear',
                      animationIterationCount: 'infinite'
                    }}
                  ></div>
                ))}
              </div>
            )}
          </div>
          
          {/* Internal Aeration Tube */}
          {showPump && (
            <div className="absolute top-0 left-1/2 w-2 h-full bg-slate-300/30 -translate-x-1/2 z-10 pointer-events-none">
              {/* Air Stone */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-7 h-5 bg-slate-600 rounded-full border border-slate-500 shadow-inner"></div>
            </div>
          )}
        </div>
        
        {/* External Aerator Pump */}
        <div className="w-16 h-14 relative flex-shrink-0 mb-3">
          {showPump && (
            <>
              <div className="w-full h-full bg-slate-800 rounded-xl border-2 border-slate-700 shadow-[0_10px_20px_rgba(0,0,0,0.5)] flex items-center justify-center relative z-20 overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                 <Wind className={`w-6 h-6 ${showBubbles ? 'text-cyan-400 animate-pulse' : 'text-slate-500'}`} />
              </div>
              {/* External Tube SVG Connection */}
              <svg className="absolute bottom-6 -left-[3.5rem] w-16 h-32 pointer-events-none z-10" style={{overflow:'visible'}}>
                 <path d="M 0 35 C -20 35, -35 10, -35 -60" fill="none" stroke="#64748b" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </>
          )}
        </div>
      </div>

      {/* Base / Table top */}
      <div className="w-80 h-3 bg-slate-800 border-t border-slate-700 rounded-full mt-0 shadow-2xl relative z-10"></div>
    </div>
  );
};

export default function App() {
  const [currentStep, setCurrentStep] = useState(-1);
  const [verifiedChecks, setVerifiedChecks] = useState([]);
  const [actionDone, setActionDone] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [harvestPhase, setHarvestPhase] = useState('none'); // 'none', 'draining', 'refilling'

  useEffect(() => {
    if (currentStep >= 0 && currentStep < chapters.length) {
      setVerifiedChecks(new Array(chapters[currentStep].reqs.length).fill(false));
      setActionDone(false);
      setHarvestPhase('none');
    }
  }, [currentStep]);

  const allVerified = verifiedChecks.length > 0 && verifiedChecks.every(v => v);

  const handleVerify = (idx) => {
    if (actionDone || isAnimating) return;
    const newVerified = [...verifiedChecks];
    newVerified[idx] = !newVerified[idx];
    setVerifiedChecks(newVerified);
  };

  const handleAction = () => {
    setIsAnimating(true);
    
    if (currentStep === 4) {
      // Special harvest simulation timing
      setHarvestPhase('draining');
      setTimeout(() => {
        setHarvestPhase('refilling');
        setTimeout(() => {
          setHarvestPhase('none');
          setIsAnimating(false);
          setActionDone(true);
        }, 1500);
      }, 2000);
    } else {
      // Normal execution timing
      setTimeout(() => {
        setIsAnimating(false);
        setActionDone(true);
      }, 1500);
    }
  };

  const handleNextStep = () => {
    setCurrentStep(prev => prev + 1);
  };

  const resetApp = () => {
    setCurrentStep(-1);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col">
      {/* Header */}
      <header className="bg-teal-900 border-b border-teal-700 p-4 shadow-lg text-center shrink-0 z-50">
        <h1 className="text-xl md:text-2xl font-black tracking-widest text-teal-100 drop-shadow-md">
          MASTERCLASS & SIMULATOR BIOREAKTOR
        </h1>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col lg:flex-row p-4 md:p-6 lg:p-8 gap-6 w-full max-w-[1400px] mx-auto h-full">
        
        {/* State: INTRO */}
        {currentStep === -1 && (
          <div className="w-full flex-1 bg-slate-900 rounded-2xl shadow-2xl border border-slate-800 flex items-center justify-center p-8 overflow-hidden relative">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-900/40 via-slate-900 to-slate-950 z-0"></div>
            <div className="z-10 flex flex-col items-center text-center max-w-3xl space-y-8">
              <div className="w-24 h-24 bg-teal-500/20 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(20,184,166,0.3)] border border-teal-500/30 animate-pulse">
                <Droplets className="w-12 h-12 text-teal-400" />
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
                Selamat Datang di <br/><span className="text-teal-400">Simulator Visual</span>
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed bg-slate-950/50 p-6 rounded-xl border border-slate-800 backdrop-blur-sm">
                Aplikasi interaktif ini mewajibkan Anda untuk: <br className="hidden md:block"/>
                <span className="font-bold text-white">1.</span> Membaca Teori & Praktik.<br/>
                <span className="font-bold text-white">2.</span> Mengonfirmasi Kriteria Minimum (Syarat Lulus).<br/>
                <span className="font-bold text-white">3.</span> Mengeksekusi Tindakan Simulasi.
              </p>
              <button 
                onClick={() => setCurrentStep(0)}
                className="px-10 py-4 bg-teal-600 hover:bg-teal-500 text-white font-bold rounded-xl text-lg shadow-[0_0_20px_rgba(13,148,136,0.4)] hover:shadow-[0_0_30px_rgba(13,148,136,0.6)] transition-all flex items-center gap-3 transform hover:-translate-y-1"
              >
                Mulai Simulasi <Play className="w-5 h-5 fill-current" />
              </button>
            </div>
          </div>
        )}

        {/* State: CHAPTERS 0-4 or OUTRO 5 */}
        {currentStep >= 0 && (
          <>
            {/* Left Panel: Content & Controls */}
            <div className="w-full lg:w-[60%] xl:w-[65%] flex flex-col bg-slate-900 rounded-2xl shadow-2xl border border-slate-800 overflow-hidden relative">
              
              {currentStep === 5 ? (
                // SUCCESS / OUTRO SCREEN
                <div className="flex-1 flex flex-col items-center justify-center p-8 md:p-12 text-center relative z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900/30 via-slate-900 to-slate-900">
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                     <ShieldCheck className="w-10 h-10 text-green-400" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
                    SELAMAT! <br className="md:hidden"/><span className="text-green-400">PERAKITAN SELESAI!</span>
                  </h2>
                  <div className="bg-slate-950/60 border border-green-900/50 p-6 rounded-xl mb-8">
                     <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
                       Anda telah menyelesaikan studi kritis, memenuhi SOP sterilitas ekologis, dan berhasil merakit mesin fotobioreaktor pemurni udara mandiri.
                     </p>
                  </div>
                  <p className="text-sm text-slate-500 mb-8 font-mono">
                    Simulator Interaktif GUI © 2026. Berbasis Data Liquid3.
                  </p>
                  <button 
                    onClick={resetApp}
                    className="px-8 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-600 text-white font-bold rounded-xl transition-all flex items-center gap-2"
                  >
                    <RotateCcw className="w-5 h-5" /> Mulai Ulang Simulasi
                  </button>
                </div>
              ) : (
                // CHAPTER SCREEN
                <>
                  {/* Scrollable Text Area */}
                  <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-teal-400 border-b border-slate-800 pb-4">
                      {chapters[currentStep].title}
                    </h2>
                    
                    <div className="bg-slate-800/50 p-5 md:p-6 rounded-xl border border-slate-700/50 shadow-inner">
                      <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                        <Lightbulb className="w-6 h-6 text-yellow-400"/> Teori
                      </h3>
                      <p className="text-slate-300 whitespace-pre-wrap leading-relaxed text-base md:text-lg">
                        {chapters[currentStep].theory}
                      </p>
                    </div>

                    <div className="bg-slate-800/50 p-5 md:p-6 rounded-xl border border-slate-700/50 shadow-inner">
                      <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                        <Beaker className="w-6 h-6 text-cyan-400"/> Praktik
                      </h3>
                      <p className="text-slate-300 whitespace-pre-wrap leading-relaxed text-base md:text-lg font-mono text-sm">
                        {chapters[currentStep].practice}
                      </p>
                    </div>
                  </div>

                  {/* Fixed Action Panel */}
                  <div className="bg-slate-950 p-6 md:p-8 border-t border-slate-800 shrink-0">
                    <h3 className="text-lg font-bold text-yellow-500 mb-4 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" /> TUGAS 1: Verifikasi Pemahaman
                    </h3>
                    <div className="space-y-3 mb-8">
                      {chapters[currentStep].reqs.map((req, idx) => (
                        <label 
                          key={idx} 
                          className={`flex items-start gap-4 p-3 rounded-lg border transition-all cursor-pointer ${
                            verifiedChecks[idx] ? 'bg-teal-900/20 border-teal-700/50' : 'bg-slate-900 border-slate-800 hover:border-slate-600'
                          } ${actionDone || isAnimating ? 'opacity-70 pointer-events-none' : ''}`}
                        >
                          <div className="mt-0.5 shrink-0">
                            {verifiedChecks[idx] ? 
                              <CheckCircle2 className="w-6 h-6 text-teal-400" /> : 
                              <Circle className="w-6 h-6 text-slate-600" />
                            }
                          </div>
                          <span className={`text-sm md:text-base ${verifiedChecks[idx] ? 'text-teal-100 font-medium' : 'text-slate-400'}`}>
                            {req}
                          </span>
                        </label>
                      ))}
                    </div>

                    <h3 className="text-lg font-bold text-yellow-500 mb-4 flex items-center gap-2">
                       <Play className="w-5 h-5" /> TUGAS 2: Eksekusi Praktik
                    </h3>
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 justify-between">
                      <button 
                        onClick={handleAction}
                        disabled={!allVerified || actionDone || isAnimating}
                        className={`w-full sm:w-auto px-6 md:px-8 py-3.5 rounded-xl font-bold flex items-center justify-center gap-3 transition-all duration-300 ${
                          actionDone ? 'bg-slate-800 text-teal-500 border border-teal-900/50 cursor-not-allowed' :
                          !allVerified ? 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700' :
                          'bg-cyan-600 hover:bg-cyan-500 text-white shadow-[0_0_20px_rgba(8,145,178,0.4)]'
                        }`}
                      >
                        {isAnimating ? (
                          <span className="flex items-center gap-3">
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div> 
                            Memproses...
                          </span>
                        ) : actionDone ? (
                          <span className="flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5"/> Aksi Selesai
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            {chapters[currentStep].actionLabel}
                          </span>
                        )}
                      </button>

                      {actionDone && (
                        <button 
                          onClick={handleNextStep}
                          className="w-full sm:w-auto px-6 md:px-8 py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-slate-950 transition-all animate-bounce shadow-[0_0_20px_rgba(34,197,94,0.3)]"
                        >
                          Lanjut Tahap {currentStep + 2} <ArrowRight className="w-5 h-5"/>
                        </button>
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Right Panel: Bioreactor Visualizer */}
            <div className="w-full lg:w-[40%] xl:w-[35%] bg-slate-900 rounded-2xl shadow-2xl border border-slate-800 flex items-center justify-center overflow-hidden min-h-[450px] lg:min-h-0 relative">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-800 to-slate-950 opacity-80 z-0"></div>
               <div className="absolute top-4 left-4 z-10 bg-slate-800/80 px-3 py-1 rounded-full border border-slate-700 text-xs text-slate-400 font-mono flex items-center gap-2 backdrop-blur-sm">
                 <div className={`w-2 h-2 rounded-full ${isAnimating ? 'bg-yellow-400 animate-pulse' : (actionDone || currentStep === 5 ? 'bg-green-500' : 'bg-slate-500')}`}></div>
                 Status: {isAnimating ? 'Memproses' : (actionDone || currentStep === 5 ? 'Stabil' : 'Menunggu Aksi')}
               </div>
               
               <BioreactorVisual 
                 step={currentStep} 
                 actionDone={actionDone} 
                 isAnimating={isAnimating} 
                 harvestPhase={harvestPhase} 
               />
            </div>
          </>
        )}
      </main>
    </div>
  );
}