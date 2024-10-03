// const abTroubleshoot = require("./troubleshooting");
            

        /**
 * ===== Troubleshooting =====
 * The function below should log the number 2, however it does not, 
 * see if you can fix it!
 * Be sure to fix it in the spirit of the code, do not hard code the result.
 */

function troubleshooting() {
    const a = 1;
    const b = 1;

    let result;

    // Edit between these lines
    // =================================
    // result = "a" + "b";
    result = a + b;

    // =================================

    return result;
}

const result = troubleshooting();
    
if(result === 2) {
	console.log("Congrats! You got the correct answer");
} else if(typeof result === 'number') {
	console.log(`You returned the number ${result}, the result should be the number 2`);
} else {
	console.log(`You returned string "${result}", the result should be the number 2`);
}

// Do not change this 
// export default troubleshooting;