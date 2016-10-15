var PDFImage = require("pdf-image").PDFImage;
var DataURI = require('datauri').promise;
var fs = require('fs');

var pdfImage = new PDFImage(__dirname + '/timesheets/london.pdf');
    pdfImage.convertPage(0).then(function (imagePath) {
});

DataURI( __dirname + '/timesheets/london-0.png')
.then(content => {
    var file = `module.exports = "${content}";`;
    fs.writeFile( __dirname +'/../src/js/timesheet-london.js', file, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("Done!");
    });
}).catch(err => {
    throw err;
});

