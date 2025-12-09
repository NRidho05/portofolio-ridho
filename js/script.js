document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    // 1. Toggle Menu Responsif
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // 2. Animasi Scroll Halus
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Tutup menu jika terbuka (untuk tampilan mobile)
            if (navLinks.classList.contains('active')) {
                 navLinks.classList.remove('active');
            }

            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 3. Efek "Typed" Sederhana pada Hero (Opsional)
    // Anda bisa mengintegrasikan library seperti 'Typed.js' untuk efek futuristik.
    
    // Contoh untuk menambahkan class glow saat scroll (membuat header menonjol)
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'var(--background-color)'; // Jadikan solid saat scroll
        } else {
            header.style.backgroundColor = 'rgba(10, 10, 26, 0.9)'; // Sedikit transparan di atas
        }
    });

});