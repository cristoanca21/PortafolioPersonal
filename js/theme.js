/* ═══════════════════════════════════════════
   Theme Toggle
   ═══════════════════════════════════════════ */

(function () {
  var root = document.documentElement;
  var toggle = document.getElementById('theme-toggle');
  var icon = document.getElementById('theme-icon');

  function isDark() {
    var theme = root.getAttribute('data-theme');
    if (theme) return theme === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  function updateIcon() {
    if (isDark()) {
      icon.className = 'fa-solid fa-sun';
    } else {
      icon.className = 'fa-solid fa-moon';
    }
  }

  // Load saved preference
  try {
    var saved = localStorage.getItem('theme');
    if (saved) {
      root.setAttribute('data-theme', saved);
    }
  } catch (e) { }

  updateIcon();

  toggle.addEventListener('click', function () {
    var next = isDark() ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) { }
    updateIcon();
  });

  // Listen for system preference changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function () {
    if (!root.getAttribute('data-theme')) {
      updateIcon();
    }
  });
})();
