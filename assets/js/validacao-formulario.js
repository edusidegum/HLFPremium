(function () {
  function init() {
    var form = document.querySelector('form[data-lead-form]');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var nome = form.querySelector('[name="nome"]');
      var cidade = form.querySelector('[name="cidade"]');
      var contato = form.querySelector('[name="contato"]');
      var consentimento = form.querySelector('[name="consentimento"]');
      var valid = true;

      [nome, cidade, contato].forEach(function (campo) {
        if (campo && !campo.value.trim()) {
          campo.setAttribute('aria-invalid', 'true');
          valid = false;
        }
      });

      // Consentimento NÃO pode ser pré-marcado (LGPD)
      if (consentimento && !consentimento.checked) {
        consentimento.setAttribute('aria-invalid', 'true');
        valid = false;
      }

      if (!valid) {
        var msg = document.getElementById('form-error');
        if (msg) msg.hidden = false;
        return;
      }

      // Enviar para destino configurado (WhatsApp/e-mail)
      form.submit();
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();