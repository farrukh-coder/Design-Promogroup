window.addEventListener('load', function (e) {
  var navButton = document.querySelector('.nav__button');
  var navMobile = document.querySelector('.mobile-nav');
  
  var navExit = document.querySelector('.exit-nav');
  
  var header = document.querySelector('header');
  var main = document.querySelector('main');
  var footer = document.querySelector('footer');
  var body = document.querySelector('body');
  
  navButton.addEventListener('click', function (e) {
    navMobile.classList.add('activate-nav');
    header.classList.add('blur');
    main.classList.add('blur');
    footer.classList.add('blur');
    body.classList.add('overflow-h');
    
  });
  
  navExit.addEventListener('click', function (e) {
    navMobile.classList.remove('activate-nav');
    header.classList.remove('blur');
    main.classList.remove('blur');
    footer.classList.remove('blur');
    body.classList.remove('overflow-h');
    
  });

});