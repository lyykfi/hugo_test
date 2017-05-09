const express = require("express");
const app = new express();
const port = 8080;

app.use("/build", express.static('build'));
app.use("/assets", express.static('assets'));

app.use(function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(port, function(error) {
    if (error) {
        console.error(error);
    } else {
        console.info('==> 🌍  Open up http://localhost:%s/ in your browser.', port);
    }
});