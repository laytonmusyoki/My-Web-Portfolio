let menu=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menu.onclick =() => {
    menu.classList.toggle('#menu-icon');
    navbar.classList.toggle('open')
}

var typed = new Typed('.multiple', {
    strings: ['full stack web developer','UIX designer', 'Database Administrator','Data Administrator'],
    typeSpeed: 50,
    backspeed:50,
    backdelay:1000,
    loop:true
  });


  var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true
});