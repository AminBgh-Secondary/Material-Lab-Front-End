
$(document).ready(function(){
  
  jalaliDatepicker.startWatch({
    minDate: "today",
    maxDate: "attr"
  });
  var elm = $('input[name="calendar"]');
  jalaliDatepicker.hide();
  jalaliDatepicker.show(elm);

});

function hide_less_values(x)
{
  var elems = $(".div_end_time .menu .item");
  for(var i = 0; i < elems.length; i++)
  {
    $(".div_end_time .menu .item").eq(i).removeClass('display_none');
    if(i + 1 < x)
    {
      $(".div_end_time .menu .item").eq(i).addClass("display_none");
    }
  }
  // console.log(elems);
}

function remove_class_disable(x)
{
  if(x == 1)
  {
    $(".div_start_time label").removeClass("disabled_label");
    $(".div_start_time .ui.fluid.dropdown.item_drop_down").removeClass("disabled");

    $(".div_start_time .menu .item").removeClass("active");
    $(".div_start_time .menu .item").removeClass("selected");
    $(".div_start_time .item_drop_down option[value='']").attr('selected', 'selected');
    

    $(".div_start_time .item_drop_down .text").html('انتخاب کنید');
    $(".div_start_time .item_drop_down .text").addClass('placeholder_text_color');
    $(".div_start_time .ui.fluid.dropdown.item_drop_down").removeClass("font_bold");

    $(".submit_btn").addClass('disabled');
  }

  else if(x == 2)
  {
    $(".div_end_time label").removeClass("disabled_label");
    $(".div_end_time .ui.fluid.dropdown.item_drop_down").removeClass("disabled");

    $(".div_end_time .menu .item").removeClass("active");
    $(".div_end_time .menu .item").removeClass("selected");
    $(".div_end_time .item_drop_down option[value='']").attr('selected', 'selected');

    $(".div_end_time .item_drop_down .text").html('انتخاب کنید');
    $(".div_end_time .item_drop_down .text").addClass('placeholder_text_color');
    $(".div_end_time .ui.fluid.dropdown.item_drop_down").removeClass("font_bold");
  }
}

$(document).ready(function(){

  $('.ui.dropdown').dropdown('hide');

  $('.ui.accordion').accordion();

  $('.ui.checkbox').checkbox();

  $(".div_start_time .ui.fluid.dropdown.item_drop_down").change(function(){
    $(".div_start_time .item_drop_down .text").removeClass('placeholder_text_color');
    $(this).addClass("font_bold");
    remove_class_disable(2);
    var x = $(".div_start_time .item_drop_down option:selected").val();
    hide_less_values(x);
  });

  $(".div_end_time .ui.fluid.dropdown.item_drop_down").change(function(){
    $(".div_end_time .item_drop_down .text").removeClass('placeholder_text_color');
    $(this).addClass("font_bold");

    $(".submit_btn").removeClass('disabled');
  });

  $("input[name='calendar']").change(function(){
    remove_class_disable(1);
    // ------
    $(".div_end_time label").addClass("disabled_label");
    $(".div_end_time .ui.fluid.dropdown.item_drop_down").addClass("disabled");
    
    $(".div_end_time .menu .item").removeClass("active");
    $(".div_end_time .menu .item").removeClass("selected");
    $(".div_end_time .item_drop_down option[value='']").attr('selected', 'selected');

    $(".div_end_time .item_drop_down .text").html('انتخاب کنید');
    $(".div_end_time .item_drop_down .text").addClass('placeholder_text_color');
    $(".div_end_time .ui.fluid.dropdown.item_drop_down").removeClass("font_bold");

    // var x = $(".div_start_time .item_drop_down option:selected").val();
    // alert(x);
  });


  $(".individual_input").focus(function() {
    $(this).css("border-color", "rgb(150, 200, 218)");
  });

  $(".individual_input").blur(function() {
    $(this).css("border-color", "rgba(34,36,38,.15)");
  });

  $(".submit_btn").click(function() {
    event.preventDefault();
    var x = $('form').serialize();
    console.log(x);

    var allData=$("form").serializeArray();
    console.log(allData[0])

    // Ajax Begins
    // $.ajax({
    //   url:"http://api.hocshirazu.ir/api/registration/create",
    //   method:"POST",
    //   data:JSON.stringify(data),
    //   contentType:"application/json",
    //   dataType:"json",
    //   success: function(response)
    //   {
    //     console.log(response);
    //     $.ajax({

    //       url:"http://api.hocshirazu.ir/api/payment/request",
    //       method:"POST",
    //       data:JSON.stringify({"national_code": response.national_code}),
    //       contentType:"application/json",
    //       dataType:"json",
    //       success: function(response)
    //       {
    //           console.log(response);
    //           //responseObject = new Response();
    //           window.location.replace(response);
    //           console.log("1");
    //       }
    //     });
    //   }
    // });
    // Ajax Ends

  });
  
});