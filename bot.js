var fs = require('fs');
var credentials = JSON.parse(fs.readFileSync('./creds.json'));
var Twitter = require('twitter');
var client = new Twitter(credentials);

function bot() {
    client.get('favorites/list', function(err, tweets, response) {
        if (err) throw error;
        console.log(tweets[0].text);
    });
//    client.post('statuses/update', {status: getTweet()}, function(err, tweet, response) {
//        if (err) {
//            console.log(error);
//        }
//        console.log(tweet);
//    });
}

function getTweet() {
    var c_len = 1351;
    var w_len = 2297;
    var c_arr = fs.readFileSync('/home/cresse/Documents/wcbot/c', 'utf8').split("\n");
    var w_arr = fs.readFileSync('/home/cresse/Documents/wcbot/w', 'utf8').split("\n");
    return w_arr[getRandomInt(w_len)] + " " + c_arr[getRandomInt(c_len)] + " Owl";
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

//    if (Date.now() % 1000 === 0) console.log("it's been 1  second " + Date.now());
setInterval(function() { bot() }, 10000);

