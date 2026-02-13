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
      '<video class="earth-background__video" autoplay muted loop playsinline preload="auto">' +
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
    var isReducedMotion = !!prefersReducedMotion.matches;
    var isUnavailable = false;

    function playVideo() {
      if (!video || isReducedMotion || isUnavailable || document.hidden) return;
      video.loop = true;
      video.autoplay = true;
      video.muted = true;
      video.defaultMuted = true;
      video.playsInline = true;
      video.setAttribute('preload', 'auto');
      var playPromise = video.play();
      if (playPromise && typeof playPromise.catch === 'function') {
        playPromise.catch(function () {});
      }
    }

    function handleReducedMotion(e) {
      var matches = (e && typeof e.matches === 'boolean') ? e.matches : prefersReducedMotion.matches;
      isReducedMotion = !!matches;

      if (isReducedMotion) {
        if (video) video.pause();
        container.classList.add('earth-background--reduced');
      } else {
        container.classList.remove('earth-background--reduced');
        playVideo();
      }
    }

    if (video) {
      video.addEventListener('error', function () {
        isUnavailable = true;
        container.classList.add('earth-background--unavailable');
      });

      video.addEventListener('ended', function () {
        if (isReducedMotion || isUnavailable) return;
        video.currentTime = 0;
        playVideo();
      });

      video.addEventListener('pause', function () {
        if (isReducedMotion || isUnavailable || document.hidden) return;
        playVideo();
      });

      video.addEventListener('loadeddata', function () {
        playVideo();
      });
    }

    document.addEventListener('visibilitychange', function () {
      if (!document.hidden) {
        playVideo();
      }
    });

    window.addEventListener('focus', function () {
      playVideo();
    });

    if (typeof prefersReducedMotion.addEventListener === 'function') {
      prefersReducedMotion.addEventListener('change', handleReducedMotion);
    } else if (typeof prefersReducedMotion.addListener === 'function') {
      prefersReducedMotion.addListener(handleReducedMotion);
    }

    handleReducedMotion(prefersReducedMotion);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
