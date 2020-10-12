var numOne = parseInt(prompt("Enter the first number:"));
var numTwo = parseInt(prompt("Enter the second number:"));

if (numOne == numTwo) {
	document.write("Both the numbers are equal.");
} else if (numOne > numTwo) {
	document.write(numOne + " i.e. the first number is larger.");
} else {
	document.write(numTwo + "  i.e. the second number is larger.");
}