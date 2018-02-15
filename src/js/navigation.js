var navigation;
const button = document.querySelector(".menu-button"),
      menu = document.querySelector(".menu");

// button.addEventListener('click', () => menu.classList.toggle("is-open"));
button.addEventListener('click', function(){
      menu.classList.toggle("is-open");
      button.classList.toggle("close");
});

export default navigation;