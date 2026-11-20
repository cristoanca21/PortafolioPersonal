/* ═══════════════════════════════════════════
   Project Cards Renderer
   ═══════════════════════════════════════════ */

(function () {
  var grid = document.getElementById('projects-grid');
  if (!grid || typeof PROYECTOS === 'undefined') return;

  PROYECTOS.forEach(function (project, index) {
    var card = document.createElement('article');
    card.className = 'project-card' + (project.featured ? ' project-card--featured' : '');
    card.style.transitionDelay = (index * 0.1) + 's';

    var headerHTML = '<div class="project-card__header">' +
      '<div class="project-card__icon"><i class="' + project.icon + '"></i></div>' +
      '<span class="project-card__label">' + project.category + '</span>' +
      '</div>';

    var titleHTML = '<h3 class="project-card__title">' + project.title + '</h3>';
    var descHTML = '<p class="project-card__desc">' + project.desc + '</p>';

    var tagsHTML = '<div class="project-card__tags">';
    project.tags.forEach(function (tag) {
      tagsHTML += '<span class="project-card__tag">' + tag + '</span>';
    });
    tagsHTML += '</div>';

    card.innerHTML = headerHTML + titleHTML + descHTML + tagsHTML;
    grid.appendChild(card);
  });

  // Set year
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();
