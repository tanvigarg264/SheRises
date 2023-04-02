// Replace YOUR_API_KEY with your actual API key
mapboxgl.accessToken = 'YOUR_API_KEY';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-79.38, 43.65],
  zoom: 12
});
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var userLocation = [position.coords.longitude, position.coords.latitude];
      map.setCenter(userLocation);
    });
  } else {
    console.log('Geolocation is not supported by this browser.');
  }
  // Replace washroomData with your actual washroom data
var washroomData = [
    {
      name: 'Washroom 1',
      location: [-79.37, 43.65]
    },
    {
      name: 'Washroom 2',
      location: [-79.39, 43.64]
    },
    {
      name: 'Washroom 3',
      location: [-79.38, 43.66]
    }
  ];
  
  washroomData.forEach(function(washroom) {
    var el = document.createElement('div');
    el.className = 'marker';
    new mapboxgl.Marker(el)
      .setLngLat(washroom.location)
      .setPopup(new mapboxgl.Popup({ offset: 25 })
      .setHTML('<h3>' + washroom.name + '</h3>'))
      .addTo(map);
  });