const WEATHER_API = "b41c4b8103479cf05554255b26d02a69";
const COORDS = "coordinates";

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoLocation(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
}

function handleGeoError()   {
    console.log("Can't get geo location.");
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoLocation, handleGeoError);
}

function loadCoords()  {
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null) {
        askForCoords();
    }
    else {
        // getWeather
    }
}



function init() {
    loadCoords();
}

init();
