const CONFIG = require('./config.json');
const gradient = require('gradient-string');
let sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
var temp = "nullface";

// Function shit
require('./functions/createAccount')();
require('./functions/misc')();

let INTRODUCTION = gradient.pastel.multiline([
    "-------------------------------",
    "           BLÖDMANN",
    "        BUMP DEIN SHIT",
    "      UND FÜHL DICH FREI",
    "-------------------------------\n"
].join('\n'));
console.clear();
process.title = "AUTO BUMP | Logged in as $ " + `${temp}`;
console.log(INTRODUCTION);

//DEBUG
console.log(gradient.pastel("[DEBUG] " + randomFingerprint()));
console.log(gradient.pastel("[DEBUG] " + randomString(12) + "@dv4.wtf\n"));
createAccount();