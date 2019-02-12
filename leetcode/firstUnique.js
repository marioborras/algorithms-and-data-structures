/*Given a string, find the first non-repeating character in it and return it's index.

If it doesn't exist, return -1.

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.

 */
// work in progress//
const firstUniqChar = str => {
  const index = -1;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    index = str.indexOf(str[i]);
  }
};
