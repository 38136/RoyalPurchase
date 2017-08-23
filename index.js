// console.log("The follow bot is starting");

const Twit = require("twit");
const express = require("express");
const bodyParser = require("body-parser");
let app = express();
const config = require("./config");

const apiai = require("apiai");
const APIAII = apiai('64976146fee347a39f0034e1b767d0e5');
let T = new Twit(config);
const fs = require("fs");


let carFunc = require('./carfunction');
let uploadMedia = require("./uploadpic");

let stream = T.stream("user", {
    stringify_friend_ids: true

});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

console.log(T);
console.log("The follow bot is starting");

stream.on('direct_message', function (directMsg) {
    let directms = directMsg.direct_message;
    let sender_id = directms.sender_id_str;
    let screen_name = directms.sender.name;
    let text = directms.text;
    let paramssend;

    // console.log("Text is " + text);
    // console.log(JSON.stringify(directms.sender));
    // console.log(JSON.stringify(directMsg));

    if (text) {
        let request = APIAII.textRequest(text, {
            sessionId: "SessionID"
        });

        request.on('response', function (response) {
            let responseQuery = response.result.resolvedQuery;
            let result = response;
            if (result.result.action == "input.welcome") {
                let image_media = JSON.parse(uploadMedia.TwitterUpload());
                paramssend = carFunc.WelcomeParams(sender_id, screen_name);
                T.post("direct_messages/events/new", paramssend, function (err, data, response) {

                });

            }

        });
        request.on("error", function (error) {
            console.log("error");
        });
        request.end();
    }
});

app.get("/", function (req, res) {
    res.send("success");
});
app.listen(process.env.PORT || 3000, function (message) {
    console.log("Server is running on the port...");
})