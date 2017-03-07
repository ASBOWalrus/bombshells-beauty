function initMap() {
  var pos = { lat: 53.2091857, lng: -0.11890570000002754 };

  var map = new google.maps.Map(document.getElementById('map'), {
    center: pos,
    zoom: 16
  });

  var marker = new google.maps.Marker({
    position: pos,
    map: map,
    title: 'Bombshells Beauty'
  });
}

$(".dir-btn .btn").on("click", function() {
  window.open('https://www.google.com/maps/dir//27+Bridge+St,+Horncastle,+LN9+5JB+UK', '_blank');
});