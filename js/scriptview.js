document.addEventListener('DOMContentLoaded', () => {
      // Pilih semua elemen yang ingin diberi efek scroll
      const scrollElements = document.querySelectorAll('.card-artikels, .card-artikel, .bloc-card');
    
      // Callback untuk observer
      const handleScroll = (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show'); // Tambahkan class 'show'
            observer.unobserve(entry.target); // Hentikan pengamatan untuk elemen ini
          }
        });
      };
    
      // Buat observer dengan threshold 0.1
      const observer = new IntersectionObserver(handleScroll, {
        threshold: 0.1,
      });
    
      // Mulai mengamati setiap elemen
      scrollElements.forEach(element => observer.observe(element));
    });
    