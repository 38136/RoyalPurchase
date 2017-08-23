console.log("The follow bot is starting");

const Twit = require("twit");
const express = require("express");
const bodyParser = require("body-parser");
let app = express();
const config = require("./config");

const apiai = require("apiai");
const APIAII = apiai('8e19b5f4bcee4ca484320e31dfdfebf9');
let T = new Twit(config);
const fs = require("fs");


let weatherfunc = require('./carfunction');
let uploadMedia = require("./uploadpic");

let stream = T.stream("user", {
    stringify_friend_ids: true

});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// console.log(T);

stream.on('direct_message', function (directMsg) {
    let directms = directMsg.direct_message;
    let sender_id = directms.sender_id_str;
    let screen_name = directms.sender.name;
    let text = directms.text;
    let paramssend;

    console.log("Text is " + text);
    console.log(JSON.stringify(directms.sender));
    console.log(JSON.stringify(directMsg));

    
})

app.get("/", function (req, res) {
    res.send("success");
});
app.listen(process.env.PORT || 3000, function (message) {
    console.log("Server is running on the port...");
})