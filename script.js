document.addEventListener("DOMContentLoaded", function () {
    // Hitung Mundur (Countdown Timer ke 30 Desember 2027)
    const weddingDate = new Date("December 30, 2027 08:00:00").getTime();

    const timer = setInterval(function() {
        const now = new Date().getTime();
        const distance = weddingDate - now;

        const daysEl = document.getElementById("days");
        const hoursEl = document.getElementById("hours");
        const minutesEl = document.getElementById("minutes");
        const secondsEl = document.getElementById("seconds");
        const countdownContainer = document.getElementById("countdown");

        if (distance < 0) {
            clearInterval(timer);
            if (countdownContainer) {
                countdownContainer.innerHTML = "<h4 class='fw-bold text-dark'>Acara Sedang Berlangsung</h4>";
            }
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (daysEl) daysEl.innerText = days < 10 ? "0" + days : days;
        if (hoursEl) hoursEl.innerText = hours < 10 ? "0" + hours : hours;
        if (minutesEl) minutesEl.innerText = minutes < 10 ? "0" + minutes : minutes;
        if (secondsEl) secondsEl.innerText = seconds < 10 ? "0" + seconds : seconds;
    }, 1000);
});

// Fungsi Navigasi Scroll
function scrollToClass(className) {
    const targetElement = document.querySelector("." + className);
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
    }
}

let slideIndex = 0;
const slides = document.querySelectorAll(".slider-images img");
const dots = document.querySelectorAll(".slider-dots .dot");

function showSlide(index) {
    if (slides.length === 0) return;
    
    slides.forEach(slide => slide.classList.remove("active-slide"));
    dots.forEach(dot => dot.classList.remove("active"));
    
    slides[index].classList.add("active-slide");
    dots[index].classList.add("active");
}

function nextSlide() {
    if (slides.length === 0) return;
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}

function currentSlide(index) {
    slideIndex = index;
    showSlide(slideIndex);
}

// Jalankan otomatis geser setiap 3,5 detik
if (slides.length > 0) {
    setInterval(nextSlide, 3500);
}