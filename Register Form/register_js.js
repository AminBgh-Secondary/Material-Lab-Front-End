
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
        // $("input[name='email']").removeClass("email_align2");
        // $("input[name='email']").removeClass("email_align");
        // $("input[name='email']").addClass("email_align2");
    }

    else if (str2 == "@outlook.com")
    {
        $(".ui.label.email_lbl").html("<img src='../Static/pic/outlook2.png' class='email_image ui medium image'>");
        // $("input[name='email']").removeClass("email_align2");
        // $("input[name='email']").removeClass("email_align");
        // $("input[name='email']").addClass("email_align2");
    }

    else if (str1 == "@gmail.com")
    {
        $(".ui.label.email_lbl").html("<img src='../Static/pic/google_logo.png' class='email_image ui medium image'>");
        // $("input[name='email']").removeClass("email_align2");
        // $("input[name='email']").removeClass("email_align");
        // $("input[name='email']").addClass("email_align2");
    }

    else
    {
        $(".ui.label.email_lbl").html("");
        // $("input[name='email']").removeClass("email_align2");
        // $("input[name='email']").removeClass("email_align");
        // $("input[name='email']").addClass("email_align");
    }
}


$(document).ready(function(){

    $("input[name='email']").keyup(function(){

        var email_addr = $(this).val();
        dist_email(email_addr);

    });

    // $('.ui.dropdown').dropdown('show');
    $('.ui.dropdown').dropdown('hide');

    // $(".ui.dropdown").click(function(){
    //     $('.ui.dropdown').dropdown('show');
    // });

    $(".ui.dropdown.item_drop_down").click(function(){
        var x = $('input[name="master"]').val();
        if(x == "1" || x == "0")
        {
            $(".item_drop_down").removeClass("font_light");
            $(".item_drop_down").removeClass("font_bold");
            $(".item_drop_down").addClass("font_bold");
        }
    });

});