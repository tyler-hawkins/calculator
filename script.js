const operators = { 
	add: (a, b) => {
		return a + b;
	},

	subtract: (a, b) => {
		return a - b;
	},

	multiply: (a, b) => {
		return a * b;
	},

	divide: (a, b) => {
		if (b == 0) {
			return "Error";
		} else {
			return a / b;
		}
	}
}

function operate(operator, a, b) {
	console.log(operator, a, b);
	const result = operators[operator](a, b);
	display(result);
}

function display(value) {
	
}