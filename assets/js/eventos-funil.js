(function () {
  function init() {
    // Rastreia cliques em CTAs de saída (WhatsApp, catálogo, cadastro)
    document.querySelectorAll('[data-funil]').forEach(function (el) {
      el.addEventListener('click', function () {
        var destino = el.getAttribute('data-funil');
        if (window.dataLayer) {
          window.dataLayer.push({
            event: 'funil_clique',
            destino: destino
          });
        }
      });
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();