// Don't worry about this code here, just checking your results :)
    // I get it, you're curious, 
    // but it's OK if you don't understand what's going on in here, you'll learn it in time.

    number = Number(prompt("enter a number"));

function numberChecker() {
	if(number === 6) {
		return true;
	} else {
		return false;
	}
}


    let numCorrect = 0;
    let numChecked = 0;

    const result = numberChecker();
    console.log(`You entered: ${number}, and got result: ${result}`);
    console.log("\n\n\n Test Results: \n")

    function checkNumberChecker(num) {
      number = num;
      const result = numberChecker();
      if ((result === true && number >= 10) ||
        (result === false && number < 10)) {
        numCorrect++;
        console.log(`If I enter ${number}, the result is ${result}. This is correct!`);
      } else {
        console.error(`I entered "${number}", and got "${result}" as a result, I should have gotten "${number >= 10}" instead`);
      }

      numChecked++
      console.log("\n");
    }

    checkNumberChecker(2)
    checkNumberChecker(12)
    checkNumberChecker(6)
    checkNumberChecker(10)
    checkNumberChecker(9)

    if (numCorrect === numChecked) {
      console.log("You've passed all the tests, continue to the next exercise!")
    } else {
      console.log(`You have failed ${numChecked - numCorrect} out of ${numChecked}, please try again`);
    }