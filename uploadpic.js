var fs = require('fs');
var twit = require("twit");
var config = require('./config');
var Twitter = new twit(config);
var readImageJSON = function () {
    return fs.readFileSync("./pic.json", "utf8");
}
exports.TwitterUpload = function () {
    if (readImageJSON()) {
        var stream = fs.readFileSync("img.jpg", { 'encoding': 'base64' });
        Twitter.post('media/upload', { media_data: stream }, function (err, data, response) {
            if (data) {
                fs.writeFileSync("./pic.json", JSON.stringify(data), "utf8");
            }
        });
    }
    return readImageJSON();
}