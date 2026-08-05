/* Banner de consentimento de cookies — HLF Suplementos Premium */
(function () {
  'use strict';

  var STORAGE_KEY = 'hlf_cookie_consent';
  var COOKIE_NAME = 'hlf_cookie_consent';

  function getConsent() {
    try {
      var stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : null;
    } catch (e) {
      return null;
    }
  }

  function saveConsent(preferences) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
      document.cookie = COOKIE_NAME + '=' + JSON.stringify(preferences) + ';max-age=31536000;path=/;SameSite=Lax';
    } catch (e) {
      /* armazenamento indisponível */
    }
  }

  function applyPreferences(preferences) {
    var analytics = preferences && preferences.analytics;
    var marketing = preferences && preferences.marketing;
    /* Sem tracking externo implementado por padrão.
       Aqui você pode ativar/desativar scripts de análise conforme o consentimento. */
    window.__hlfConsent = { analytics: !!analytics, marketing: !!marketing };
  }

  function buildBanner() {
    var banner = document.createElement('div');
    banner.id = 'hlf-cookie-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-label', 'Consentimento de cookies');
    banner.style.cssText =
      'position:fixed;bottom:0;left:0;right:0;z-index:9999;background:#141a26;color:#e2e8f0;' +
      'padding:16px 20px;font-family:Inter,Arial,sans-serif;font-size:14px;line-height:1.5;' +
      'box-shadow:0 -4px 20px rgba(0,0,0,0.3);';

    var text = document.createElement('p');
    text.textContent = 'Utilizamos cookies para melhorar sua experiência de navegação. ' +
      'Os cookies estritamente necessários são essenciais ao funcionamento do site. ' +
      'Cookies de análise e marketing são usados apenas com seu consentimento.';
    text.style.cssText = 'margin:0 0 12px;max-width:800px;';

    var btnAccept = document.createElement('button');
    btnAccept.textContent = 'Aceitar todos';
    btnAccept.style.cssText = 'background:#78BE20;color:#0d0d0d;border:0;border-radius:50px;padding:10px 20px;font-weight:700;cursor:pointer;margin-right:8px;';

    var btnNecessary = document.createElement('button');
    btnNecessary.textContent = 'Somente necessários';
    btnNecessary.style.cssText = 'background:transparent;color:#e2e8f0;border:1px solid #2a3242;border-radius:50px;padding:10px 20px;font-weight:600;cursor:pointer;margin-right:8px;';

    var link = document.createElement('a');
    link.textContent = 'Política de Privacidade';
    link.href = '/politica.html';
    link.style.cssText = 'color:#78BE20;text-decoration:underline;';

    btnAccept.addEventListener('click', function () {
      saveConsent({ necessary: true, analytics: true, marketing: true });
      applyPreferences({ analytics: true, marketing: true });
      banner.remove();
    });

    btnNecessary.addEventListener('click', function () {
      saveConsent({ necessary: true, analytics: false, marketing: false });
      applyPreferences({ analytics: false, marketing: false });
      banner.remove();
    });

    banner.appendChild(text);
    banner.appendChild(btnAccept);
    banner.appendChild(btnNecessary);
    banner.appendChild(link);
    document.body.appendChild(banner);
  }

  function init() {
    var consent = getConsent();
    if (consent) {
      applyPreferences(consent);
      return;
    }
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', buildBanner);
    } else {
      buildBanner();
    }
  }

  init();
})();