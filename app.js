const BATTLES = [
    {
        "title": "First Battle of St. Albans",
        "type": "Battle",
        "yorkactors": "Richard Duke of York, Richard Neville Earl of Salisbury, Richard Neville Earl of Warwick", 
        "lancasteractors": "Henry VI, Edmund Beaufort, Humphrey Stafford, Henry Percy, Thomas Courtenay, Thomas Baron Clifford",
        "day": 22,
        "month": "May",
        "year": 1455,
        "latitude": 51.7533126,
        "longitude": -0.3415907,
        "description": "Decisive Yorkist Victory",
        "victor": 1,
    },
    {
        "title": "Battle of Blore Heath",
        "type": "Battle",
        "yorkactors": "Richard Neville Earl of Salisbury, Sir John Neville, Thomas Neville",
        "lancasteractors": "James Tuchet Lord Audley, John Sutton Lord Dudley", 
        "day": 23,
        "month": "September",
        "year": 1459,
        "latitude": 52.9086591,
        "longitude": -2.4268678,
        "description": "Yorkist Victory",
        "victor": 1,
    },
    {
        "title": "Battle of Ludford Bridge",
        "type": "Battle",
        "yorkactors": "Richard Duke of York, Richard Neville Earl of Salisbury, Richard Neville Earl of Warwick", 
        "lancasteractors": "Henry VI, Humphrey Stafford",
        "day": 12,
        "month": "October",
        "year": 1459,
        "latitude": 52.361,
        "longitude": -2.718,
        "description": "Lancastrian Victory",
        "victor": 0,
    },
 
];
console.log(window.BATTLES);
const battleData = window.BATTLES;
// Create the map object, set the view and zoom
const mymap = L.map("mapid").setView([51.54459997092629, -0.10986327875002644], 6.8);

// Add the background tiles to the map
L.tileLayer(
  "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom:100,
    id: "mapbox.streets-satellite",
    accessToken:
      "pk.eyJ1Ijoibmlja2RlbmFyZGlzIiwiYSI6ImNqaGRla2pjMjBvYXgzNm13Yzc3aGIwM3kifQ.G2Tr-B7ppCNdj6xuM0Qc5A"
  }).addTo(mymap);

// What to do if there is an error
function handleError(err) {
  // Show the error to the user
  console.error(err);
  alert(err.message);
}

// Render the things on the map on screen
function renderMap(data) {
// iterate through data
  for (var i = 0; i < data.length; i++) {
    //    //Add marker
        var marker = L.marker([data[i].latitude, data[i].longitude], {color: 'red',
        fillColor: '#f03'}).addTo(mymap);
        console.log(data[i].latitude, data[i].longitude);
        var battleTitle = data[i].title;
        var battleDay = data[i].day;
        var battleMonth = data[i].month;
        var battleYear = data[i].year;
        var battleDescription = data[i].description;
        //add popup
        marker.bindPopup("<b>"+ battleTitle + "</b>" + "<br>" + battleDay + " " + battleMonth + " " + battleYear + "<br>" + battleDescription).openPopup();
      }
    }
renderMap(BATTLES);
