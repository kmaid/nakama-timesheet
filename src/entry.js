require("./css/main.css");
var doc = new jsPDF("l");
doc.setFontSize(40);
doc.addImage(require('./js/timesheet-london'), 'jpg', 0, 0, doc.internal.pageSize.width, doc.internal.pageSize.height);
doc.text(35, 25, "Octonyan loves jsPDF");
doc.save("test.pdf");