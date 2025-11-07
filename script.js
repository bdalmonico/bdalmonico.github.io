(function () {
  const html = document.documentElement;
  const btn = document.getElementById('themeToggle');
  const key = 'pref-theme';

  // Inicializa tema
  const saved = localStorage.getItem(key);
  if (saved === 'light' || saved === 'dark') {
    html.setAttribute('data-theme', saved);
  } else {
    // Preferencias del SO
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    html.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
  }

  // Toggle de tema
  btn.addEventListener('click', () => {
    const current = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', current);
    localStorage.setItem(key, current);
  });

  // Año en el footer
  document.getElementById('year').textContent = new Date().getFullYear();
})();
