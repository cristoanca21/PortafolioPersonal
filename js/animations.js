/* ═══════════════════════════════════════════
   Scroll Animations (Intersection Observer)
   ═══════════════════════════════════════════ */

(function () {
  // Skip on browsers without IntersectionObserver or if user prefers reduced motion
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.animate-on-scroll, .project-card').forEach(function (el) {
      el.classList.add('visible');
    });
    return;
  }

  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    document.querySelectorAll('.animate-on-scroll, .project-card').forEach(function (el) {
      el.classList.add('visible');
    });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  // Observe general animated elements
  document.querySelectorAll('.animate-on-scroll').forEach(function (el) {
    observer.observe(el);
  });

  // Observe project cards
  document.querySelectorAll('.project-card').forEach(function (el) {
    observer.observe(el);
  });
})();
