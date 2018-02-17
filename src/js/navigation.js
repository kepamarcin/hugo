var navigation;
const button = document.querySelector(".menu-button"),
      menu = document.querySelector(".menu");

// button.addEventListener('click', () => menu.classList.toggle("is-open"));
button.addEventListener('click', function(){
      menu.classList.toggle("is-open");
      this.classList.toggle("close");
      this.classList.add("animation");
  
});


function myEndFunction(){
      this.classList.remove("animation");
}
button.addEventListener("animationend", myEndFunction);

export default navigation;