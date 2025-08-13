document.addEventListener('DOMContentLoaded', () => {
    const navbar = `
        <div class="navbar">
            <div class="logo">
                <img src="H:/Distribution/07_COMMUN/STEPHANE/Calculatrice/Images/VOé-removebg-preview.png" alt="Logo BeTomorrow">
            </div>
            <ul class="menu">
		<li><a href="H:/Distribution/07_COMMUN/STEPHANE/Calculatrice/Convertir A en kVA.html">Convertir I-S</a></li>
                <li><a href="H:/Distribution/07_COMMUN/STEPHANE/Calculatrice/Calculatrice puissance câble et coût.html">Divers</a></li>
                <li><a href="H:/Distribution/07_COMMUN/STEPHANE/Calculatrice/Calculs solaire.html">Solaire</a></li>
		<li><a href="H:/Distribution/07_COMMUN/STEPHANE/Calculatrice/Calculs solaire test.html">Solaire test</a></li>
                <li><a href="H:/Distribution/07_COMMUN/STEPHANE/Calculatrice/Calculs de dates.html">Date</a></li>
                <li><a href="H:/Distribution/07_COMMUN/STEPHANE/Calculatrice/Chute de tension.html">Chute de tension</a></li>
                <li><a href="H:/Distribution/07_COMMUN/STEPHANE/Calculatrice/Calcul achat tubes.html">Tarifs divers</a></li>
		<li><a href="H:/Distribution/07_COMMUN/STEPHANE/Calculatrice/Calcul Alim Armoire.html">Alim Armoire</a></li>
                <li><a href="H:/Distribution/07_COMMUN/STEPHANE/Calculatrice/Transfo.html">Transformateur</a></li>
		<li><a href="H:/Distribution/07_COMMUN/STEPHANE/Calculatrice/index.html" style="color:blue;">Accueil</a></li>
            </ul>
        </div>
    `;

    const footer = `
        <footer>
            <div class="footer">
                Dernière modification faite par Stéphane le 19 décembre 2024.
            </div>
        </footer>
    `;

    document.body.insertAdjacentHTML('afterbegin', navbar);
    document.body.insertAdjacentHTML('beforeend', footer);
});
