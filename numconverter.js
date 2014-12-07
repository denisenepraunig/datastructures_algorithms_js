/* algorithm:

1. the rightmost digit of n is n % b -> push this onto the stack
2. replace n with n / b
3. repeat steps 1 and 2 until n = 0 and there are no significant 
   digits remaining
4. build the converted string by popping the stack until it is empty

ATTENTION
works only for bases 2 till 9

*/

function mulBase(num, base) {
	
	var s = new Stack();
	do {
		s.push(num % base);
		num = Math.floor(num /= base);
	} while (num > 0);

	var converted = "";
	while (s.getLength() > 0) {
		converted += s.pop();
	}

	return converted;
}

var num = 32;
var base = 2;

var newNum = mulBase(num, base);
console.log(num + ' converted to base ' +  base + ' is ' + newNum);

num = 125;
base = 8;

newNum = mulBase(num, base);
console.log(num + ' converted to base ' +  base + ' is ' + newNum);

base = 2;
for (var i = 0; i <= 31; i++) {
	num = i;
	newNum = mulBase(num, base);
	console.log(num + ' converted to base ' +  base + ' is ' + newNum);
}
