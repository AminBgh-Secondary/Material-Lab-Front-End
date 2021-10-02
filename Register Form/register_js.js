
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

    $(".ui.dropdown.item_drop_down2").click(function(){
        var x = $('input[name="degree"]').val();
        if(x == "2" || x == "1" || x == "0")
        {
            $(".item_drop_down2").removeClass("font_light");
            $(".item_drop_down2").removeClass("font_bold");
            $(".item_drop_down2").addClass("font_bold");
        }

        if(x == "2" || x == "1")
        {
            $("#the_calendar").removeClass("display_none");
            $("#phone_std").removeClass("item2");
            $("#phone_std").addClass("item1");
        }

        if(x == "0")
        {
            $("#the_calendar").addClass("display_none");
            $("#phone_std").removeClass("item1");
            $("#phone_std").addClass("item2");
        }
    });

    $(".student_free_menu .item").click(function(){
        $(".student_free_menu .item").removeClass("active");
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





    $('.file_button').click(function(){
        event.preventDefault();
        $("#files").trigger('click');
    });
    
    const file = document.querySelector('#files');
    file.addEventListener('change', (e) => {
        
    // Get the selected file
    const exist_file = $("#files")[0].files[0];
    if(exist_file)  // File Exists
    {
        const [file] = e.target.files;
        // Get the file name and size
        const { name: fileName, size } = file;
        
        console.log("Target file is :" + fileName);
        // Convert size in bytes to kilo bytes
        const fileSize = (size / 1000).toFixed(2);
        // Set the text content
        const fileNameAndSize = `${fileName} - ${fileSize}KB`;
        document.querySelector('.file_text').textContent = fileNameAndSize;

        $(".file_submit_div .x.icon").removeClass("display_none");
    }

    else  // File Doesn't Exist
    {
        console.log("Target file is : Empty");
        document.querySelector('.file_text').textContent = "عکس کاربری";
        $(".file_submit_div .x.icon").removeClass("display_none");
        $(".file_submit_div .x.icon").addClass("display_none");
    }
    
    });

    $('.file_submit_div .x.icon').click(function(){
        $('#files').val('');
        document.querySelector('.file_text').textContent = "عکس کاربری";
        $(".file_submit_div .x.icon").removeClass("display_none");
        $(".file_submit_div .x.icon").addClass("display_none");
    });





    $('.free_file_button').click(function(){
        event.preventDefault();
        $("#free_files").trigger('click');
    });
    
    const free_file = document.querySelector('#free_files');
    free_file.addEventListener('change', (e) => {
        
    // Get the selected file
    const exist_file = $("#free_files")[0].files[0];
    if(exist_file)  // File Exists
    {
        const [free_file] = e.target.files;
        // Get the file name and size
        const { name: fileName, size } = free_file;
        
        console.log("Target file is :" + fileName);
        // Convert size in bytes to kilo bytes
        const fileSize = (size / 1000).toFixed(2);
        // Set the text content
        const fileNameAndSize = `${fileName} - ${fileSize}KB`;
        document.querySelector('.free_file_text').textContent = fileNameAndSize;

        $(".free_file_submit_div .x.icon").removeClass("display_none");
    }

    else  // File Doesn't Exist
    {
        console.log("Target file is : Empty");
        document.querySelector('.free_file_text').textContent = "عکس کاربری";
        $(".free_file_submit_div .x.icon").removeClass("display_none");
        $(".free_file_submit_div .x.icon").addClass("display_none");
    }
    
    });

    $('.free_file_submit_div .x.icon').click(function(){
        $('#free_files').val('');
        document.querySelector('.free_file_text').textContent = "عکس کاربری";
        $(".free_file_submit_div .x.icon").removeClass("display_none");
        $(".free_file_submit_div .x.icon").addClass("display_none");
    });
    

});