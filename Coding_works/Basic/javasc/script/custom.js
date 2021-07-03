// window.onload = function(event) ();
window.addEventListener('DOMContentLoaded', function(event) {
  const $div = document.querySelector('div');

  document.querySelector('.show-btn').addEventListener('click', function() {
    // $div.style.display = 'block';
    $div.style.visibility = 'visible';
  });
  document.querySelector('.hide-btn').addEventListener('click', function() {
    // $div.style.display = 'none';
    $div.style.visibility = 'hidden';
  });
  document.querySelector('.btn').addEventListener('mouseover', function() {
    $div.style.visibility = 'visible';
  });
  document.querySelector('.btn').addEventListener('mouseleave', function() {
    $div.style.visibility = 'hidden';
  });
});