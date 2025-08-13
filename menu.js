document.addEventListener('DOMContentLoaded', () => {
    const navbar = `
        <div class="navbar">
            <div class="logo">
                <img src="./Images/VOé-removebg-preview.png" alt="Logo BeTomorrow">
            </div>
            <ul class="menu">
                <li><a href="./Convertir A en kVA.html">Convertir I-S</a></li>
                <li><a href="./Calculatrice puissance câble et coût.html">Divers</a></li>
                <li><a href="./Calculs solaire.html">Solaire</a></li>
      
                <li><a href="./Calculs de dates.html">Date</a></li>
                <li><a href="./Chute de tension.html">Chute de tension</a></li>
                <li><a href="./Calcul achat tubes.html">Tarifs divers</a></li>
                <li><a href="./Calcul Alim Armoire.html">Alim Armoire</a></li>
                <li><a href="./Transfo.html">Transformateur</a></li>
                <li><a href="./index.html" style="color:blue;">Accueil</a></li>
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



