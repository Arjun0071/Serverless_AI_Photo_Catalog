// main.js - Supporting javascript

// Update these values from your deployed SAM resources
var cloudFrontURL = "https://d2hyyb26vcmvnt.cloudfront.net"
var apiURL = "https://tvxmphl0sb.execute-api.ap-south-1.amazonaws.com/Prod"

function getImages() {
    $.ajax({
        type: "GET",
        url: apiURL + "/images",
        headers: {
            'Access-Control-Allow-Origin': "*",
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'            
        },
        crossDomain: true,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            console.log(data);
            for (var i = 0; i < data.length; i++) {
                $('#tableImages tbody').append('<tr><td>' + data[i].id + '</td><td>' + data[i].category + '</td><td>' + data[i].summary + '</td><td><a href="' + cloudFrontURL + '/' + data[i].id + '" data-toggle="lightbox" data-caption="'+ data[i].summary +'"><img width=100 src="' + cloudFrontURL + '/' + data[i].id + '"</a></td></tr>');
            }
        },
        error: function (data) {
            console.log(data);
        }

    });
}