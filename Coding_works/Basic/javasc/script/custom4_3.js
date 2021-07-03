window.addEventListener('DOMContentLoaded', function() {
  const $menu = document.querySelector('.menu').children;

  let slideUp = (target, duration=3000) => {
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.boxSizing = 'border-box';
    target.style.height = target.offsetHeight + 'px';
    target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    window.setTimeout( () => {
      target.style.display = 'none';
      target.style.removeProperty('height');
      target.style.removeProperty('padding-top');
      target.style.removeProperty('padding-bottom');
      target.style.removeProperty('margin-top');
      target.style.removeProperty('margin-bottom');
      target.style.removeProperty('overflow');
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
      //alert("!");
    }, duration);
  };
  let slideDown = (target, duration=3000) => {
    target.style.removeProperty('display');
    let display = window.getComputedStyle(target).display;
  
    if (display === 'none')
      display = 'block';
  
    target.style.display = display;
    let height = target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.boxSizing = 'border-box';
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + 'ms';
    target.style.height = height + 'px';
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    window.setTimeout( () => {
      target.style.removeProperty('height');
      target.style.removeProperty('overflow');
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
    }, duration);
  };
  let slideToggle = (target, duration = 3000) => {
    if (window.getComputedStyle(target).display === 'none') {
      return slideDown(target, duration);
    } else {
      return slideUp(target, duration);
    }
  };

  let speedAnimation = 300;
  let targetId = document.getElementById("target");

  let slideBtnMouseover = (cl, sl) => 
  document.querySelector(cl).addEventListener('mouseover', () => sl(targetId, speedAnimation));
  let slideBtnMouseleave = (cl, sl) => 
  document.querySelector(cl).addEventListener('mouseleave', () => sl(targetId, speedAnimation));



  slideBtnMouseover('.triggerToggle', slideDown);
  slideBtnMouseleave('.triggerToggle', slideUp);


  // for(let i=0; i<$menu.length; i++) {
  //   $menu[i].addEventListener('mouseenter', function() {
  //     this.getElementsByClassName('sub-menu')[0].classList.add('show');
  //   })
  //   $menu[i].addEventListener('mouseleave', function() {
  //     this.getElementsByClassName('sub-menu')[0].classList.remove('show');
  //   })
  // }

  // $menu[0].addEventListener('mouseover', function() {
  //   $menu[1].getElementsByClassName('sub-menu')[0].classList.remove('show');
  //   this.getElementsByClassName('sub-menu')[0].classList.add('show');
  // });
  // $menu[0].addEventListener('mouseleave', function() {
  //   this.getElementsByClassName('sub-menu')[0].classList.remove('show');
  // });
});