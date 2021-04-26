import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export const html2Pdf = ids => {
  let pdf = new jsPDF();
  // Create a new promise with the loop body
  let addPages = new Promise((resolve, reject) => {
    ids.forEach(async (id, index) => {
      const elem = document.getElementById(id);
      await html2canvas(elem).then(canvas => {
        const imgData = canvas.toDataURL("image/png");
        if (index < ids.length + 1) {
          pdf.addImage(imgData, 0, 0, 210, 297);
          pdf.addPage();
        } else {
          pdf.addImage(imgData, 0, 0, 210, 297);
          console.log("Reached last page, completing");
        }
      });
      setTimeout(resolve, 100, "Timeout adding page #" + index);
    });
  });
  addPages.finally(() => {
    pdf.save();
  });
};
