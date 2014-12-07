/**
 * An factorial example using a stack
 */

function fact(n) {

	var s = new Stack();
	while (n > 1) {
		s.push(n--);
	}

	var product = 1;
	while (s.getLength() > 0) {
		product *= s.pop();
	}

	return product;
}

function getFact(n) {
	
	var result = fact(n);
	console.log('factorial of ' + n + ' is ' + result);
}

function runFact() {

	for (var i = 1; i <= 10; i++) {
		getFact(i);
	}
}

runFact();