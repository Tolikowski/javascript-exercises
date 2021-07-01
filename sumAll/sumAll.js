const sumAll = function(a, b) {
    let sum = 0;
    let numbers = [a, b];

    if (a < 0 || b < 0) {
        return "ERROR";
    } else if (!(typeof a === "number") || !(typeof b === "number")) {
        return "ERROR";
    } else {
        numbers.sort();

        for (i = numbers[0]; i <= numbers[1]; i++) {
            sum += i;
        }

        return sum;
    }


};

module.exports = sumAll;