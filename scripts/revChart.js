// CHART JS PARAMETERS
Chart.defaults.global.defaultFontColor = 'black';
Chart.defaults.global.defaultFontFamily = 'Rubik', 'sans-serif';
Chart.defaults.global.maintainAspectRatio = false;
Chart.defaults.global.elements.point.pointStyle = 'circle';
Chart.defaults.global.elements.point.radius = '4';
Chart.defaults.global.elements.line.tension = 0.3;

// CHART JS 
var context = document.getElementById('chart').getContext('2d');
var chart = new Chart(context, {
  // the type of chart we are creating
  type: 'line',
  // the data for our dataset
  data: {
    labels: [1700, 1750, 1800, 1850, 1900, 1950, 2000],
    datasets: [{
      label: 'Revenue Returns by Half-Century',
      backgroundColor: 'rgba(70, 130, 180, 0.5)',
      borderColor: 'rgb(70, 130, 180)',
      data: [12.6, 14.2, 22.0, 34.6, 55.8, 110.5, 121.2]
    }]
  },
  options: {}
})