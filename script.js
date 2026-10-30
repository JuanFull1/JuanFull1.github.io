(() => {
  const root = document.documentElement;
  const themeButton = document.querySelector('.theme-toggle');
  const menuButton = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  const readTheme = () => {
    try { return localStorage.getItem('jt-theme'); } catch { return null; }
  };
  const saveTheme = (value) => {
    try { localStorage.setItem('jt-theme', value); } catch { /* Sin almacenamiento disponible. */ }
  };
  const savedTheme = readTheme();
  const systemLight = window.matchMedia?.('(prefers-color-scheme: light)').matches;
  root.dataset.theme = savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : systemLight ? 'light' : 'dark';

  themeButton?.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    saveTheme(root.dataset.theme);
  });

  function closeMenu() {
    navLinks?.classList.remove('is-open');
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.setAttribute('aria-label', 'Abrir menú');
  }
  menuButton?.addEventListener('click', () => {
    const open = !navLinks.classList.contains('is-open');
    navLinks.classList.toggle('is-open', open);
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  });
  navLinks?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
  document.addEventListener('click', event => {
    if (navLinks?.classList.contains('is-open') && !event.target.closest('.nav')) closeMenu();
  });

  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();

  const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  if ('IntersectionObserver' in window && !reducedMotion) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  } else {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));
  }
})();
