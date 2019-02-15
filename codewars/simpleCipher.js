/* A simple substitution cipher replaces one character from an alphabet with a character from an alternate alphabet, where each character's position in an alphabet is mapped to the alternate alphabet for encoding or decoding.

E.g.

var abc1 = "abcdefghijklmnopqrstuvwxyz";
var abc2 = "etaoinshrdlucmfwypvbgkjqxz";

var sub = new SubstitutionCipher(abc1, abc2);
sub.encode("abc") // => "eta"
sub.encode("xyz") // => "qxz"
sub.encode("aeiou") // => "eirfg"

sub.decode("eta") // => "abc"
sub.decode("qxz") // => "xyz"
sub.decode("eirfg") // => "aeiou"
If a character provided is not in the opposing alphabet, simply leave it as be. */

var abc1 = 'abcdefghijklmnopqrstuvwxyz';
var abc2 = 'etaoinshrdlucmfwypvbgkjqxz';

function SubstitutionCipher(abc1, abc2) {
  this.encode = function(str) {
    let encodedString = '';
    for (let i = 0; i < str.length; i++) {
      let charIndex = abc1.indexOf(str[i]);

      if (charIndex === -1) {
        encodedString += str[i];
      } else {
        encodedString += abc2[charIndex];
      }
    }
    return encodedString;
  };

  this.decode = function(str) {
    let decodedString = '';
    for (let i = 0; i < str.length; i++) {
      let charIndex = abc2.indexOf(str[i]);
      if (charIndex === -1) {
        let charIndex = str[i];
        decodedString += stri[i];
      } else {
        decodedString += abc1[charIndex];
      }
    }
    return decodedString;
  };
}

const sub = new SubstitutionCipher(abc1, abc2);

console.log(sub.encode('abc'));
console.log(sub.decode('eta'));
