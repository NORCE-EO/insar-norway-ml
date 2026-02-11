/**
 * Earth background: inject markup, honor prefers-reduced-motion, pause video
 * when requested, and hide when video fails to load.
 * Injected via JS to avoid layout override; no changes to theme layout.
 */
(function () {
  'use strict';

  var scriptEl = document.querySelector('script[data-earth-base]');
  var baseUrl = (scriptEl && scriptEl.dataset && scriptEl.dataset.earthBase) ? scriptEl.dataset.earthBase : '';

  function createMarkup() {
    var div = document.createElement('div');
    div.id = 'earth-background';
    div.className = 'earth-background';
    div.setAttribute('aria-hidden', 'true');
    div.innerHTML =
      '<video class="earth-background__video" autoplay muted loop playsinline>' +
      '<source src="' + baseUrl + '/assets/video/earth-loop.webm" type="video/webm">' +
      '<source src="' + baseUrl + '/assets/video/earth-loop.mp4" type="video/mp4">' +
      '</video>' +
      '<div class="earth-background__overlay"></div>';
    return div;
  }

  function init() {
    var container = document.getElementById('earth-background');
    if (!container) {
      container = createMarkup();
      document.body.insertBefore(container, document.body.firstChild);
    }

    var video = container.querySelector('.earth-background__video');
    var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    function handleReducedMotion(e) {
      if (e && e.matches) {
        if (video) video.pause();
        container.classList.add('earth-background--reduced');
      } else {
        if (video) video.play().catch(function () {});
        container.classList.remove('earth-background--reduced');
      }
    }

    if (video) {
      video.addEventListener('error', function () {
        container.classList.add('earth-background--unavailable');
      });
    }

    handleReducedMotion(prefersReducedMotion);
    prefersReducedMotion.addEventListener('change', handleReducedMotion);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
