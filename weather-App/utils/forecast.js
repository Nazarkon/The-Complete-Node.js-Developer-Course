const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=5c3693f3223ee2f67aad15278a932794&query=${latitude},${longitude}&units=m`;
    // const url = 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/' + latitude + ',' + longitude

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            const data = response.body.current;
            callback(undefined,' It is currently ' + data.temperature + ' degress out. There is a ' +  data.weather_descriptions[0])
        }
    })
}

module.exports = forecast