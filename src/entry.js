require('bootstrap/dist/css/bootstrap.css');
require("./css/main.css");
require("flatpickr/dist/flatpickr.min.css");
require('font-awesome/css/font-awesome.css');

const flatpickr = require("flatpickr");
var moment = require('moment');
var jsPDF = require('jspdf');
global.Tether = require('tether');
var bootstrap = require('bootstrap');

$( document ).ready(function() {
    new flatpickr(document.getElementById("test"), {
        "defaultDate": moment().startOf('week').toDate(),
        wrap: true
    });
});

global.generatePDF = function(download = false) {
    var doc = new jsPDF("l");
    doc.setFontSize(10);
    doc.addImage(require('./js/timesheet-london'), 'jpg', 0, 0, doc.internal.pageSize.width, doc.internal.pageSize.height);
    doc.text(28, 50.5, document.getElementById('first-name').value + " "+document.getElementById('last-name').value);
    doc.text(33, 59, document.getElementById('client').value);
    doc.text(36, 66.5, document.getElementById('manager-name').value);
    doc.text(41, 74.5, document.getElementById('manager-telephone').value);
    doc.text(44, 82, document.getElementById("week-commencing").value);
    doc.text(48, 90, document.getElementById("purchase-number").value);

    if(document.getElementById('assignment-continue').value) {
        doc.text(76.5, 105, "X"); //no
    } else {
        doc.text(93.2, 105, "X"); //yes
    }

    doc.setFontSize(8);
    var yCord = [58.4, 66.5, 74.2, 81.8, 89.4, 97.5, 105.4];
    for (var day=0; day<6; day++) {
        console.log(day);
        for (var y=0; y<yCord.length; y++) {
            doc.text(132, yCord[y], "10 20 30");
            doc.text(157.5, yCord[y], "9 30");
            doc.text(179, yCord[y], "6 30");
            doc.text(201.2, yCord[y], "1 00");
        }
    }

    if (download) doc.output('datauri');
    else doc.save("Timesheet-"+document.getElementById("week-commencing").value+".pdf");
};