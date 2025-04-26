const sumAll = function(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return "ERROR";
    }
    else if (!Number.isInteger(num1)|| !Number.isInteger(num2)) {
        return "ERROR";
    }
    else if (num1 < 0 || num2 < 0) {
        return "ERROR";
    }
    else {
        let biggerNum;
        let smallerNum;

        if (num1 > num2) {
            biggerNum = num1;
            smallerNum = num2;
        }
        else {
            biggerNum = num2
            smallerNum = num1;
        }

        let result = 0;
        for (let i = smallerNum; i <= biggerNum; i++) {
            result += i;
        }

        return result;
    }
};

// Do not edit below this line
module.exports = sumAll;

console.log("result: " + sumAll(2, 4));
