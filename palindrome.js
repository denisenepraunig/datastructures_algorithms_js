/**
 * A palindrome is a word which is spelled the same way
 * wether starting from the beginning or end
 */

function isPalindrome(word) {

	var s = new Stack();
	for (var i = 0; i < word.length; i++) {
		s.push(word[i]);
	}

	var rword = "";
	while (s.getLength() > 0) {
		rword += s.pop();
	}

	if (word === rword) {
		console.log(word + ' is a palindrome');
		return true;
	} else {
		console.log(word + ' is not a palindrome');
		return false;
	}
}

isPalindrome("racecar");
isPalindrome("hello");