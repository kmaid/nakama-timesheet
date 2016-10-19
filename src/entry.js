require("./css/main.css");
require('../node_modules/jspdf/dist/jspdf.min');
// require('../node_modules/jspdf/libs/png_support/zlib.js');
// require('../node_modules/jspdf/libs/png_support/png.js');

var doc = new jsPDF("l");

doc.setFontSize(40);
doc.text(35, 25, "Octonyan loves jsPDF");
doc.addImage(require('./js/timesheet-london'), 'jpg', 0, 0);