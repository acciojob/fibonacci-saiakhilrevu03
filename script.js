function fibonacci(num) {
// your code here
	if(num===0) return 0;
	if(num===1) return 1;
	let first=fibonacci(num-1);
	let second = fibonacci(num-2);
	return first+second;
}

module.exports = fibonacci;
