$(document).ready(function() {

  var speed = 500; // Speed between images
  var autoswitch = true; // Auto slider option
  var autoswitchSpeed = 3000; // Auto slider speed

  // Add initial active class
  $('.slide').first().addClass('active');

  // Hide all slides
  $('.slide').hide();

  // Show first slide
  $('.active').show();

  $('#next').on('click', function() {
    $('.active').removeClass('active').addClass('oldActive');
      if($('.oldActive').is(':last-child')) {
        $('.slide').first().addClass('active')
      } else {
        $('.oldActive').next().addClass('active');
      }
      $('.oldActive').removeClass('oldActive');
      $('.slide').fadeOut(speed);
      $('.active').fadeIn(speed);
  });

  $('#previous').on('click', function() {
    $('.active').removeClass('active').addClass('oldActive');
      if($('.oldActive').is(':first-child')) {
        $('.slide').last().addClass('active')
      } else {
        $('.oldActive').prev().addClass('active');
      }
      $('.oldActive').removeClass('oldActive');
      $('.slide').fadeOut(speed);
      $('.active').fadeIn(speed);
  });

  if(autoswitch == true) {
    setInterval(function() {
      $('.active').removeClass('active').addClass('oldActive');
        if($('.oldActive').is(':last-child')) {
          $('.slide').first().addClass('active')
        } else {
          $('.oldActive').next().addClass('active');
        }
        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
    }, autoswitchSpeed)
  }
});
