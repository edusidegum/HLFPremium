(function () {
  function init() {
    var f = document.querySelector('footer.site-footer');
    if (!f) {
      f = document.createElement('footer');
      f.className = 'site-footer';
      document.body.appendChild(f);
    }
    f.innerHTML =
      '<div class="container">' +
      '<p>HLF Suplementos Premium — Distribuidor Independente Herbalife — Edu Sidegum</p>' +
      '<p>Novo Hamburgo, RS | Atendimento 8h às 20h | ' +
      '<a href="https://edusidegum.github.io/HLFPremium/politica.html">Política de Privacidade</a></p>' +
      '<p>Desenvolvido por e-Sid Tech</p>' +
      '</div>';
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();