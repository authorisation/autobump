const CONFIG = require('./config.json');
const gradient = require('gradient-string');
const https = require('https')
const discord = require('discord.js');
let sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

var temp = "nullface";

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
sleep(5000)