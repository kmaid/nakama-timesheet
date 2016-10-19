require("./css/main.css");
var doc = new jsPDF("l");
console.log(jsPDF);
doc.setFontSize(40);
doc.text(35, 25, "Octonyan loves jsPDF");
doc.addImage(require('./js/timesheet-london'), 'jpg', 0, 0, doc.internal.pageSize.width, doc.internal.pageSize.height);
doc.save("test.pdf");