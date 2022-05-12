var toggleSize = true;


$('.uk-button').on('click', function() {
  $('iframe').animate({
    width: toggleSize ? 356 : 640,
    height: toggleSize ? 200 : 360
  }, 250);

  toggleSize = !toggleSize;

});
