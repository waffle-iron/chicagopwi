$( document ).ready(function() {
  if ($("body.home").length > 0){
  	$('.nav_home').addClass('active');
  	$('.big-logo').removeClass('hidden');
  	$('.header-sticky').removeClass('header-fixed-shrink');
  	$('.small-logo').addClass('visible-xs-block').addClass('visible-sm-block');
  	$('.nav.navbar-nav').addClass('big-nav');
  }
  else if ($("body.services").length > 0){
  	$('.nav_services').addClass('active');
  }
  else if ($("body.about").length > 0){
  	$('.nav_about').addClass('active');
  }
  else if ($("body.billing").length > 0){
  	$('.nav_billing').addClass('active');
  }
  else if ($("body.faq").length > 0){
  	$('.nav_faq').addClass('active');
  }
  else if ($("body.blog").length > 0){
  	$('.nav_blog').addClass('active');
  }
});