// general syntax

$(document).ready(function(){
// custom jquery stuff
$(".hamburger").click(function(){
  $(this).toggleClass('active');
  $(".mobile-nav").slideToggle();
});



});
