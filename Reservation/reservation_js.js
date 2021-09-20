


$(document).ready(function(){
  jalaliDatepicker.startWatch({
      minDate: "today",
      maxDate: "attr"
    });
    var elm = $('input[name="calendar"]');
    jalaliDatepicker.hide();
    jalaliDatepicker.show(elm);


});



$(document).ready(function(){

  $('.ui.accordion').accordion();

});

// rgb(255, 62, 104) --- for red
const myChartData2 = {
  type: 'doughnut',
  data: {
    labels: ["تعداد ساعت رزرو شده", "تعداد ساعت آزاد"],
    datasets: [{
      data: [10, 2],
      backgroundColor: [
        'rgb(255, 62, 104)',
        'rgb(27, 226, 150)'
      ],
      borderColor: [
        'rgb(255, 62, 104)',
        'rgb(27, 226, 150)'
      ],
      borderWidth: 1
    }]
  },

  options: {

    plugins: {
      datalabels: {
        formatter: (value) => {
          return value + '%';
        }
      }
    },
      
    title: {
      display: true,
      text: "This is your 401(k) account's current asset mix"
    },

    animation: {
      animateScale: true,
      animateRotate: true
    },

    responsive: true,
    maintainAspectRatio: false   
  }

};


function createChart(chartId, chartData) {
  const ctx = document.getElementById(chartId);
  const myChart = new Chart(ctx, {
      type: chartData.type,
      data: chartData.data,
      options: chartData.options
  });
};


$(document).ready(function(){

  $('.ui.dropdown').dropdown('hide');

  $('.ui.progress')
  .progress({
    showActivity : false,
  });


  $('.ui.checkbox').checkbox();

  createChart('chart2', myChartData2);
  Chart.defaults.font.family = "Samim";

  $(".ui.dropdown.item_drop_down").click(function(){
      var x = $(this).children("input").val();
      if(x)
      {
        $(this).removeClass("font_light");
        $(this).removeClass("font_bold");
        $(this).addClass("font_bold");
      }
  });

});