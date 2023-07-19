/**
 * 19/07/2023
 * Practicing the switch to replace multiple if statements
 */

function switchOfStuff(val) {
        var answer = "";
        switch (val) {
                case 1:
                        answer = "Alpha";
                        break;
                case 2: 
                        answer = "Bata";
                        break;
                case 3:
                        answer = "Delta";
                        break;
        }
        return answer;
}

console.log(switchOfStuff(3));

/* The default option in a switch statement */

function switchDefault(val) {
        var answer = "";

        switch (val) {
                case "a":
                        answer = "apple";
                        break;
                case "b":
                        answer = "bird";
                        break;
                case "c":
                        answer = "cat";
                        break;
                default:
                        answer = "Should be either a, b, or c"
                        break;
        }
        return answer;
}
console.log(switchDefault("c"));

/**
 * multiple cases returning the same value
 */

function sequentialSizes(val) {
        var answer = "";
        switch (val) {
                case 1:               
                case 2:
                case 3:
                        answer = "low";
                        break;
                case 4:
                case 5:
                case 6:
                        answer = "mid";
                        break;
                case 7:
                case 8:
                case 9:
                        answer = "High";
                        break;
                default:
                        break;
        }
        return answer;
}
console.log(sequentialSizes(8));

