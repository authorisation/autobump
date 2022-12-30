
module.exports = function() {
    this.randomString = function(length) {
        var string = '';
        var characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        for ( var a = 0; a < length; a++ ) {
            string += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return string;
    }

    //example: "1058510726639140935.lnv6v40gLnNYZnNz3PmyD6lOmCg"
    this.randomFingerprint = function() {
        var fingerprint = '';
        var numbers = '0123456789';
        for ( var a = 0; a < 19; a++ ) {
            fingerprint += numbers.charAt(Math.floor(Math.random() * numbers.length));
        }
        fingerprint = fingerprint + "."
        var characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        for ( var a = 0; a < 27; a++ ) {
            fingerprint += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return fingerprint;
    }
}