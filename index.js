var twit = require('twit');
var express = require('express');
var bodyParser=require('body-parser');
var app = express();
var config = require('./config');
var apiai = require('apiai');
var APIAII = apiai('64976146fee347a39f0034e1b767d0e5');
var Twitter = new twit(config);
var fs = require("fs");
var botfunction = require('./carFunction');
var uploadMedia = require("./uploadpic");
var stream = Twitter.stream("user", { stringify_friend_ids: true });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
stream.on('direct_message', function (directMsg) {
    var directms = directMsg.direct_message;
    var sender_id = directms.sender_id_str;
    var screen_name = directms.sender.name;
    var text = directms.text;
    var paramssend;
    //console.log("Text is "+text);
    //console.log(JSON.stringify(directms.sender));
  //  console.log(JSON.stringify(directMsg));
    //fs.writeFileSync("./data.json", JSON.stringify(directMsg), "utf8");
    if (text) {
        var request = APIAII.textRequest(text, {
            sessionId: 'APIAISESSID'
        });
        request.on('response', function (response) {
            let responseQuery = response.result.resolvedQuery;
            let result = response;
            if (result.result.action=="input.welcome") {
              var image_media = JSON.parse(uploadMedia.TwitterUpload());
               paramssend = botfunction.WelcomeParams(sender_id, screen_name, image_media.media_id_string);
                Twitter.post("direct_messages/events/new", paramssend, function (err, data, response) {
                    
                });
            }
            

                        
        });
        request.on('error', function (error) {
        //  console.log(error);
        });
        request.end();
    }

});


app.get("/",function(req,res){
    res.send("Localhost Server is  running!!!");
});
app.listen(process.env.PORT || 3000, function (message) {
    console.log("Server is running on the port...");
})