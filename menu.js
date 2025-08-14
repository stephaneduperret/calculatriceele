document.addEventListener('DOMContentLoaded', () => {
  const navbar = `
    <header class="navbar">
      <div class="logo">
        <img src="./Images/VOé-removebg-preview.png" alt="Logo VOé">
      </div>

      <button class="toggle" aria-controls="menu" aria-expanded="false" aria-label="Ouvrir le menu">
        <span class="bars" aria-hidden="true"></span>
      </button>

      <ul id="menu" class="menu">
        <li><a href="./Convertir A en kVA.html">Convertir I-S</a></li>
        <li><a href="./Calculatrice puissance câble et coût.html">Tarifs</a></li>
        <li><a href="./Calculs solaire.html">Solaire</a></li>
        <li><a href="./Calculs de dates.html">Date</a></li>
        <li><a href="./Chute de tension.html">Chute de tension</a></li>
        <li><a href="./Transfo.html">Transformateur</a></li>
        <li><a href="./index.html" style="color:blue;">Accueil</a></li>
      </ul>
    </header>
  `;

  const footer = `
    <footer>
      <div class="footer">
        Dernière modification faite par Stéphane le 19 décembre 2024.
      </div>
    </footer>
  `;

  // Injection dans la page
  document.body.insertAdjacentHTML('afterbegin', navbar);
  document.body.insertAdjacentHTML('beforeend', footer);

  // Comportement hamburger
  const btn  = document.querySelector('.navbar .toggle');
  const menu = document.getElementById('menu');

  if (btn && menu) {
    const toggleMenu = () => {
      const open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!open));
      menu.classList.toggle('open', !open);
    };

    btn.addEventListener('click', toggleMenu);

    // Ferme après clic sur un lien (UX mobile)
    menu.addEventListener('click', (e) => {
      if (e.target.matches('a')) {
        btn.setAttribute('aria-expanded', 'false');
        menu.classList.remove('open');
      }
    });

    // Ferme si on repasse au-dessus du breakpoint
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        btn.setAttribute('aria-expanded', 'false');
        menu.classList.remove('open');
      }
    });

    // Échap pour fermer (accessibilité)
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        btn.setAttribute('aria-expanded', 'false');
        menu.classList.remove('open');
        btn.focus();
      }
    });
  }
});


