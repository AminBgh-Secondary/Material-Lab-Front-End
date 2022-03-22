



$(document).ready(function(){

  $(".bars_fixed").click(function(){
    $('.demo.sidebar')
        .sidebar('setting', 'transition', 'overlay')
        .sidebar('toggle');
  });

  $('.ui.dropdown').dropdown('hide');

  $('.ui.accordion').accordion();

  $('.ui.checkbox').checkbox();

  $('.dotted_divider:last').addClass('display_none');
  
});