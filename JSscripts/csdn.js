const fetch = require("node-fetch")

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

async function main() {
    var result = []
    var promise = fetch("https://blog.csdn.net/community/home-api/v1/get-business-list?page=1&size=500&businessType=blog&orderby=&noMore=false&username=fanqiliang630", requestOptions)
        .then(response => response.text())
        .then(data => {
            var res = JSON.parse(data);
            res = res.data.list;
            res = res.map(item => item.articleId)
            result = res
            return "success"
        }).catch(error => {
            console.log('error', error);
            return "failed"
        });
    var promise_res = await promise;
    console.log(promise_res)

    for (var i = 0; i < result.length; i++) {
        var res = fetch("https://blog.csdn.net/fanqiliang630/article/details/" + result[i], requestOptions).then(response => response.text());
        await res;

    }
}

main()