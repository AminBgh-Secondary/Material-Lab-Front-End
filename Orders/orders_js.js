



$(document).ready(function(){

  $('.ui.dropdown').dropdown('hide');

  $('.ui.accordion').accordion();

  $('.ui.checkbox').checkbox();

  $('.ui.rating').rating({
    initialRating: 2,
    maxRating: 5
  });

  $(".poll_btn").click(function(){
    $('#rating_modal').modal('show');
  });

  $(".submit_btn").click(function(){
    var rate1 = $('.star1').rating('get rating');
    $("input[name='rate1']").val(rate1);

    var rate2 = $('.star2').rating('get rating');
    $("input[name='rate2']").val(rate2);

    var rate3 = $('.star3').rating('get rating');
    $("input[name='rate3']").val(rate3);

    // $('#rate_form').submit();
    console.log($('#rate_form').serializeArray());
  });
  
});