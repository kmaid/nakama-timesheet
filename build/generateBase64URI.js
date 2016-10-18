var PDFImage = require("pdf-image").PDFImage;
var DataURI = require('datauri').promise;
var fs = require('fs');

var pdfImage = new PDFImage(__dirname + '/timesheets/london.pdf',{
    convertExtension: "jpg",
    convertOptions: {
        "-background" : "white",
        "-alpha" : "remove",
        "-density": 300,
        "-resize": "3508x2480"
    }
});
pdfImage.convertPage(0).then(function (imagePath) {
    DataURI(imagePath)
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
});



