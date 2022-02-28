



$(document).ready(function(){

  $('.ui.dropdown').dropdown('hide');

  $('.ui.accordion').accordion();

  $('.ui.checkbox').checkbox();

  $(".ui.dropdown.item_drop_down").click(function(){
    var x = $(this).children("input").val();
    if(x)
    {
      $(this).removeClass("font_light");
      $(this).removeClass("font_bold");
      $(this).addClass("font_bold");
    }
  });

  $(".ui.button.promote_official").click(function(){
    $('#official_modal').modal('show');
  })

  
});