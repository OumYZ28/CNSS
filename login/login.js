// Sélectionnez le bouton par son ID
const validerButton = document.getElementById('validerButton');

// Ajoutez un événement "click" au bouton
validerButton.addEventListener('click', function (event) {
    event.preventDefault(); // Empêche le comportement par défaut (soumission du formulaire)
    window.location.href = '../acceuil/Identifier.html'; // Redirige vers la page d'accueil
});
