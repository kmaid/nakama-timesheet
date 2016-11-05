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

global.generatePDF = function(view = false) {
    var startOfWeek = moment(document.getElementById("week-commencing").value).startOf('week');

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
    y=0;
    for (var day=0; day<=6; day++) {
        var date = startOfWeek.clone().add(day, 'day');
        doc.text(132, yCord[y], date.format('DD MM YY'));
        doc.text(157.4, yCord[y], document.getElementById('start_'+day).value);
        doc.text(178.9, yCord[y], document.getElementById('finish_'+day).value);
        doc.text(201, yCord[y], document.getElementById('lunch_'+day).value);
        doc.text(222, yCord[y], document.getElementById('regular_'+day).value);
        doc.text(244, yCord[y], document.getElementById('overtime_'+day).value);
        doc.text(266, yCord[y], document.getElementById('other_'+day).value);
        y++;
    }
    if (view) doc.output('datauri');
    else doc.save("timesheet-"+document.getElementById("week-commencing").value+".pdf");

};