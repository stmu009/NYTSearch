var apiurl = "http://developer.nytimes.com/article_search_v2.json"
var apikey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931"
var fullurl = apiurl + apikey

$.ajax({
    type: "GET",
    url: apiurl
}).then(function () {

})