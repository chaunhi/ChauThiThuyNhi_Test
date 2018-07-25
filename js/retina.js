/*---------Retina---------*/
$(function () {

   if(isRetina) {

       var images = $("img.retina ");

       for(var i = 0; i < images.length; i++) {

       var imageType = images[i].src.substr(-4);

       var imageName = images[i].src.substr(0, images[i].src.length - 4);

       imageName += "@2x" + imageType;

       images[i].src = imageName;

    }

 }

}