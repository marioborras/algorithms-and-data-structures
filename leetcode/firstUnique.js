/*Given a string, find the first non-repeating character in it and return it's index.

If it doesn't exist, return -1.

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.

 */

/*The best possible solution here could be of a linear time because to ensure 
that the character is unique you have to check the whole string anyway.

The idea is to go through the string and save in a hash map the number of times 
each character appears in the string. That would take O(N) time,
 where N is a number of characters in the string.

And then we go through the string the second time, this time we use the hash map 
as a reference to check if a character is unique or not.
If the character is unique, one could just return its index. The complexity of the
 second iteration is O(N) as well. */

const firstUniqChar = str => {
  let index = -1;
  if (!str.length) return index;
  const freq = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (freq[char]) {
      freq[char] += freq[char];
    } else {
      freq[char] = 1;
    }
  }

  for (let j = 0; j < str.length; j++) {
    let char = str[j];
    if (freq[char] === 1) {
      index = j;
      return index;
    }
  }
  return index;
};
console.log(firstUniqChar('cc'));
