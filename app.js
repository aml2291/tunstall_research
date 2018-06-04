

// // Create the map object, set the view and zoom
// const mymap = L.map("mapid").setView([51.54459997092629, -0.10986327875002644], 6.4);

// API endpoint for JSON response
const seattle911API =
  "https://data.seattle.gov/resource/grwu-wqtk.json?$where=datetime%20is%20not%20null&$order=datetime%20desc&$limit=50";

// Create the map object, set the view and zoom
const mymap = L.map("mapid").setView([47.604311, -122.331734], 11.5);

// Add the background tiles to the map
L.tileLayer(
  "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken:
      "pk.eyJ1Ijoibmlja2RlbmFyZGlzIiwiYSI6ImNqaGRla2pjMjBvYXgzNm13Yzc3aGIwM3kifQ.G2Tr-B7ppCNdj6xuM0Qc5A"
  }
).addTo(mymap);

// Parse the JSON response
function parseAsJSON(response) {
  return response.json();
  // Return the JSON from the response
}

// What to do if there is an error
function handleError(err) {
  // Show the error to the user
  console.error(err);
  alert(err.message);
}

// Render the things on the map on screen
function renderMap(data) {
  console.log(data);
  // iterate through data
  for (var i = 0; i < data.length; i++) {
    //check if there is a value for long/lat
    if (typeof (data[i].latitude) !== "undefined"){
      if (typeof (data[i].longitude) !== "undefined"){
        //Convert long/lat to number type
        var lat = Number(data[i].latitude);
        //console.log(data[i].latitude, lat);
        var long = Number(data[i].longitude);
        //console.log(data[i].longitude, long); 
       // console.log(lat, long,i)
       //Add marker
        var marker = L.marker([lat, long]).addTo(mymap);
        var typeText = data[i].type;
        var timeText = moment(data[i].datetime).fromNow();
        var addressText = data[i].address; 
        //add popup
        marker.bindPopup("<b>"+ typeText + "</b>" + "<br>" + timeText + "<br>" + addressText ).openPopup();
      }
    }
  }
}
fetch(seattle911API)
    .then(parseAsJSON)
    .then(renderMap)
    .catch(handleError);