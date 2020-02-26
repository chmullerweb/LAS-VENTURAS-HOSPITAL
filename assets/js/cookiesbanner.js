document.querySelector('.accept').addEventListener('click', function(){
  alert('Vous avez accepté les cookies.');
  document.querySelector('.accept').remove();
});

document.querySelector('.refuse').addEventListener('click', function(){
  alert('Vous avez refusé les cookies.');
});

document.querySelector('img').addEventListener('mouseover', function(){
  alert('J\'ai été survolée !');
});

document.querySelector('.bgcolor_button').addEventListener('click', function changerCouleurDeFond (couleur){
    document.getElementById("bgcolor").style.backgroundColor='red';
});

document.querySelector('.name_button').addEventListener('click', function changerCouleurDuTexte (couleur){
    document.getElementById("name").style.color='blue';
});


// Et pour demain, vous pouvez vous entraîner sur l'exercice de "thème clair" / "thème sombre".
// Pour cet exercice, le but est de coder la fonctionalité suivante :
// - Il doit y avoir deux boutons en haut de la page : un bouton « Thème clair » et un bouton « Thème sombre ».
// - Quand on clique sur le bouton « Thème clair », les textes de la page doivent s’afficher en noir sur fond blanc.
// - Quand on clique sur le bouton « Thème sombre », les textes de la page doivent s’afficher en blanc sur fond noir.
// Vous pouvez utiliser toutes les manières que vous voulez pour ça,
// tant que ça fonctionne :)
