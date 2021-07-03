window.addEventListener('DOMContentLoaded', () => {
  const $btn = document.querySelector('button');
  const $box = document.querySelector('div');

  $btn.addEventListener('click', () => {
    console.log('Button Click');
    $box.classList.toggle('act');
  });
});