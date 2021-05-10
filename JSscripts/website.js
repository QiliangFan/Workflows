const fetch = require("node-fetch")

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

fetch("https://www.torch-fan.site", requestOptions)
    .then(response => response.text())
    .then(result => {
        return "success"
    })
    .catch(error => console.log('error', error));