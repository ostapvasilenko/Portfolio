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
