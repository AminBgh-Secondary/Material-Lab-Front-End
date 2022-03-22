



$(document).ready(function(){

  $(".bars_fixed").click(function(){
    $('.demo.sidebar')
        .sidebar('setting', 'transition', 'overlay')
        .sidebar('toggle');
  });

  $('.ui.dropdown').dropdown('hide');

  $('.ui.accordion').accordion();

  $('.ui.checkbox').checkbox();

  // $('.div_body2 .dotted_divider:last, .div_body1 .dotted_divider:last').addClass('display_none');
  
});