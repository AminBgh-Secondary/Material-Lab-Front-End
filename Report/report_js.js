
$(document).ready(function(){
  
  jalaliDatepicker.startWatch({
    // minDate: "1400-12-12",
    maxDate: "attr",
    zIndex: 99999
  });
  var elm1 = $('input[name="calendar1"]');
  jalaliDatepicker.hide();
  jalaliDatepicker.show(elm1);

  var elm2 = $('input[name="calendar2"]');
  jalaliDatepicker.hide();
  jalaliDatepicker.show(elm2);

});


function remove_class_disable_reserve()
{
  $("#reserve_modal .div_equipment label").removeClass("disabled_label");
  $("#reserve_modal .div_equipment .ui.fluid.item_multiple").removeClass("disabled");

  $("#reserve_modal .div_equipment .menu .item").removeClass("active");
  $("#reserve_modal .div_equipment .menu .item").removeClass("selected");
  $("#reserve_modal .div_equipment .item_drop_down option[value='']").attr('selected', 'selected');

  $("#reserve_modal .div_equipment .item_drop_down .text").html('انتخاب کنید');
  $("#reserve_modal .div_equipment .item_drop_down .text").addClass('placeholder_text_color');
  $("#reserve_modal .div_equipment .ui.fluid.item_multiple").removeClass("font_bold");

  // $("#reserve_modal .div_equipment .equipment_dp .menu .item").removeClass("active");
}

function remove_class_disable_tool()
{
  $("#tool_modal .div_equipment label").removeClass("disabled_label");
  $("#tool_modal .div_equipment .ui.fluid.item_multiple").removeClass("disabled");

  $("#tool_modal .div_equipment .menu .item").removeClass("active");
  $("#tool_modal .div_equipment .menu .item").removeClass("selected");
  $("#tool_modal .div_equipment .item_drop_down option[value='']").attr('selected', 'selected');

  $("#tool_modal .div_equipment .item_drop_down .text").html('انتخاب کنید');
  $("#tool_modal .div_equipment .item_drop_down .text").addClass('placeholder_text_color');
  $("#tool_modal .div_equipment .ui.fluid.item_multiple").removeClass("font_bold");

  // $("#reserve_modal .div_equipment .equipment_dp .menu .item").removeClass("active");
}


$(document).ready(function(){

  $(".bars_fixed").click(function(){
    $('.demo.sidebar')
        .sidebar('setting', 'transition', 'overlay')
        .sidebar('toggle');
  });

  // $('#reserve_modal .laboratory_dp').dropdown('hide');
  $('.ui.dropdown').dropdown('hide');

  $('#reserve_modal .equipment_dp').dropdown({
    useLabels: false,
    message: {
      count         : '{count} وسیله انتخاب  شد'
    }
  });

  $('#tool_modal .equipment_dp').dropdown({
    useLabels: false,
    message: {
      count         : '{count} وسیله انتخاب  شد'
    }
  });

  $('#reserve_modal .student_dp').dropdown({
    useLabels: false,
    message: {
      count         : '{count} دانشجو انتخاب  شد'
    }
  });

  $('#reserve_modal .status_dp').dropdown({
    useLabels: false,
    message: {
      count         : '{count} وضعیت انتخاب  شد'
    }
  });

  $('#tool_modal .status_dp').dropdown({
    useLabels: false,
    message: {
      count         : '{count} وضعیت انتخاب  شد'
    }
  });

  $('.ui.accordion').accordion();

  $('.ui.checkbox').checkbox();

  $(".ui.dropdown.item_drop_down").click(function(){
    var x = $(this).children("input").val();
    if(x)
    {
      $(this).removeClass("font_light");
      $(this).removeClass("font_bold");
      // $(this).addClass("font_bold");
    }
  });

  $("#reserve_base").click(function(){
    $('#reserve_modal').modal('show');
  });

  $("#tool_base").click(function(){
    $('#tool_modal').modal('show');
  });

  $("#reserve_modal .div_laboratory .ui.fluid.dropdown.item_drop_down").change(function(){
    $("#reserve_modal .div_laboratory .item_drop_down .text").removeClass('placeholder_text_color');
    // $(this).addClass("font_bold");
    remove_class_disable_reserve();
    var x = $("#reserve_modal .div_laboratory .item_drop_down option:selected").val();
  });

  $("#tool_modal .div_laboratory .ui.fluid.dropdown.item_drop_down").change(function(){
    $("#tool_modal .div_laboratory .item_drop_down .text").removeClass('placeholder_text_color');
    // $(this).addClass("font_bold");
    remove_class_disable_tool();
    var x = $("#tool_modal .div_laboratory .item_drop_down option:selected").val();
  });

  $("#reserve_modal .div_equipment .ui.fluid.item_multiple").change(function(){
    $("#reserve_modal .div_equipment .item_drop_down .text").removeClass('placeholder_text_color');
    $(this).removeClass("font_bold");
    var x = $("#reserve_modal .div_equipment .ui.fluid.item_multiple option:selected").val();
    if(x)
    {
      // $(this).addClass("font_bold");
    }
  });

  $("#tool_modal .div_equipment .ui.fluid.item_multiple").change(function(){
    $("#tool_modal .div_equipment .item_drop_down .text").removeClass('placeholder_text_color');
    $(this).removeClass("font_bold");
    var x = $("#tool_modal .div_equipment .ui.fluid.item_multiple option:selected").val();
    if(x)
    {
      // $(this).addClass("font_bold");
    }
  });

  
});