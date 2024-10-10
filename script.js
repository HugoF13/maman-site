const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');

// Fonction pour déplacer le bouton "Non"
noBtn.addEventListener('mouseover', () => {
    const buttonsContainer = document.querySelector('.buttons');
    const containerWidth = buttonsContainer.offsetWidth;
    const containerHeight = buttonsContainer.offsetHeight;
    const buttonWidth = noBtn.offsetWidth;
    const buttonHeight = noBtn.offsetHeight;
    
    // Calculer des positions aléatoires dans le cadre
    const newX = Math.random() * (containerWidth - buttonWidth);
    const newY = Math.random() * (containerHeight - buttonHeight);

    // Appliquer les nouvelles positions
    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
});

// Redirection après avoir cliqué sur "Oui"
yesBtn.addEventListener('click', () => {
    window.location.href = 'reponse.html'; // Redirige vers la page de réponse
});
