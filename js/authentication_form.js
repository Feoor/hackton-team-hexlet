document.addEventListener('DOMContentLoaded', function() {
  // Поиск элементов формы
  const nameInput = document.getElementById('name-form-input');
  const socialButtons = document.querySelectorAll('button.authentication__footer-socials');
  const form = document.querySelector('.authentication__form');

  if (socialButtons.length > 0) {
    for (const socialButton of socialButtons) {
      socialButton.addEventListener('click', () => {
        alert("Вход через социальную сеть");
        window.location.assign("../index.html");
      })
    }
  }

  if (nameInput) {
    // Функция валидации имени
    function validateName(name) {
      if (!name) {
        return 'Имя обязательно для заполнения';
      }

      if (name.length < 3) {
        return 'Имя должно содержать минимум 3 символа';
      }

      if (!/^[А-Яа-яA-Za-zЁё\s-]+$/.test(name)) {
        return 'Имя должно содержать только буквы, пробелы и дефисы';
      }

      return '';
    }

    // Обработчик потери фокуса
    nameInput.addEventListener('blur', function() {
      const name = nameInput.value.trim();
      const error = validateName(name);

      nameInput.setCustomValidity(error)

      if (error) {
        nameInput.classList.add('is-invalid');
        nameInput.classList.remove('is-valid');
      } else {
        nameInput.classList.add('is-valid');
        nameInput.classList.remove('is-invalid');
      }
    });

    // Обработчик ввода
    nameInput.addEventListener('input', function() {
      nameInput.setCustomValidity('');
    })

    // Валидация при отправке формы
    if (form) {
      form.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = nameInput.value.trim();
        const error = validateName(name);

        if (error) {
          nameInput.classList.add('is-invalid');
          return false;
        }

        // FIXME: Перенаправление на главную страницу не работает
        window.location.assign("../index.html");
        return true;
      });
    }
  }
});
