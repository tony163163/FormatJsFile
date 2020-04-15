// utf-8 
var JD = require("./JsDecoder.js");
var FS = require("fs");
var arguments = process.argv.splice(2);
if (arguments < 2) {
    console.log("Usage: node FormatJs.js infilename outfilename");
    return;
}
var inFileName = arguments[0];
var outFileName = arguments[1];
console.log("Format file: " + inFileName + " -> " + outFileName);
var data = FS.readFileSync(inFileName);
var str = data.toString();
console.log("File size before formatting:" + data.length);
var JsDecoder = new JD.JsDecoder(str);
var code = JsDecoder.decode();
//console.log(code);
console.log("File size before formatting:" + code.length);
FS.writeFile(outFileName, code, function (err)
{
    if (err) {
        console.log("Err: " + err);
        return console.error(err);
    }
    console.log("File format successful！");
});
