require("./css/main.css");
require('../node_modules/jspdf/dist/jspdf.min');
// require('../node_modules/jspdf/libs/png_support/zlib.js');
// require('../node_modules/jspdf/libs/png_support/png.js');

console.log();
var doc = new jsPDF();

doc.setFontSize(40);
doc.text(35, 25, "Octonyan loves jsPDF");
doc.addImage(require('./js/timesheet-london'), 'png', 0, 0);
console.log('hit');