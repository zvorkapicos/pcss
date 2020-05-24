$(document).ready(function(){

  // Topbar help dropdown
  $(".toggle-help").click(function(){
    $(event.currentTarget).toggleClass("toggle-active");
    $(".header-help").slideToggle(150);

  // This closes the customer services dropdown
    $(".toggle-customer-services").removeClass("toggle-active");
    $(".header-customer-services").slideUp(150);
  });

  // Topbar customer services dropdown
  $(".toggle-customer-services").click(function(){
    $(event.currentTarget).toggleClass("toggle-active");
    $(".header-customer-services").slideToggle(150);;

  // This closes the hel dropdown
    $(".toggle-help").removeClass("toggle-active");
    $(".header-help").slideUp(150);
  });

});
