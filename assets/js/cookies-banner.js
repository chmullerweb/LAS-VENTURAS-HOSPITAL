document.querySelector('.accept').addEventListener('click', function(){
  alert('Bienvenue chez Las Venturas Hospital');
});

document.querySelector('.refuse').addEventListener('click', function(){
  confirm('Oh trop dommage ! Vous êtes sûr(e) ?');
  remove()
});
