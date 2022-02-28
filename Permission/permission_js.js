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

  $('.ui.dropdown').dropdown('hide');

  $('.ui.accordion').accordion();

  $('.ui.checkbox').checkbox();

  
});