$(document).ready(function(){
    
  jalaliDatepicker.startWatch({
      minDate: "attr",
      maxDate: "attr"
  }); 

  var elm = $('input[name="hse_calendar"]');
  jalaliDatepicker.hide();
  jalaliDatepicker.show(elm);
  
});



$(document).ready(function(){

  $(".bars_fixed").click(function(){
    $('.demo.sidebar')
        .sidebar('setting', 'transition', 'overlay')
        .sidebar('toggle');
  });

  $('.ui.dropdown').dropdown('hide');

  $('.ui.accordion').accordion();

  $('.ui.checkbox').checkbox();

  
});