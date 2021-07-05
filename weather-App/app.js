const request = require('postman-request');

// const url = 'http://api.weatherstack.com/current?access_key=5c3693f3223ee2f67aad15278a932794&query=37.8267,-122.4233&units=m';

// request({ url , json:true }, (error,response, body) => {
//     console.log(error)
//     if(error) {
//         console.log('Unable to connect to weather service!')
//     } else {
//         const data = body.current;
//         console.log(`It is currently ${data.temperature} and it is ${data.weather_descriptions[0]}`)
//     }
// })

// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibmF6YXJrb24iLCJhIjoiY2txN3hwM3oyMGFwODJydDhnZTJrNWdxdSJ9.JpbxsyGKnHbhPun44-exNQ'
// request({ url: geocodeURL, json:true }, (error, response, body) => {
//     if(error) {
//         console.log('Unable to connect to mapbox ')
//     } else if( body.features.length === 0) {
//         console.log('Unable to find location')
//     } else {
//     const data = body.features[0]

//     console.log(`${data.text} and long ${data.geometry.coordinates[0]} lat ${data.geometry.coordinates[1]}`)
//     }
// })

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoibmF6YXJrb24iLCJhIjoiY2txN3hwM3oyMGFwODJydDhnZTJrNWdxdSJ9.JpbxsyGKnHbhPun44-exNQ`

    request({url: url, json: true}, (error, response) => {
        if(error) {
            callback('Unable to connect to mapbox',undefined)
        } else if(response.body.features.length === 0) {
            callback('Unable to find location', undefined);
        }
    })
}

geocode('Philadelphia', (error,data) => {
    console.log('Error', error)
    console.log('Data', data)
})