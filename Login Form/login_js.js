


$(document).ready(function(){

    $('.message .close').on('click', function(){
        $(this).closest('.message').transition('fade');
    });

    $(".submit_btn").click(function(){

        $('input[name="username"]').removeClass("error");
        $('input[name="password"]').removeClass("error");

        if($('input[name="username"]').val()=="")
        {
            event.preventDefault();
            $('input[name="username"]').parent().addClass("error");
        }

        if($('input[name="password"]').val()=="")
        {
            event.preventDefault();
            $('input[name="password"]').parent().addClass("error");
        }

    });
    

});