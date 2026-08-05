(function () {
  // Respeita prefers-reduced-motion (WCAG 2.2 AA)
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  // Proteção seletiva de imagens, sem bloquear acessibilidade
  document.addEventListener('contextmenu', function (e) {
    if (e.target.tagName === 'IMG' || e.target.closest('figure')) {
      e.preventDefault();
    }
  });

  document.querySelectorAll('[data-protect]').forEach(function (el) {
    el.style.userSelect = 'none';
  });
})();