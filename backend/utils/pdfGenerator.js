const PDFDocument = require('pdfkit');
const fs = require('fs');

function generatePDF(scriptContent, filename) {
    const doc = new PDFDocument();
    doc.pipe(fs.createWriteStream(filename));
    doc.fontSize(12).text(scriptContent, { align: 'left' });
    doc.end();
}

module.exports = generatePDF;
