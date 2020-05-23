$(document).ready(function(){

  $(".dropdown-toggle__help").click(function(){
    $(".header-help").slideToggle(150);
    $(".header-customer-services").slideUp(150);
  });

  $(".dropdown-toggle__customer-services").click(function(){
    $(".header-customer-services").slideToggle(150);
    $(".header-help").slideUp(150);
  });


});
