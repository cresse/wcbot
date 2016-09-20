var fs = require('fs');
var credentials = JSON.parse(fs.readFileSync('./creds.json'));
var Twitter = require('twitter');
var client = new Twitter(credentials);

function bot() {
    client.post('statuses/update', {status: getTweet()}, function(err, tweet, response) {
        if (err) {
            console.log(error);
        }
        console.log(tweet);
    });
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

setInterval(function() { bot() }, 60 * 60 * 1000);

