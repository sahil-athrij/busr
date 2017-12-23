/**
 * Created by sahil on 12/14/2017.
 */

locations = [
    ['bus1', 12.890542, 76.274856, 4],
    ['bus2', -33.923036, 151.259052, 4],
    ['bus3', -34.028249, 151.157507, 4],
    ['bus4', -33.800101, 151.287478, 4],
    ['bus5', -33.950198, 151.259302, 4]
];


function initMap() {
    var uluru = {lat: -25.363, lng: 131.044};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: uluru
    });
    for(i =0; i<locations.length;i++)
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1],locations[i][2]),
        map: map
    });
}

