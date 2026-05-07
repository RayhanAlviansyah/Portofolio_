import React, { useState } from 'react';
import './Portfolio.css';
import ScrollReveal from './ScrollReveal';
import IndoAprilImg from '../assets/Project/IndoApril.png';
import CourtBookingImg from '../assets/Project/CourtBook.png';
import JurnalImg from '../assets/Project/Jurnalku.png';
import TicketingAppImg from '../assets/Project/TicketingApp.png';
import ElearningImg from '../assets/Project/E-learning.png';
import finbuddyImg from '../assets/Project/FinBuddy.png';
import backendpemula from '../assets/Sertifikat/Bakcend-Pemula-JavaScript.jpg';
import react from '../assets/Sertifikat/Belajar-React.jpg';
import frontendweb from '../assets/Sertifikat/Front-end-pemula.jpg';
import logicpemrograman from '../assets/Sertifikat/Programing-logic-101.jpg';
import dasarjavascript from '../assets/Sertifikat/Dasar-Javascript.jpg';

import genaiaws from '../assets/Sertifikat/Gen-AI-di-AWS.jpg';
import uiux from '../assets/Sertifikat/UI-UX.jpg';
import financial from '../assets/Sertifikat/Financial-Literacy.jpg';
import dasarpemrograman from '../assets/Sertifikat/Dasar-Pemrograman.jpg';
import dasarpemrogramanmenjadipengembang from '../assets/Sertifikat/Dasar-Pembrograman-menjadi-pengembang.jpg';


