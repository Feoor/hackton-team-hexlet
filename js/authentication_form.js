document.addEventListener('DOMContentLoaded', function() {
  // Поиск элементов формы
  const nameInput = document.getElementById('name-form-input');
  const form = document.querySelector('.authentication__form');

  if (nameInput) {
    // Функция валидации имени
    function validateName(name) {
      if (!name) {
        return 'Имя обязательно для заполнения';
      }

      if (name.length < 2) {
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
        const name = nameInput.value.trim();
        const error = validateName(name);

        if (error) {
          event.preventDefault();
          errorMessage.textContent = error;
          nameInput.classList.add('is-invalid');
        }
      });
    }
  }
});
