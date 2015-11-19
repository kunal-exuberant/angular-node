/**
 * Created by kunalsingh.k on 18/11/15.
 */

var config = require('./config');
var http = require('http');

module.exports = {
    fetch_data : function(req, res, next) {

        var options = {
            host: config.url,
            port: config.port,
            path: '/ajax/write.php?action=news_feed&start=0',
            method: 'GET',
            headers: {}
        };

        var request = http.request(options, function (response) {

            console.log('STATUS: ' + response.statusCode);

            console.log('HEADERS: ' + JSON.stringify(response.headers));

            response.setEncoding('utf8');

            response.on('data', function (chunk) {
                console.log('BODY: ' + chunk);

                var chunk = {"action":[{"actionid":"1905","pageid":"1905","life_is_fun":"3d19ce99a4bb1f0da9d960441d7c9b5baa16515d","postby":"1000000008","time":1417670938,"actiontype":"50","visible":"0","actionby":"1000000008","actionon":"1000000008","sex":"1","file":"https:\/\/ebdd192075d95c350eef-28241eefd51f43f0990a7c61585ebde0.ssl.cf2.rackcdn.com\/quipmate_1000000008_1417670935.JPG","excited":[],"comment_count":"0","com":[]},{"actionid":"1898","pageid":"1898","life_is_fun":"be58e1702460593fcdbcf68bc77146a1ce012743","postby":"1000000010","time":1414052011,"actiontype":"1","visible":"-1","actionby":"1000000010","actionon":"1000000010","page":"A very happy and prosperous dewali to all :)","excited":[],"comment_count":"0","com":[]},{"actionid":"1896","pageid":"1896","life_is_fun":"7dc7cc60fc1be1c3fc5a223707b144132b363246","postby":"1000000000","time":1413399045,"actiontype":"308","visible":"5","actionby":"1000000000","actionon":"1000000007","groupid":"65","group_name":"Key Documents","excited":[],"comment_count":"0","com":[]},{"actionid":"1895","pageid":"1895","life_is_fun":"0acfcadbdfd71696990ef00a2f848e1871efdae9","postby":"1000000000","time":1413399045,"actiontype":"308","visible":"5","actionby":"1000000000","actionon":"1000000008","groupid":"65","group_name":"Key Documents","excited":[],"comment_count":"0","com":[]},{"actionid":"1872","pageid":"1872","life_is_fun":"426866b34217e9136a9e5d74b52f0cf2539db384","postby":"1000000001","time":1413215766,"actiontype":"2400","visible":"0","actionby":"1000000001","actionon":"1000000008","letter_title":"Good Work !!","letter_content":"Good Work !!","mood":"Teamwork","page":"Good Work !!","file":"teamwork_square70.png","excited":[],"comment_count":"0","com":[]},{"actionid":"1863","pageid":"1863","life_is_fun":"e8e176ccb0bd58f0a8f8211af59f57e3344409f7","postby":"1000000014","time":1413138972,"actiontype":"99","visible":"0","actionby":"1000000014","actionon":"1000000014","excited":[],"comment_count":"0","com":[]},{"actionid":"1865","pageid":"1865","life_is_fun":"68ef1bc58d52bbd268809b8e866bc5057e68a7f9","postby":"1000000014","time":1413138972,"actiontype":"239","visible":"0","actionby":"1000000014","actionon":"1000000014","parenttype":"239","sex":"0","edit_field":"designation","edit_value":"Tester","excited":[],"comment_count":"0","com":[]},{"actionid":"1866","pageid":"1866","life_is_fun":"5b55c20737e53a0c930cc94e8e90e43ce4001ac3","postby":"1000000014","time":1413138972,"actiontype":"234","visible":"0","actionby":"1000000014","actionon":"1000000014","parenttype":"234","sex":"0","edit_field":"team","edit_value":"Testing","excited":[],"comment_count":"0","com":[]},{"actionid":"1853","pageid":"1853","life_is_fun":"b4707c98e2dfe3cec2289631e211bf060b4dfa2c","postby":"1000000001","time":1412970378,"actiontype":"1611","visible":"2","actionby":"1000000008","actionon":"1000000001","parenttype":"1600","title":"Local Boy bike stunts - Tv9 - YouTube","link":"https:\/\/www.youtube.com\/watch?v=-BEQjsbsb6Q","host":"www.youtube.com","meta":"Local Boy bike stunts","page":"https:\/\/www.youtube.com\/watch?v=-BEQjsbsb6Q","video":1,"file":"-BEQjsbsb6Q","excited":["1000000008","1000000000"],"comment_count":"0","com":[]},{"actionid":"274","pageid":"274","life_is_fun":"36925e75955fba128c8a8b70cd8a0f8f5bbfb805","postby":"1000000000","time":1402228972,"actiontype":"326","visible":"0","actionby":"1000000000","actionon":"65","groupid":"65","group_name":"Key Documents","page":"Mobile WBS for Anshumaan sir !","version":[{"file":"https:\/\/33b933d2350357486cc1-d29c0c794c48ec4a25d5921c354b372e.ssl.cf2.rackcdn.com\/1000000000_1402228969.xlsx","caption":"Quipmate_Mobile_WBS.xlsx"},{"file":"https:\/\/33b933d2350357486cc1-d29c0c794c48ec4a25d5921c354b372e.ssl.cf2.rackcdn.com\/1000000000_1402229212.xls","caption":"Quipmate_Mobile_WBS_old.xls"},{"file":"https:\/\/33b933d2350357486cc1-d29c0c794c48ec4a25d5921c354b372e.ssl.cf2.rackcdn.com\/quipmate1000000001_1408735703.xlsx","caption":"1000000004_1400554548.xlsx"},{"file":"https:\/\/33b933d2350357486cc1-d29c0c794c48ec4a25d5921c354b372e.ssl.cf2.rackcdn.com\/quipmate_1000000000_1408913815.txt","caption":"API List.txt"}],"excited":["1000000000"],"comment_count":"2","com":[{"com_time":1434287728,"commentby":"1000000000","remove":1,"com_pageid":"274","com_actionid":"1910","comment":"ghgf","com_excited_mine":0,"com_excited":0},{"com_time":1434287729,"commentby":"1000000000","remove":1,"com_pageid":"274","com_actionid":"1911","comment":"yuk","com_excited_mine":0,"com_excited":0}]}],"myprofileid":"1000000000","name":{"1000000000":"Kunal Singh","65":null,"":null,"1000000008":"Rajat Asthana","1000000010":"Bhavesh Joshi","1000000007":"Vishal Malik","1000000001":"Brijesh Kushwaha","1000000014":"Share Quipmate"},"pimage":{"1000000000":"https:\/\/ebdd192075d95c350eef-28241eefd51f43f0990a7c61585ebde0.ssl.cf2.rackcdn.com\/quipmate_1000000000_1432630167.jpg","65":"https:\/\/ebdd192075d95c350eef-28241eefd51f43f0990a7c61585ebde0.ssl.cf2.rackcdn.com\/female.png","1000000008":"https:\/\/ebdd192075d95c350eef-28241eefd51f43f0990a7c61585ebde0.ssl.cf2.rackcdn.com\/quipmate_1000000008_1417670935.JPG","1000000010":"https:\/\/ebdd192075d95c350eef-28241eefd51f43f0990a7c61585ebde0.ssl.cf2.rackcdn.com\/1000000010_1402428347.jpg","1000000007":"https:\/\/ebdd192075d95c350eef-28241eefd51f43f0990a7c61585ebde0.ssl.cf2.rackcdn.com\/1000000007_1402223072.gif","1000000001":"https:\/\/ebdd192075d95c350eef-28241eefd51f43f0990a7c61585ebde0.ssl.cf2.rackcdn.com\/1000000001_1398280528.jpg","1000000014":"https:\/\/ebdd192075d95c350eef-28241eefd51f43f0990a7c61585ebde0.ssl.cf2.rackcdn.com\/female.png"},"tag":[]}

                res.send(chunk);
            });

            response.on('end', function () {
                console.log("Response end");
            });

        });

        request.on('error', function (e) {
            console.log('problem with request: ' + e.message);
        });

        request.end();

    }
}