const Portfolio = () => {
  const [activeMainTab, setActiveMainTab] = useState('Project');
  const [activeTab, setActiveTab] = useState('All');
  const [selectedItem, setSelectedItem] = useState(null);

  const categories = ['All','Full stack', 'Flutter', 'Web Design', ];

  const projects = [
    { id: 1, title: 'E-Learning', category: 'Full stack', icon: '💻', image: ElearningImg, desc: 'Platform e-learning berbasis Laravel dan React yang dikerjakan sebagai Full Stack Developer, mencakup pengembangan front-end, back-end, integrasi API, serta implementasi fitur pembelajaran interaktif.' },
    { id: 2, title: 'IndoApril', category: 'Full stack', icon: '⚙️', image: IndoAprilImg, desc: 'Website kasir berbasis Laravel yang dikembangkan pada sisi front-end dan back-end untuk membantu proses transaksi, pengelolaan data, dan operasional kasir secara efisien.' },
    { id: 3, title: 'Jurnalku', category: 'Flutter', icon: '⚙️', image: JurnalImg, desc: 'Aplikasi Flutter yang berfokus pada proses adaptasi desain dari tampilan desktop ke mobile dengan tetap menjaga kenyamanan penggunaan dan konsistensi desain.' },
    { id: 4, title: 'Court Booking', category: 'Flutter', icon: '⚙️',image: CourtBookingImg, desc: 'Aplikasi booking lapangan berbasis Flutter yang berfokus pada pembuatan tampilan mobile yang modern, responsif, dan user-friendly untuk kebutuhan reservasi lapangan.' },
    { id: 5, title: 'Ticketing App', category: 'Flutter', icon: '⚙️',image: TicketingAppImg, desc: 'Aplikasi pemesanan tiket berbasis Flutter dengan fokus pada implementasi tampilan mobile yang responsif dan pengalaman pengguna yang sederhana serta mudah digunakan.' },
    { id: 6, title: 'FinBuddy', category: 'Web Design', icon: '⚙️',image: finbuddyImg, desc: 'Aplikasi financial tracking yang berfokus pada pengelolaan keuangan pribadi, dengan kontribusi utama pada perancangan UI/UX untuk menciptakan tampilan yang modern dan mudah dipahami pengguna.' },
  ];

  const certificates = [
    { id: 101, title: 'Belajar Membuat Front-End Web untuk Pemula', category: 'Certification', image: frontendweb, icon: '📜', desc: 'Kelas ini ditujukan untuk seorang Front-End Web Developer yang ingin mengembangkan website yang memiliki fungsionalitas lebih daripada hanya media informasi saja, sesuai dengan standar industri. Di akhir kelas, siswa dapat membuat aplikasi front-end web yang interaktif serta memiliki fitur penyimpanan menggunakan web storage.' },
    { id: 102, title: 'Belajar Dasar Pemrograman JavaScript', category: 'Certification', image: dasarjavascript, icon: '🎓', desc: 'Kelas ini ditujukan untuk individu yang ingin melangkah menjadi seorang Web Developer/Back-end developer menggunakan teknologi Node.js menggunakan standar kompetensi industri yang divalidasi oleh AWS. Di akhir kelas, siswa dapat menguasai dasar JavaScript untuk pengembangan aplikasi web menggunakan Node.js.' },
    { id: 103, title: 'Belajar Dasar Pemrograman Web', category: 'Certification', image: dasarpemrograman, icon: '🏆', desc: 'Kelas ini membahas tuntas dasar HTML dan CSS sebagai tiga fondasi pembuatan website. Fondasi tersebut diperlukan untuk Anda yang ingin mengembangkan kemampuan pengembangan website ke tahap yang lebih lanjut. Disusun dan diverifikasi oleh tim expert Dicoding, materi yang disajikan terstruktur dan komprehensif.' },
    { id: 104, title: 'Pengenalan ke Logika Pemrograman (Programming Logic 101)', category: 'Certification', image: logicpemrograman, icon: '📜', desc: 'Kelas ditujukan bagi pemula yang ingin mulai belajar logika pada bidang pemrograman dengan mengacu pada standar industri. Di akhir kelas, siswa dapat memahami logika pemrograman dasar dan menerapkannya dalam pemecahan masalah yang ada di bidang pekerjaan Software Developer.' },
    { id: 105, title: 'Belajar Dasar Cloud dan Gen AI di AWS', category: 'Certification', image: genaiaws, icon: '📜', desc: 'Kelas ditujukan bagi pemula yang ingin memulai karirnya di bidang cloud computing dengan mengacu pada standar kompetensi internasional milik AWS. Di akhir kelas, siswa dapat memahami AWS Cloud dengan segala jenis layanan, infrastruktur global, hingga harganya.' },
    { id: 106, title: 'Memulai Dasar Pemrograman untuk Menjadi Pengembang Software', category: 'Certification', image: dasarpemrogramanmenjadipengembang, icon: '📜', desc: 'Kelas ditujukan bagi pemula yang ingin mulai belajar bidang pemrograman agar dapat menjadi pengembang software dengan mengacu pada standar okupasi Pengembang Software (kode okupasi KBJI: 2512.03, Indotask: 2512). Di akhir pelatihan, siswa mampu memodifikasi aplikasi perangkat lunak menggunakan panduan diagram alur dan pemrograman dengan teknologi HTML, CSS, dan JavaScript tingkat dasar secara tepat sesuai persyaratan spesifikasi dan fungsionalitas aplikasi.' },
    { id: 107, title: 'Introduction to Financial Literacy', category: 'Certification', image: financial, icon: '🎓', desc: 'Kelas ditujukan bagi peserta Coding Camp powered by DBS Foundation 2026 yang ingin belajar mengenai Literasi Finansial. Di akhir kelas, peserta mampu membangun pemahaman yang kuat tentang prinsip-prinsip dasar literasi finansial, menerapkannya dalam pengambilan keputusan keuangan sehari-hari, serta merancang strategi finansial jangka panjang.' },
    { id: 108, title: 'Belajar Back-End Pemula dengan JavaScript', category: 'Certification', image: backendpemula, icon: '🏆', desc: 'Kelas ini ditujukan untuk individu yang ingin melangkah menjadi seorang Back-End Developer dengan standar kompetensi internasional milik AWS. Di akhir kelas, siswa dapat membuat RESTful API sederhana secara mandiri untuk mendukung fungsionalitas suatu aplikasi.' },
    { id: 109, title: 'Belajar Membuat Aplikasi Web dengan React', category: 'Certification', image: react, icon: '📜', desc: 'Kelas ini ditujukan untuk seorang Front-End Web Developer yang ingin mengembangkan website yang komponen UI-nya reusable, deklaratif, dan bersifat reaktif terhadap perubahan data. Di akhir kelas ini, siswa dapat membuat aplikasi web dengan React yang memanfaatkan functional component, stateful component, dan controlled component.' },
    { id: 110, title: 'UI/UX Designer', category: 'Certification', image: uiux, icon: '🎓', desc: 'Kelas ini ditujukan untuk individu yang ingin melangkah menjadi seorang UI/UX Designer dengan standar okupasi UI/UX Designer (kode okupasi KBJI: 2162.07, Indotask: 2162). Di akhir kelas, siswa dapat merancang antarmuka aplikasi atau sistem sesuai dengan kebutuhan pengguna dan standar industri.' },
  ];

  const displayItems = activeMainTab === 'Project' 
    ? (activeTab === 'All' ? projects : projects.filter(p => p.category === activeTab))
    : certificates;

  return (
    <section id="portfolio" className="section">
      <ScrollReveal className="container portfolio-container glass-card">
        <h2 className="section-title">Portfolio</h2>
        
        <div className="portfolio-main-toggle">
          <button 
            className={`main-toggle-btn ${activeMainTab === 'Project' ? 'active' : ''}`}
            onClick={() => setActiveMainTab('Project')}
          >
            Project
          </button>
          <span className="main-toggle-separator">|</span>
          <button 
            className={`main-toggle-btn ${activeMainTab === 'Sertifikat' ? 'active' : ''}`}
            onClick={() => setActiveMainTab('Sertifikat')}
          >
            Sertifikat
          </button>
        </div>
        
        <div className="portfolio-layout">
          {activeMainTab === 'Project' && (
            <div className="portfolio-sidebar">
              <ul className="portfolio-tabs">
                {categories.map((cat, idx) => (
                  <li 
                    key={idx} 
                    className={`tab-item ${activeTab === cat ? 'active' : ''}`}
                    onClick={() => setActiveTab(cat)}
                  >
                    {cat}
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          <div className="portfolio-grid" style={{ flex: 1 }}>
            {displayItems.map((item) => (
              <div 
                key={item.id} 
                className="portfolio-item-placeholder cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                <div className="portfolio-item-content">
                  <div className="project-placeholder-image">
                    {item.image ? (
                      <img src={item.image} alt={item.title} className="project-image" />
                    ) : (
                      <span className="project-icon">{item.icon}</span>
                    )}
                  </div>
                  <div className="project-info">
                    <span className="project-category">{item.category}</span>
                    <h3 className="project-title">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="portfolio-pagination">
          <span className="dot"></span>
          <span className="dot active"></span>
          <span className="dot"></span>
        </div>
      </ScrollReveal>

      {/* Modal Popup */}
      {selectedItem && (
        <div className="portfolio-modal-overlay" onClick={() => setSelectedItem(null)}>
          <div className="portfolio-modal-content glass-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedItem(null)}>×</button>
            <div className="modal-body">
              <div className="modal-image-large">
                {selectedItem.image ? (
                  <img src={selectedItem.image} alt={selectedItem.title} className="modal-image" />
                ) : (
                  <span className="modal-icon-large">{selectedItem.icon}</span>
                )}
              </div>
              <div className="modal-details">
                <span className="text-accent uppercase text-sm font-bold tracking-wider">{selectedItem.category}</span>
                <h3 className="modal-title">{selectedItem.title}</h3>
                <p className="modal-desc">{selectedItem.desc}</p>
                <button className="btn-primary mt-4" onClick={() => setSelectedItem(null)}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
