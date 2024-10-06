// Google Analytics
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-HQ8PJX91MT');

// Toast mesaj fonksiyonu
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = message;
    document.body.appendChild(toast);

    setTimeout(function() {
        toast.className += " show";
    }, 100);

    setTimeout(function() {
        toast.className = toast.className.replace(" show", "");
        document.body.removeChild(toast);
    }, 3000);
}

// EmailJS başlatma
(function () {
    emailjs.init("WGQREoXc_PaSGe87_"); // Doğru Public Key
})();

// Formun gönderim işlemi
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Formun varsayılan gönderim davranışını önler

    var templateParams = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    emailjs.send('service_1hm2ivv', 'template_os3q2m4', templateParams)
        .then(function (response) {
            document.getElementById('message-status').innerHTML = "Mesajınız başarıyla gönderildi!";
            showToast("Mesajınız başarıyla gönderildi!");
        }, function (error) {
            document.getElementById('message-status').innerHTML = "Mesaj gönderilirken bir hata oluştu.";
        });

    document.getElementById('contact-form').reset();
});

// Slider scripti
let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const sliderWrapper = document.querySelector('.slider-wrapper');
    const offset = -currentIndex * 100;
    sliderWrapper.style.transform = `translateX(${offset}%)`;
}

document.querySelector('.next').addEventListener('click', function () {
    showSlide(currentIndex + 1);
    clearInterval(autoSlideInterval); // Otomatik geçişi durdur
});

document.querySelector('.prev').addEventListener('click', function () {
    showSlide(currentIndex - 1);
    clearInterval(autoSlideInterval); // Otomatik geçişi durdur
});

let autoSlideInterval = setInterval(function () {
    showSlide(currentIndex + 1);
}, 10000); // 10 saniyede bir geçiş yap
