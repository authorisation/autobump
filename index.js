const CONFIG = require('./config.json');
const gradient = require('gradient-string');
let sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

//this is the username its something random idk
var temp = "nullface";

//Function shit
require('./functions/createAccount.js')();
require('./functions/misc.js')();
require('./functions/captchaUtils.js')();

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
console.log(gradient.pastel("[DEBUG] " + randomString(12) + "@dv4.email\n"));

createAccount();