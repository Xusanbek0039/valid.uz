import React, { useState, useEffect } from 'react';
import { Sun, Moon, Globe, Facebook, MessageCircle } from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [visitorCount] = useState(812);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-[#0B1120]' : 'bg-white'} transition-colors duration-300`}>
      {/* Header */}
      <header className="bg-[#0B1120] border-b border-gray-800">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="/it-park-logo.svg" alt="IT PARK" className="h-8" />
            <span className="text-white text-lg font-semibold">SERTIFIKAT</span>
          </div>
          <div className="flex items-center gap-6 text-white">
            <div className="text-lg font-mono">{formatTime(currentTime)}</div>
            <div className="flex items-center gap-2">
              <span className="opacity-80">Tashrif: {visitorCount}</span>
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-1 rounded-full hover:bg-gray-700 transition-colors"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative h-[300px] bg-gradient-to-b from-gray-800 to-transparent flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-2xl mb-2">O'ZBEKISTON RESPUBLIKASI</h1>
          <h2 className="text-4xl font-bold mb-2">SERTIFIKAT TEKSHIRISH</h2>
          <h3 className="text-xl opacity-80">AXBOROT TIZIMI</h3>
          <div className="w-20 h-1 bg-[#4FFFB0] mx-auto mt-4"></div>
        </div>
      </div>

      {/* Search Section */}
      <div className="container mx-auto px-4 -mt-20">
        <div className="max-w-xl mx-auto bg-[#0F172A] rounded-lg p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <h4 className="text-white text-center text-xl mb-2">SERTIFIKAT TEKSHIRISH</h4>
          <p className="text-gray-400 text-center text-sm mb-4">Sertifikat ID raqamini kiritib tekshiring</p>
          <div className="flex gap-2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Sertifikat ID raqami"
              className="flex-1 bg-[#1E293B] text-white rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4FFFB0]"
            />
            <button className="bg-[#4FFFB0] text-[#0B1120] px-6 py-2 rounded font-medium hover:bg-[#3FDFA0] transition-colors">
              TEKSHIRISH
            </button>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="container mx-auto px-4 mt-20">
        <div className="max-w-4xl mx-auto bg-[#0F172A] rounded-lg p-8">
          <h2 className="text-[#4FFFB0] text-2xl font-bold text-center mb-6">AXBOROT TIZIMI HAQIDA</h2>
          <p className="text-gray-300 text-center mb-12">
            Ushbu axborot tizimi orqali siz IT sohasidagi va kasbiy ta'lim sertifikatlarini tekshirishingiz 
            mumkin. Sertifikat ID raqamini kiritib, uning haqiqiyligini va ma'lumotlarini ko'rishingiz mumkin. 
            Tizim O'zbekiston Respublikasi Raqamli texnologiyalar vazirligi va IT-Park hamkorligida ishlab 
            chiqilgan.
          </p>
          <div className="flex justify-center gap-20">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#4FFFB0] mb-2">10,000+</div>
              <div className="text-gray-400">Sertifikatlar</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#4FFFB0] mb-2">10+</div>
              <div className="text-gray-400">Kurslar</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#4FFFB0] mb-2">24/7</div>
              <div className="text-gray-400">Tekshirish imkoniyati</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 bg-[#0B1120] border-t border-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <img src="/it-park-logo.svg" alt="IT PARK" className="h-12 mb-4" />
              <p className="text-gray-400 text-sm">
                Ta'lim sohasida ko'p yillardan buyon o'z o'rniga ega ta'lim maskani! Zamonaviy kasblar va IT sohasidagi 
                sertifikatlangan o'quv kurslari.
              </p>
              <div className="flex gap-4 mt-4">
                <MessageCircle className="w-5 h-5 text-gray-400 hover:text-[#4FFFB0] transition-colors" />
                <Facebook className="w-5 h-5 text-gray-400 hover:text-[#4FFFB0] transition-colors" />
                <Globe className="w-5 h-5 text-gray-400 hover:text-[#4FFFB0] transition-colors" />
              </div>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">KURSLARIMIZ</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Kompyuter savodxonligi</li>
                <li>Mobilografiya</li>
                <li>SMM</li>
                <li>Grafik dizayn</li>
                <li>Auto Cad</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">ALOQA</h3>
              <ul className="space-y-2 text-gray-400">
                <li>+998 99 045 11 99</li>
                <li>info@itpark.uz</li>
                <li>IT-Park Jizzax filiali, Viloyat hokimligi binosida joylashgan</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2025 IT-Park. Barcha huquqlar himoyalangan.
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-[#4FFFB0] transition-colors text-sm">
                Maxfiylik siyosati
              </a>
              <a href="#" className="text-gray-400 hover:text-[#4FFFB0] transition-colors text-sm">
                Foydalanish shartlari
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;