const fetch = require("node-fetch")

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

fetch("https://www.torch-fan.site", requestOptions)
    .then(response => response.text())
    .then(result => {
        console.log(result)
    })
    .catch(error => console.log('error', error));