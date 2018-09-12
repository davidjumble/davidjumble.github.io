var fs = require("fs");

const thumbsdirectory = "./images/thumbs/";
const outputfile = "./index.html";
var indexsansgallery = "./pre-gallery.html";

fs.readFile(indexsansgallery, (err, page) => {
  fs.readdir(thumbsdirectory, (err, directory) => {
    var html = "";
    directory.forEach(filename => {
      console.log(filename);
      html +=
        "            <div class='item'>\n" +
        "                <a href='?img=" +
        filename +
        "'>\n" +
        "                <img src='images/thumbs/" +
        filename +
        "' width='420px' alt=''style='border: 3px solid #fff'/>\n" +
        "                </a>\n" +
        "            </div>\n";
    });
    fs.writeFile(
      outputfile,
      page.toString().replace("{INSERT-GALLERY-IMAGES}", html),
      err => {
        if (err) throw err;
        console.log("The file has been saved!");
      }
    );
  });
});
