
Chart.defaults.global.defaultFontColor = 'black';
Chart.defaults.global.defaultFontFamily = 'Rubik', 'sans-serif';
Chart.defaults.global.maintainAspectRatio = false;
Chart.defaults.global.elements.point.pointStyle = 'crossRot';
Chart.defaults.global.elements.line.tension = 0.0;


var context = document.getElementById('chart').getContext('2d');
var chart = new Chart(context, {
  // the type of chart we are creating
  type: 'line',
  // the data for our dataset
  data: {
    labels: [1700, 1800, 1900, 2000],
    datasets: [{
      label: 'Revenue Returns by Century',
      backgroundColor: 'rgba(255, 99, 123, 0.5)',
      borderColor: 'rgb(255, 99, 123)',
      data: [12.6, 14.2, 22.0, 34.6]
    }]
  },
  options: {}
})