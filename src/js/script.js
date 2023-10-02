//Form validation

const form = document.querySelector('form');
const nameInput = document.getElementById('input-name');
const emailInput = document.getElementById('input-email');
const subjectInput = document.getElementById('input-subject');
const messageInput = document.getElementById('input-message');

form.addEventListener('submit', function (e) {
    e.preventDefault(); // Заборона формі надсилати дані
    let isValid = true; // Змінна для відстеження чи проходить перевірка

    // Перевірка імені (не може бути порожнім)
    if (nameInput.value.trim() === '') {
        isValid = false;
        alert('Будь ласка, введіть ваше ім\'я');
    }

    // Перевірка електронної пошти (перевірка на коректний формат)
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(emailInput.value.trim())) {
        isValid = false;
        alert('Будь ласка, введіть коректну адресу електронної пошти');
    }

    // Перевірка теми (не може бути порожньою)
    if (subjectInput.value.trim() === '') {
        isValid = false;
        alert('Будь ласка, введіть тему повідомлення');
    }

    // Перевірка повідомлення (не може бути порожнім)
    if (messageInput.value.trim() === '') {
        isValid = false;
        alert('Будь ласка, введіть ваше повідомлення');
    }

    // Якщо всі перевірки пройшли успішно, відправте форму
    if (isValid) {
        alert('Ваше повідомлення відправлено успішно!');
        form.reset(); // Очистити форму
    }
});

// Slider Works

let swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 60,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    on: {
        resize: function () {
            if (window.innerWidth < 1500 && window.innerWidth >= 992) {
                this.params.slidesPerView = 3;
                this.params.spaceBetween = 40;
            } else if (window.innerWidth < 992 && window.innerWidth >= 768) {
                this.params.slidesPerView = 2;
                this.params.spaceBetween = 30;
            } else if (window.innerWidth < 768 && window.innerWidth >= 576) {
                this.params.slidesPerView = 2;
                this.params.spaceBetween = 30;
            } else if (window.innerWidth < 576 && window.innerWidth >= 0) {
                this.params.slidesPerView = 1;
            } else {
                this.params.slidesPerView = 4;
            }
            this.update();
        },
    },
});
