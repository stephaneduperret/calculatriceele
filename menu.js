// menu.js – barre de navigation responsive avec overlay plein écran + footer
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
      <li><a href="./Commande.html">Commande</a></li>
        <li><a href="./Convertir A en kVA.html">Convertir I-S</a></li>
        <li><a href="./Calculatrice puissance câble et coût.html">Divers</a></li>  
        <li><a href="./Calculs solaire test.html">Solaire</a></li>
        <li><a href="./Eligibilite.html">Eligibilite</a></li>
        <li><a href="./Calculs de dates.html">Date</a></li>
        <li><a href="./chutedetension.html">Chute de tension</a></li>
        <li><a href="./Calcul achat tubes.html">Tarifs divers</a></li>
        <li><a href="./Calcul Alim Armoire.html">Alim Armoire</a></li>
         <li><a href="./calculreseau.html">Calculs Réseau</a></li>
        <li><a href="./Transfo.html">Transformateur</a></li>
        <li><a href="./ICC.html">Icc</a></li>
        <li><a href="./index.html" style="color:blue;">Accueil</a></li>
      </ul>
    </header>
  `;

  const footer = `
    <footer>
      <div class="footer">
        Dernière modification faite par Stéphane le 19 septembre 2025.
      </div>
    </footer>
  `;

  // Injection
  document.body.insertAdjacentHTML('afterbegin', navbar);
  document.body.insertAdjacentHTML('beforeend', footer);

  // Sélecteurs
  const btn  = document.querySelector('.navbar .toggle');
  const menu = document.getElementById('menu');

  if (!btn || !menu) return;

  function toggleMenu(forceState){
    const open = btn.getAttribute('aria-expanded') === 'true';
    const next = typeof forceState === 'boolean' ? forceState : !open;
    btn.setAttribute('aria-expanded', String(next));
    menu.classList.toggle('open', next);
    document.body.classList.toggle('no-scroll', next); // bloque le scroll derrière l’overlay
  }

  btn.addEventListener('click', () => toggleMenu());

  // Fermer après clic sur un lien (UX mobile)
  menu.addEventListener('click', (e) => {
    if (e.target.matches('a')) toggleMenu(false);
  });

  // Fermer si on repasse en desktop
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      if (window.innerWidth > 768) toggleMenu(false);
    }, 120);
  });

  // Fermer à Échap (accessibilité)
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      toggleMenu(false);
      btn.focus();
    }
  });

  // Option confort: fermer au scroll si le menu est ouvert (sur mobile)
  let lastScrollY = window.scrollY;
  window.addEventListener('scroll', () => {
    const open = btn.getAttribute('aria-expanded') === 'true';
    if (!open) return;
    const current = window.scrollY;
    if (current > lastScrollY + 10) toggleMenu(false);
    lastScrollY = current;
  }, { passive: true });
});









