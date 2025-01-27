const hamburger = document.getElementById('menu-mobile'); // Botão do menu
const nav = document.querySelector('.mobile-items'); // Menu mobile
const icon = document.getElementById('icon-mobile'); // Ícone dentro do botão

hamburger.addEventListener('click', () => {
  // Alternar a classe 'open' no menu mobile
  nav.classList.toggle('open');

  if (nav.classList.contains('open')) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-close');
  } else {
    icon.classList.remove('fa-close');
    icon.classList.add('fa-bars');
  }
});
