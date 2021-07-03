window.addEventListener('DOMContentLoaded', function() {
  const $menu = document.querySelector('.menu').children;

  for(let i=0; i<$menu.length; i++) {
    $menu[i].addEventListener('mouseenter', function() {
      this.getElementsByClassName('sub-menu')[0].classList.add('show');
      // this.getElementsByClassName('sub-menu')[0].classList.remove('show');
    })
    $menu[i].addEventListener('mouseleave', function() {
      this.getElementsByClassName('sub-menu')[0].classList.remove('show');
    })
  }

  // $menu[0].addEventListener('mouseover', function() {
  //   $menu[1].getElementsByClassName('sub-menu')[0].classList.remove('show');
  //   this.getElementsByClassName('sub-menu')[0].classList.add('show');
  // });
  // $menu[0].addEventListener('mouseleave', function() {
  //   this.getElementsByClassName('sub-menu')[0].classList.remove('show');
  // });
});