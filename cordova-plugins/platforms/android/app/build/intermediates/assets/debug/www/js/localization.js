var app = {
    initialize: function() {
        document.addEventListener('deviceready', () => {
            console.log(navigator.geolocation);
        }, false);
    }
};

document.getElementById('localization').addEventListener('click', () => {
    getLocalization();
})

var getLocalization = () => {
    let options = {
        maximumAge: 3000,
        timeout: 5000,
        enableHighAccuracy: true
    }

    navigator.geolocation.getCurrentPosition((position) => {
        console.log(position)
        document.getElementById('latitude').innerHTML = position.coords.latitude
        document.getElementById('longitude').innerHTML = position.coords.longitude
    },
    (error) => {
        console.log(error)
    },
    options)
}

app.initialize();