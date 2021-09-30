



$(document).ready(function(){

  $('.ui.dropdown').dropdown('hide');

  $('.ui.accordion').accordion();

  $('.ui.checkbox').checkbox();

  $(".message_type_menu .item").click(function(){
    $(".message_type_menu .item").removeClass("active");
    $(this).addClass("active");
  });

  $(".each_message").addClass("border_bottom");
  $(".each_message:last").removeClass("border_bottom");
  $(".read_message:last-of-type").addClass("border_bottom");


  $(".read_types").click(function(){
    $(".each_message").addClass("display_none");
    $(".read_message").removeClass("display_none");
  });

  $(".unread_types").click(function(){
    $(".each_message").addClass("display_none");
    $(".unread_message").removeClass("display_none");

    $(".unread_message:last").removeClass("border_bottom");
  });

  $(".all_types").click(function(){
    $(".each_message").removeClass("display_none");

    $(".unread_message:last").addClass("border_bottom");
    $(".unread_message:last-of-type").removeClass("border_bottom");
  });

});