// Класс для хранения данных формы
class FormData {
    constructor({ name, email, password, genre, message, consent }) {
        this.name      = name;
        this.email     = email;
        this.password  = password;
        this.genre     = genre;
        this.message   = message;
        this.consent   = consent;
        this.createdAt = new Date().toLocaleString('ru-RU');
    }

    print() {
        console.log('=== Данные формы ===');
        console.log(`Имя:       ${this.name}`);
        console.log(`Email:     ${this.email}`);
        console.log(`Пароль:    ${'*'.repeat(this.password.length)}`); // Скрываем пароль звездочками
        console.log(`Жанр:      ${this.genre}`);
        console.log(`Сообщение: ${this.message || '—'}`);
        console.log(`Согласие:  ${this.consent ? 'да' : 'нет'}`);
        console.log(`Время:     ${this.createdAt}`);
        console.log('====================');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const form   = document.getElementById('contact-form');
    const status = document.getElementById('form-status');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        const data = new FormData({
            name:     form.name.value.trim(),
            email:    form.email.value.trim(),
            password: form.password.value,
            genre:    form.genre.value,
            message:  form.message.value.trim(),
            consent:  form.consent.checked
        });

        data.print();
        
        form.reset();
        status.textContent = 'Данные отправлены';
    });
});