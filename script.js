let val1;
let val2;
let operator;
let calcHistory;

/*TODO: 
Add support for inputting decimals
Disable decimal button if there's already a decimal in the number
Truncate very long decimal results
Make "=" repeat last operation on result, val2
Style the calculator
Add a backspace button
Add keyboard support
Add calculation history
*/

const addListeners = () => {
	Array.from(document.getElementsByClassName("operator")).forEach(symbol => {
		symbol.addEventListener("click", () => {
			if (val2 != undefined) {
				operate(operator, val1, val2);
			}
			operator = symbol.id;
		});
		
	});
	Array.from(document.getElementsByClassName("number")).forEach(number => {
		number.addEventListener("click", () => {
			let numberClicked = parseInt(number.id);
			if (val1 != undefined && operator != undefined) {
				val2 = parseFloat((val2 || "").toString() + numberClicked);
			} else {
				val1 = parseFloat((val1 || "").toString() + numberClicked);
			}
			display();
		});
	});
	Array.from(document.getElementsByClassName("action")).forEach(action => {
		action.addEventListener("click", () => {
			switch(action.id) {
				case "equals":
					if (val1 == undefined && val2 == undefined) {
						break;
					}
					operate(operator, val1, val2);
					break;
				case "neg":
					val1 = negate(val1);
					display();
					break;
				case "clear":
					clearDisplay();
					break;
				case "dot":
					addDecimal();
					break;
			}
		})
	});
	clearDisplay();
};

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

const negate = a => {
	return -a;
}

function operate(operator, a, b) {
	console.log(operator, a, b);
	const result = operators[operator](a, b);	
	val1 = result;	
	val2 = undefined;
	display(result);
}

function addDecimal() {
	
}

function display() {
	document.getElementById("output").innerHTML = val2 || val1 || 0;
	document.getElementById("history").innerHTML = calcHistory || "";
}

function clearDisplay() {
	operator = undefined;
	val1 = undefined;
	val2 = undefined;
	calcHistory = undefined;
	display();
}
