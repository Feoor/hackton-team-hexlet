document.addEventListener('DOMContentLoaded', function() {
  // FIXME: Удалить потом
  console.log('DOMContent Loaded!');

  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    const lightIcon = themeToggle.querySelector('.light-icon');
    const darkIcon = themeToggle.querySelector('.dark-icon');
  }

  // Проверяем сохраненную тему или системные предпочтения
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.setAttribute('data-theme', 'dark');
    if (themeToggle) {
      lightIcon.style.display = 'none';
      darkIcon.style.display = 'inline';
    }
  }

  // Обработчик переключения
  if (themeToggle) {
    themeToggle.addEventListener('click', function() {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);

      if (newTheme === 'dark') {
        lightIcon.style.display = 'none';
        darkIcon.style.display = 'inline';
      } else {
        lightIcon.style.display = 'inline';
        darkIcon.style.display = 'none';
      }
    });
  }
});
