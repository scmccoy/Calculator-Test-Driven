// TODO: DEFINE ANY VARIABLES HERE
let numArray = [];
let inputArray = [];
let newValue = null;
let opArray = [];
let opDecider = null;
let finalAnswer = null;
//////////// MATH OPERATOR FUNCTIONS //////////////////
function prepAddOps(buttonInputs) {
	finalAnswer = (buttonInputs[0] + buttonInputs[1]);
	clearDisplay();
	updateDisplay(finalAnswer);
	// pemdas(finalAnswer);
}

function prepSubOps(buttonInputs) {
	finalAnswer = (buttonInputs[0] - buttonInputs[1]);
	clearDisplay();
	updateDisplay(finalAnswer);
}

function prepMultOps(buttonInputs) {
	finalAnswer = (buttonInputs[0] * buttonInputs[1]);
	clearDisplay();
	updateDisplay(finalAnswer);
}

function prepDivOps(buttonInputs) {
	finalAnswer = (buttonInputs[0] / buttonInputs[1]);
	clearDisplay();
	updateDisplay(finalAnswer);
}

function pemdas(finalAnswer) {

}

////////// CLICK HANDLER //////////////////
function handleButtonClick(buttonValue) {
	console.log('button value', buttonValue);
	console.log('final answer', finalAnswer);

	updateDisplay(buttonValue);
	inputArray.push(buttonValue);

	if (finalAnswer !== null && ((buttonValue === '+') || (buttonValue === '-') || (buttonValue === 'x') || (buttonValue === '*') || (buttonValue === '/'))) {
		opDecider = inputArray[inputArray.length - 1];
		console.log(opDecider);
		numArray.push(finalAnswer);
		inputArray = [];
	}

	if ((buttonValue === '+') || (buttonValue === '-') || (buttonValue === 'x') || (buttonValue === '*') || (buttonValue === '/')) {
		if (opDecider === null) {
			opDecider = inputArray[inputArray.length - 1];
			console.log('opDec orig ', opDecider);
		}
		inputArray.pop();
		newValue = inputArray.join("");
		numArray.push(Number(newValue));
		inputArray = [];
	}

	if (buttonValue === '=') {
		inputArray.pop();
		newValue = inputArray.join("");
		if (numArray.length === 2) {
			numArray.pop();
		}

		console.log('new val newValue2 ', newValue);
		numArray.push(Number(newValue));
		console.log('new val numArray2 ', numArray);
		console.log(opDecider);
		inputArray = [];
		if (opDecider === '+') {
			prepAddOps(numArray);
		} else if (opDecider === '-') {
			prepSubOps(numArray);
		} else if (opDecider === 'x') {
			prepMultOps(numArray);
		} else if (opDecider === '*') {
			prepMultOps(numArray);
		} else if (opDecider === '/') {
			prepDivOps(numArray);
		} else {
			console.log('did not pick operator');
		}
		opArray = [];
		numArray = [];
		inputArray = [];
	}

	if (buttonValue === 'c') {
		clearDisplay();
		opArray = [];
		numArray = [];
		inputArray = [];
		finalAnswer = null;
		opDecider = null;
	}
}



/** **************************************************************
 * These are our tests. If any of them fail you will see a message
 * in the developer tools "Console" - in which case the assignment
 * will NOT be considered complete!
 *
 *                  DO NOT CHANGE THESE LINES
 ****************************************************************/

document.querySelector('.run-tests').addEventListener('click', function() {
	console.info('Running tests...');
	var testOutput = document.querySelector('.display figure');
	clearDisplay();

	try {

		// Button click handler (addition)
		handleButtonClick(1);
		console.assert(testOutput.innerHTML === '1', 'pressing `1` did not result in "1" in the display (instead: ' + testOutput.innerHTML + ')');
		handleButtonClick(0);
		console.assert(testOutput.innerHTML === '10', testOutput.innerHTML, 'pressing `0` did not result in correct display (expected "10", but saw: ' + testOutput.innerHTML + ')');
		handleButtonClick('+');
		console.assert(testOutput.innerHTML === '10+', testOutput.innerHTML, 'pressing `+` did not result in correct display (expected "10+", but saw: ' + testOutput.innerHTML + ')');
		handleButtonClick(7);
		console.assert(testOutput.innerHTML === '10+7', testOutput.innerHTML, 'pressing `7` did not result in correct display (expected "10+7", but saw: ' + testOutput.innerHTML + ')');
		handleButtonClick('=');
		console.assert(testOutput.innerHTML === '17', testOutput.innerHTML, 'pressing `=` did not result in correct display (expected "17", but saw: ' + testOutput.innerHTML + ')');

		// Clear
		handleButtonClick('c');
		console.assert(testOutput.innerHTML === '', testOutput.innerHTML, 'pressing `C` did not clear the display');
		handleButtonClick(1);
		handleButtonClick('+');
		handleButtonClick(1);
		handleButtonClick('=');
		console.assert(testOutput.innerHTML === '2', testOutput.innerHTML, 'Doing addition after clearing did not work! (`1+1=` expected to display: `2`, but saw: ' + testOutput.innerHTML + ')');

		// Subtraction
		handleButtonClick('c');
		handleButtonClick(7);
		handleButtonClick('-');
		handleButtonClick(2);
		handleButtonClick('=');
		console.assert(testOutput.innerHTML === '5', testOutput.innerHTML, '`7-2=` did not result in 5, instead: ' + testOutput.innerHTML + '');

		// Division
		handleButtonClick('c');
		handleButtonClick(7);
		handleButtonClick('/');
		handleButtonClick(2);
		handleButtonClick('=');
		console.assert(testOutput.innerHTML === '3.5', testOutput.innerHTML, '`7/2=` did not result in 3.5, instead: ' + testOutput.innerHTML + '');

		// Multiplication
		handleButtonClick('c');
		handleButtonClick(7);
		handleButtonClick('*');
		handleButtonClick(2);
		handleButtonClick('=');
		console.assert(testOutput.innerHTML === '14', testOutput.innerHTML, '`7*2=` did not result in 14, instead: ' + testOutput.innerHTML + '');

		console.info('All tests have run. (If you see no errors, they all passed!)');
		handleButtonClick('c');

	} catch (e) {
		console.error('There was a syntax error during the test run:', e);
	}
});

