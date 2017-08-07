/**
 * Created by bikramkawan on 7/26/17.
 */


let mycoordinate = null;
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }


}
function showPosition(position) {
    mycoordinate = position.coords;
    console.log(position)
    $.getJSON(`https://fcc-weather-api.glitch.me//api/current?lon=${mycoordinate.longitude}&lat=${mycoordinate.latitude}`, function (json) {
        console.log(json)
        $('.place').text(json.name + ', ' + json.sys.country);
         $('.tempVal').text((json.main.temp).toFixed(1));
        $('.humidityVal').text(json.main.humidity + ' %');
        $('.windVal').text(json.wind.speed + ' mps');
        $('.info').text(json.weather[0].description);
        $('.iconImg').attr("src",json.weather[0].icon);

    });


}




