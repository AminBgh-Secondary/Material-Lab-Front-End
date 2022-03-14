
$(document).ready(function(){

    $(".bars_fixed").click(function(){
        $('.demo.sidebar')
            .sidebar('setting', 'transition', 'overlay')
            .sidebar('toggle');
    });

    $('.ui.accordion').accordion();

});