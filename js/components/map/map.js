

var app = angular.module('myApp', []);

let wines=[];




app.controller('myCtrl', function($scope, $http) {
    $http.get("http://wine.wildcodeschool.fr/api/v1/markets").then(function(response) {
        /*console.log("nam is a : " + response.data.position);*/

            let pos = response.data[0].position;
            console.log("nam is a : " + pos);
            console.log(pos.split(', '));

            /***/
            var mymap = L.map('mapid', {
                center: [pos.split(', ')[0], pos.split(', ')[1]],
                zoom: 13.3
            });

            L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
                maxZoom: 18,
                attribution: 'Map data &copy; <a href="httresponse.data.positionp://openstreetmap.org">OpenStreetMap</a> contributors, ' +
                    '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                    'Imagery © <a href="http://mapbox.com">Mapbox</a>',
                id: 'mapbox.streets'
            }).addTo(mymap);

            for(let i in response.data){
              let posm = response.data[i].position;
            L.marker([posm.split(', ')[0], posm.split(', ')[1]]).addTo(mymap)
                .bindPopup(response.data[i].name).openPopup();
              }
    });
  
    $http.get("http://wine.wildcodeschool.fr/api/v1/owners").then(function(response) {
        /*console.log("nam is a : " + response.data.position);*/

            let owners = response.data[0].lastname;
            console.log(owners);

  });


});
