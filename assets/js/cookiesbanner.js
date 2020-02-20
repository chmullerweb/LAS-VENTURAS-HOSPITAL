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
