var scroll;

window.onscroll = function changeNav(){
  var nav = document.querySelector('.menu-button');
  var body = document.querySelector('body');
        if((body.getBoundingClientRect().top) < -10){
          nav.classList.add("bgchanged");
          let fired = false;
          if( fired = false){
            var imgDefer = document.querySelectorAll('.lazy');
            for (var i=0; i<imgDefer.length; i++) {
            if(imgDefer[i].getAttribute('data-src')) {
            imgDefer[i].setAttribute('src',imgDefer[i].getAttribute('data-src'));
            } }
            fired = true;
          }
        } else {
          if(nav.classList.contains("bgchanged")){
            nav.classList.remove("bgchanged");
          }
        }
}



export default scroll;