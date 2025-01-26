// Pilih semua elemen yang ingin dianimasikan
const scrollElements = document.querySelectorAll('.scroll-element');

// Fungsi untuk mengecek apakah elemen terlihat di layar
const handleScroll = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show'); // Tambahkan class untuk animasi
      observer.unobserve(entry.target); // Hentikan pengamatan setelah animasi
    }
  });
};

// Gunakan Intersection Observer
const observer = new IntersectionObserver(handleScroll, {
  threshold: 0.2, // Elemen harus terlihat 20% agar animasi dimulai
});

// Pasang observer ke setiap elemen
scrollElements.forEach(element => observer.observe(element));
a