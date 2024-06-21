function isPalindrome(word) {
  //Starting with the beginning character of the word
  let start = 0;
  //Starting with the end character of the word
  let end = word.length - 1;

  //Use a while loop to iterate through the word and compare
    while (start < end) {
      //have to use Strict Inequality to immediately abort the while loop or else itll keep on continuing
      if (word[start] !== word[end]) {
        return false;
      }
      //If they do match, start index will increase while the end decreases to move towards the center of the word. Comparing again with our If statement.
      start++;
      end--;
    }
    //returns true if word is a pallindrome;
    return true;
}

/* 
  one of the easiest ways to see if a word is a palindrome is that you can break up the string, put in to reverse, and compare the reversed string to the original
  Example: const reversed = word.split('').reverse().join('');
            return word === reversed;

            
  another ways is you can also compare left and the right character and move towards the center.
*/

/*
  Explaination is in problem.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
