var scroll;

window.onscroll = function changeNav(){
  var nav = document.querySelector('.menu-button');
  var body = document.querySelector('body');
        if((body.getBoundingClientRect().top) < -10){
          nav.classList.add("bgchanged");
        } else {
          if(nav.classList.contains("bgchanged")){
            nav.classList.remove("bgchanged");
          }
        }
}



export default scroll;