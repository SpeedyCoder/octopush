function initialize() {
  var mapOptions = {
    center: new google.maps.LatLng(51.503454,-0.119562),
    zoom: 8,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  
  
  
  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
 
  // Automatically center the map fitting all markers on the screen

  console.log("Map initialized.");
  
}

google.maps.event.addDomListener(window, 'load', initialize);

// Load the Visualization API and the piechart package.
google.load('visualization', '1.0', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
var chart;
var data;
var options;
function reDrawChart() {
  // Set chart options
  options.width = document.getElementById('chart_div').width;
  options.height = document.getElementById('chart_div').height;
  chart.draw(data, options);
}

function drawChart() {

  // Create the data table.
  data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
      ['Mushrooms', 3],
      ['Onions', 1],
      ['Olives', 1],
      ['Zucchini', 1],
      ['Pepperoni', 2]
    ]);

  options = {'title':'How Much Pizza I Ate Last Night',
             'width': 0,
            'height': 0};  

  // Instantiate and draw our chart, passing in some options.
  chart = new google.visualization.PieChart(document.getElementById('chart_div'));
  reDrawChart();
}


$(window).resize(reDrawChart);

