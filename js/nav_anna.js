function openNav() {
  document.getElementById('navbar').classList.add('show_nav');
  document.getElementById('open_nav').classList.add('z-index_neg_anna');
  document.getElementById('close_nav').classList.add('z-index0_anna');
  document.getElementById('noscroll').classList.add('noscroll');
  document.getElementById('header').classList.add('adapt_width');
  document.getElementById('nav_layer').classList.add('nav_layer');
}

function closeNav() {
  document.getElementById('navbar').classList.remove('show_nav');
  document.getElementById('open_nav').classList.remove('z-index_neg_anna');
  document.getElementById('close_nav').classList.remove('z-index0_anna');
  document.getElementById('noscroll').classList.remove('noscroll');
  document.getElementById('header').classList.remove('adapt_width');

  document.getElementById('nav_layer').style = 'background-color: transparent;';
  setTimeout(function () {
    document.getElementById('nav_layer').classList.remove('nav_layer');
    document.getElementById('nav_layer').style = '';
  }, 400);
}
