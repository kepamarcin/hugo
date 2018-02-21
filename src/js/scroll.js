var scroll;

window.onscroll = function changeNav(){
  var nav = document.querySelector('.menu-button');
  var body = document.querySelector('body');
       console.log(body.getBoundingClientRect().top);
        if((body.getBoundingClientRect().top) < 10){
          nav.classList.add("bgchanged");
        } else {
          console.log("change");
          
        }

  // if(secondSectionTop <= navBarHeight) {
  //       navBar.className = ('basic-classname');
  // } else if(aboutSectionTop >= navBarHeight) {
  //      navBar.className =  ('basic-classname added-classname');
  // }
}



export default scroll;