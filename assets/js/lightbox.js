/**
 * Lightbox: click images with [data-zoom] to open full-size in overlay.
 * Escape or click overlay/close button to close. Focus trap for accessibility.
 */
(function () {
  'use strict';

  var overlay;
  var overlayImg;
  var closeBtn;
  var focusableSelector = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

  function createOverlay() {
    overlay = document.createElement('div');
    overlay.id = 'lightbox-overlay';
    overlay.className = 'lightbox-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', 'Enlarged image');
    overlay.innerHTML =
      '<button type="button" class="lightbox-overlay__close" aria-label="Close">&times;</button>' +
      '<div class="lightbox-overlay__inner">' +
      '<img src="" alt="" />' +
      '</div>';
    overlayImg = overlay.querySelector('img');
    closeBtn = overlay.querySelector('.lightbox-overlay__close');
    document.body.appendChild(overlay);
  }

  function openLightbox(src, alt) {
    if (!overlay) createOverlay();
    overlayImg.src = src;
    overlayImg.alt = alt || '';
    overlay.classList.add('is-open');
    closeBtn.focus();
    document.body.style.overflow = 'hidden';
    trapFocus(overlay);
  }

  function closeLightbox() {
    if (!overlay) return;
    overlay.classList.remove('is-open');
    document.body.style.overflow = '';
    overlayImg.removeAttribute('src');
  }

  function trapFocus(container) {
    var focusable = container.querySelectorAll(focusableSelector);
    var first = focusable[0];
    var last = focusable[focusable.length - 1];

    function handleKeyDown(e) {
      if (e.key !== 'Tab') return;
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    container.addEventListener('keydown', handleKeyDown);
  }

  function init() {
    if (overlay) return;
    createOverlay();

    document.addEventListener('click', function (e) {
      var link = e.target.closest('[data-zoom]');
      if (!link) return;
      e.preventDefault();
      var img = link.querySelector('img');
      var href = link.getAttribute('href');
      var src = href || (img && img.currentSrc);
      var alt = img ? img.getAttribute('alt') || '' : '';
      if (src) openLightbox(src, alt);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && overlay && overlay.classList.contains('is-open')) closeLightbox();
    });

    closeBtn.addEventListener('click', closeLightbox);
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeLightbox();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
