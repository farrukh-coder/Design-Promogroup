window.addEventListener('load', function (e) {
  mainBlock = document.querySelectorAll('.main__block');
  
  for(var i = 0; i < mainBlock.length; i++){
    mainBlock[i].addEventListener('mouseover', function () {
      this.classList.add('block__hover');
    });
    
    mainBlock[i].addEventListener('mouseout', function () {
      this.classList.remove('block__hover');
    });
}

});