document.querySelector('.run-epic-tests').addEventListener('click', function() {
	console.info('Running EPIC tests...');
	var testOutput = document.querySelector('.display figure');
	clearDisplay();

	try {

		// Button click handler (addition)
		handleButtonClick(1);
		console.assert(testOutput.innerHTML === '1', 'pressing `1` did not result in "1" in the display (instead: ' + testOutput.innerHTML + ')');
		handleButtonClick(3);
		console.assert(testOutput.innerHTML === '13', testOutput.innerHTML, 'pressing `3` did not result in correct display (expected "13", but saw: ' + testOutput.innerHTML + ')');
		handleButtonClick('+');
		console.assert(testOutput.innerHTML === '13+', testOutput.innerHTML, 'pressing `+` did not result in correct display (expected "13+", but saw: ' + testOutput.innerHTML + ')');
		handleButtonClick(7);
		console.assert(testOutput.innerHTML === '13+7', testOutput.innerHTML, 'pressing `7` did not result in correct display (expected "13+7", but saw: ' + testOutput.innerHTML + ')');
		handleButtonClick('=');
		console.assert(testOutput.innerHTML === '20', testOutput.innerHTML, 'pressing `=` did not result in correct display (expected "20", but saw: ' + testOutput.innerHTML + ')');
		handleButtonClick('+');
		console.assert(testOutput.innerHTML === '20+', testOutput.innerHTML, 'pressing `+` did not result in correct display (expected "20+", but saw: ' + testOutput.innerHTML + ')');
		handleButtonClick(5);
		console.assert(testOutput.innerHTML === '20+5', testOutput.innerHTML, 'pressing `5` did not result in correct display (expected "20+5", but saw: ' + testOutput.innerHTML + ')');
		handleButtonClick('=');
		console.assert(testOutput.innerHTML === '25', testOutput.innerHTML, 'pressing `=` did not result in correct display (expected "25", but saw: ' + testOutput.innerHTML + ')');
		handleButtonClick('/');
		console.assert(testOutput.innerHTML === '25/', testOutput.innerHTML, 'pressing `/` did not result in correct display (expected "25/", but saw: ' + testOutput.innerHTML + ')');
		handleButtonClick(1);
		console.assert(testOutput.innerHTML === '25/1', testOutput.innerHTML, 'pressing `1` did not result in correct display (expected "25/1", but saw: ' + testOutput.innerHTML + ')');
		handleButtonClick(0);
		console.assert(testOutput.innerHTML === '25/10', testOutput.innerHTML, 'pressing `0` did not result in correct display (expected "25/10", but saw: ' + testOutput.innerHTML + ')');
		handleButtonClick('=');
		console.assert(testOutput.innerHTML === '2.5', testOutput.innerHTML, 'pressing `=` did not result in correct display (expected "2.5", but saw: ' + testOutput.innerHTML + ')');
		handleButtonClick('+');
		console.assert(testOutput.innerHTML === '2.5+', testOutput.innerHTML, 'pressing `+` did not result in correct display (expected "2.5+", but saw: ' + testOutput.innerHTML + ')');
		handleButtonClick(2);
		console.assert(testOutput.innerHTML === '2.5+2', testOutput.innerHTML, 'pressing `2` did not result in correct display (expected "2.5+2", but saw: ' + testOutput.innerHTML + ')');
		handleButtonClick('.');
		console.assert(testOutput.innerHTML === '2.5+2.', testOutput.innerHTML, 'pressing `.` did not result in correct display (expected "2.5+2.", but saw: ' + testOutput.innerHTML + ')');
		handleButtonClick(3);
		console.assert(testOutput.innerHTML === '2.5+2.3', testOutput.innerHTML, 'pressing `3` did not result in correct display (expected "2.5+2.3", but saw: ' + testOutput.innerHTML + ')');
		handleButtonClick('=');
		console.assert(testOutput.innerHTML === '4.8', testOutput.innerHTML, 'pressing `=` did not result in correct display (expected "4.8", but saw: ' + testOutput.innerHTML + ')');

		console.info('All tests have run. (If you see no errors, they all passed!)');
		handleButtonClick('c');

	} catch (e) {
		console.error('There was a syntax error during the test run:', e);
	}
});


/**
 * 		DO NOT CHANGE ANY LINES BELOW HERE!!
 *
 * This event handler will fire for ALL button clicks. You need to decide
 * what to do based on which button was clicked in the handler function
 * defined above.
 */
[].slice.call(document.querySelectorAll('button')).forEach(function(element) {
	element.addEventListener('click', function() {
		var val = this.value;
		if (Number(this.value) || this.value === '0') {
			val = Number(this.value);
		}
		handleButtonClick(val);
	});
});

var display = document.querySelector('.display figure');

function updateDisplay(text) {
	display.innerText += text;
}

function clearDisplay() {
	display.innerText = '';
}
