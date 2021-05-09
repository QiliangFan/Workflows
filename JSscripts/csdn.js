const fetch = require("node-fetch")

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

fetch("https://blog.csdn.net/community/home-api/v1/get-business-list?page=1&size=500&businessType=blog&orderby=&noMore=false&username=fanqiliang630", requestOptions)
    .then(response => response.text())
    .then(result => {
        var res = JSON.parse(result);
        res = res.data.list;
        res = res.map(item => item.articleId)

        var i = 0;
        var intervaler = setInterval(() => {
            if(i >= res.length) {
                clearInterval(intervaler)
            }
            fetch("https://blog.csdn.net/fanqiliang630/article/details/" + res[i]);
            i += 1;
        }, 500)
    })
    .catch(error => {
        console.log('error', error)
    });