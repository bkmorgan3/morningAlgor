/*
205. Isomorphic Strings
https://leetcode.com/problems/isomorphic-strings/

Given two strings str1 and str2, determine if they are isomorphic.

Two strings are isomorphic if the characters in str1 can be replaced to get str2.

All occurrences of a character must be replaced with another character while preserving the order
of characters. No two characters may map to the same character but a character may map to itself.

Example 1:
Input: str1 = "egg", str2 = "add"
Output: true

Example 2:
Input: str1 = "foo", str2 = "bar"
Output: false

Example 3:
Input: str1 = "paper", str2 = "title"
Output: true


Note:
You may assume both str1 and str2 have the same length.
*/

/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */

const isIsomorphic = function (str1, str2) {
  // if strings arent the same length return false.
  // Create a charmap with chars from str1 as key and chars from str2 as values
    //  if chars dont exist in charmap, assign it during iteration 
  // compare chars from str1 and str2

  if (str1.length !== str2.length) {
    console.log("not the same length")
    return false;
  }

  const chars = {};

  for (let i = 0; i < str1.length; i += 1) {
    
    let char = str1[i];
    if (!chars[char]) {
      chars[char] = str2[i]
    } else if (chars[char] !== str2[i]) {
      console.log("strings differ at index ", i)
      return false
    }
  }
  return true;
};


