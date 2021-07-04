$(document).ready(function () {

  for (i=1950; i<2010; i++) {
    $('.date-list').append('<div class="option"><p>'+i+'</p></div>')
  }
  
  var i = 0;

  $('.list label').click(function(){
    i++

    if (i%2!=0) {
      
      $('.list img').css('transform','rotate(0deg)');

      $('.date-list').css('height','365px');
    }
    if (i%2==0) {
      
      $('.list img').css('transform','rotate(180deg)');

      $('.date-list').css('height','0px');
    }
    
  })

  $('.option').click(function(){
    var t = $(this).text();
    
    $('.date-text').css('color','#000')

    $('.date-text').text(t);

    console.log($(this).text())
  })

  length = $('.js-colum__gradient').length;

  $('.level:eq(0)').click(function(){
    $('.js-line img').css('left','0%')
    for (i=0; i<length; i++) {
      $('.js-colum__gradient').css('width','0')
    }
  })
  $('.level:eq(1)').click(function(){
    $('.js-line img').css('left','23%')
    for (i=0; i<length; i++) {
      if (i<1) {
        $('.js-colum__gradient:eq('+i+')').css('width','100%')
      }
      else {
        $('.js-colum__gradient:eq('+i+')').css('width','0%')
      }
    }
  })

  $('.level:eq(2)').click(function(){
    $('.js-line img').css('left','48.5%')
    for (i=0; i<length; i++) {
      if (i<2) {
        $('.js-colum__gradient:eq('+i+')').css('width','100%')
      }
      else {
        $('.js-colum__gradient:eq('+i+')').css('width','0%')
      }
    }
  })

  $('.level:eq(3)').click(function(){
    $('.js-line img').css('left','97.3%')
    for (i=0; i<length; i++) {
      $('.js-colum__gradient').css('width','100%')
    }
  })

  var h = 0;
  $('.hamburger').click(function(){
    h++
    if (h%2!=0) {
      $('.header .header-nav').css('display','flex')
    }
    else {
      $('.header .header-nav').css('display','none')
    }
  })




})
