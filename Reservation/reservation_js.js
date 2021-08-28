
$(document).ready(function(){

    $('.ui.accordion').accordion();

});


$(document).ready(function(){
    jalaliDatepicker.startWatch({
        minDate: "attr",
        maxDate: "attr"
      }); 
      setTimeout(function(){
        var elm = $('input[name="proposal_date"]');
        // elm.focus();
        jalaliDatepicker.hide();
        jalaliDatepicker.show(elm);
      }, 1000);
    });