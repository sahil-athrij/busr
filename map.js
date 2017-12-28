/**
 * Created by sahil on 12/14/2017.
 */




function initMap(locations,position) {





    var uluru = {lat: position.coords.latitude, lng: position.coords.longitude};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: uluru
    });
    for(i =0; i<locations.length;i++) {
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][0], locations[i][1]),
            map: map
        });
        console.log(locations[i][0])
    }
}

function getuserlocation(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(displaymap)
    }
}

function displaymap(position) {
    var userref = firebase.database().ref("users");
    var locations =[];
    userref.once("value").then(function (value) {
        value.forEach(function (user) {
            var values = user.val();
            var position = [parseFloat(values.lat),parseFloat(values.long)];
            locations.push(position);

        })

        initMap(locations,position)
    })


}
