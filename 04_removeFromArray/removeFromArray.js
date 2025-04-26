const removeFromArray = function (passedArray, ...unwantedNums) {
  const newArray = [];

  console.log(passedArray);
  console.log(unwantedNums);

  for (const num of passedArray) {
    if (!unwantedNums.includes(num)) {
      newArray.push(num);
    }
  }

  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
