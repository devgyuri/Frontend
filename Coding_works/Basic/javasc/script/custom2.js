window.addEventListener('DOMContentLoaded', function(event) {
  const $box = document.querySelector('.box');

  document.querySelector('.show-btn').addEventListener('click', () => {
    $box.classList.add('show');
  });
  document.querySelector('.hide-btn').addEventListener('click', () => {
    $box.classList.remove('show');
  });
  document.querySelector('.toggle-btn').addEventListener('click', () => {
    console.log('toggle button');
    $box.classList.toggle('show');
    // $box의 class에 show가 없으면 add하고 있으면 remove한다.
    // CSS style을 지정할 때 id가 class보다 우선순위가 높으므로 주의 필요.
    // ex. box를 id로 지정하면 문제 발생 소지 높음.
  });
  document.querySelector('.fadeIn-btn').addEventListener('click', () => {
    $box.classList.add('fadeIn');
  });
  document.querySelector('.fadeOut-btn').addEventListener('click', () => {
    $box.classList.remove('fadeIn');
  });
  document.querySelector('.fadeToggle-btn').addEventListener('click', () => {
    $box.classList.toggle('fadeIn');
  });
})