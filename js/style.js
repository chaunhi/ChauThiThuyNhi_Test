  /*-------change icon-------*/
  function myFunction(x) {
  	x.classList.toggle("change");
  }
  /*-------black-top-------*/
  $('a.black-top').click(function (e) {
  	e.preventDefault();
  	$(document.body).animate({scrollTop: 0}, 800);
  });
/*---------Retina---------*/
var isRetina = (

window.devicePixelRatio > 1 ||

(window.matchMedia && window.matchMedia("(-webkit-min-device-pixel-ratio: 1.5),(-moz-min-device-pixel-ratio: 1.5),(min-device-pixel-ratio: 1.5)").matches)

);
