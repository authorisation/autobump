const fetch = require('node-fetch');
const gradient = require('gradient-string');

const ENDPOINT = "https://discord.com/api/v9/auth/register";
const CAPTCHA_ENDPOINT = "";

require('./misc')();

let body = {
    "fingerprint": `${randomFingerprint()}`,
    "email": `${randomString(12)}` + "@dv4.wtf",
    "username": `${randomString(14)}`,
    "password": `${randomString(18)}`,
    "invite": null,
    "consent": true,
    "date_of_birth": "1991-05-05",
    "gift_code_sku_id": null,
    "captcha_key": null
}
var creds = JSON.stringify(body);

module.exports = function() { 
    this.createAccount = function() {
        console.log(gradient.pastel("[+] Starting Account creation"));
        /*
        fetch(ENDPOINT, {
            method: 'POST',
            body: creds,
            headers: {
                "Accept": "application/json",
                "Accept-Encoding": "gzip, deflate, br",
                "Accept-Language": "en-US,en;q=0.5",
                "Content-Type": "application/json",
                "Origin": "https://discord.com",
                "Refer": "https://discord.com/register",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/109.0",
                "X-Super-Properties": "eyJvcyI6IldpbmRvd3MiLCJicm93c2VyIjoiRmlyZWZveCIsImRldmljZSI6IiIsInN5c3RlbV9sb2NhbGUiOiJlbi1VUyIsImJyb3dzZXJfdXNlcl9hZ2VudCI6Ik1vemlsbGEvNS4wIChXaW5kb3dzIE5UIDEwLjA7IFdpbjY0OyB4NjQ7IHJ2OjEwOS4wKSBHZWNrby8yMDEwMDEwMSBGaXJlZm94LzEwOS4wIiwiYnJvd3Nlcl92ZXJzaW9uIjoiMTA5LjAiLCJvc192ZXJzaW9uIjoiMTAiLCJyZWZlcnJlciI6IiIsInJlZmVycmluZ19kb21haW4iOiIiLCJyZWZlcnJlcl9jdXJyZW50IjoiIiwicmVmZXJyaW5nX2RvbWFpbl9jdXJyZW50IjoiIiwicmVsZWFzZV9jaGFubmVsIjoic3RhYmxlIiwiY2xpZW50X2J1aWxkX251bWJlciI6MTY1NDg1LCJjbGllbnRfZXZlbnRfc291cmNlIjpudWxsfQ=="
            }
        }).then(res => res.json()).then(json => {
            /* DEBUG console.log(json)
        })
        */
        var obj = JSON.parse(creds);
        console.log(gradient.pastel("[!] Using email: " + obj.email))
        console.log(gradient.pastel("[!] Using username: " + obj.username))
        console.log(gradient.pastel("[!] Using password: " + obj.password))
    }
}