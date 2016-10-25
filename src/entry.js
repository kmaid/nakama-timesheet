require('bootstrap/dist/css/bootstrap.css');
require("./css/main.css");
require("flatpickr/dist/flatpickr.min.css");
require('font-awesome/css/font-awesome.css');

var flatpickr = require("flatpickr");
var moment = require('moment');
var jsPDF = require('jspdf');
var bootstrap = require('bootstrap');

$( document ).ready(function() {
    flatpickr(document.getElementById("week-commencing"), {
        "defaultDate": moment().startOf('week').toDate()
    });
});


var doc = new jsPDF("l");
doc.setFontSize(10);
doc.addImage(require('./js/timesheet-london'), 'jpg', 0, 0, doc.internal.pageSize.width, doc.internal.pageSize.height);
doc.text(28, 50.5, "Thomas Waterfall");
doc.text(33, 59, "Never Bland");
doc.text(36, 66.5, "Annika Hart");
doc.text(41, 74.5, "0123456789");
doc.text(44, 82, "01/02/66");
doc.text(48, 90, "12345678");

doc.text(76.5, 105, "X"); //no
doc.text(93.2, 105, "X"); //yes

doc.setFontSize(8);
doc.text(132, 58.4, "10 20 30");
doc.text(132, 66.5, "10 20 30");
doc.text(132, 74.2, "10 20 30");
doc.text(132, 81.8, "10 20 30");
doc.text(132, 89.4, "10 20 30");
doc.text(132, 97.5, "10 20 30");
doc.text(132, 105.4, "10 20 30");

doc.text(157.5, 58.4, "9 30");
doc.text(157.5, 66.5, "9 30");
doc.text(157.5, 74.2, "9 30");
doc.text(157.5, 81.8, "9 30");
doc.text(157.5, 89.4, "9 30");
doc.text(157.5, 97.5, "9 30");
doc.text(157.5, 105.4, "9 30");

doc.text(179, 58.4, "6 30");
doc.text(179, 66.5, "6 30");
doc.text(179, 74.2, "6 30");
doc.text(179, 81.8, "6 30");
doc.text(179, 89.4, "6 30");
doc.text(179, 97.5, "6 30");
doc.text(179, 105.4, "6 30");

doc.text(201.2, 58.4, "1 00");
doc.text(201.2, 66.5, "1 00");
doc.text(201.2, 74.2, "1 00");
doc.text(201.2, 81.8, "1 00");
doc.text(201.2, 89.4, "1 00");
doc.text(201.2, 97.5, "1 00");
doc.text(201.2, 105.4, "1 00");


 // doc.output('datauri');

// doc.save("test.pdf");