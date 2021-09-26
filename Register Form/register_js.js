
$(document).ready(function(){
    
    jalaliDatepicker.startWatch({
        minDate: "attr",
        maxDate: "attr"
    }); 
  
    var elm = $('input[name="proposal_date"]');
    jalaliDatepicker.hide();
    jalaliDatepicker.show(elm);
    
});



function dist_email(str)
{
    var str1 = str.substr(-10);
    var str2 = str.substr(-12);
    if (str1 == "@yahoo.com")
    {
        $(".ui.label.email_lbl").html("<img src='../Static/pic/yahoo3.png' class='email_image ui small image'>");
    }

    else if (str2 == "@outlook.com")
    {
        $(".ui.label.email_lbl").html("<img src='../Static/pic/outlook2.png' class='email_image ui medium image'>");
    }

    else if (str1 == "@gmail.com")
    {
        $(".ui.label.email_lbl").html("<img src='../Static/pic/google_logo.png' class='email_image ui medium image'>");
    }

    else
    {
        $(".ui.label.email_lbl").html("");
    }
}


$(document).ready(function(){

    $("input[name='email']").keyup(function(){

        var email_addr = $(this).val();
        dist_email(email_addr);

    });

    $('.ui.dropdown').dropdown('hide');

    $(".ui.dropdown.item_drop_down").click(function(){
        var x = $('input[name="master"]').val();
        if(x == "1" || x == "0")
        {
            $(".item_drop_down").removeClass("font_light");
            $(".item_drop_down").removeClass("font_bold");
            $(".item_drop_down").addClass("font_bold");
        }
    });

    $(".student_free_menu .item").click(function(){
        $(".item").removeClass("active");
        $(this).addClass("active");
    });

    $(".free_menu").click(function(){
        $(".student_form").addClass("display_none");
        $(".free_form").addClass("display_none");
        $(".free_form").removeClass("display_none");
    });

    $(".student_menu").click(function(){
        $(".free_form").addClass("display_none");
        $(".student_form").addClass("display_none");
        $(".student_form").removeClass("display_none");
    });

});