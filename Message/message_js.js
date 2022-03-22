



$(document).ready(function(){

  $(".bars_fixed").click(function(){
    $('.demo.sidebar')
        .sidebar('setting', 'transition', 'overlay')
        .sidebar('toggle');
  });

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


  $(".regular, .necessary, .urgent").click(function(){
    $(".regular").removeClass("active_span");
    $(".necessary").removeClass("active_span");
    $(".urgent").removeClass("active_span");

    $(this).addClass("active_span");
  });

  $('.file_button').click(function(){
    event.preventDefault();
    $("input[type='file']").trigger('click');
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
      document.querySelector('.file_text').textContent = "فایلی انتخاب نشده است";
      $(".file_submit_div .x.icon").removeClass("display_none");
      $(".file_submit_div .x.icon").addClass("display_none");
    }
    
  });

  $('.file_submit_div .x.icon').click(function(){
    // $('#files').val('');
    console.log("The files info is ", $("#files")[0].files[0]);
    var filename = $('input[type=file]').val().split('\\').pop();
    console.log("The files Name is ", filename);
    console.log("The files list is ", $("#files")[0].files);

    $('#files').val('');
    console.log("َ----- After Delete -----");
    document.querySelector('.file_text').textContent = "فایلی انتخاب نشده است";
    $(".file_submit_div .x.icon").removeClass("display_none");
    $(".file_submit_div .x.icon").addClass("display_none");

    console.log("The files info is ", $("#files")[0].files[0]);
    var filename = $('input[type=file]').val().split('\\').pop();
    console.log("The files Name is ", filename);
    console.log("The files list is ", $("#files")[0].files);
    
  });

  
});